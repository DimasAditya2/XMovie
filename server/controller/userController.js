const { comparePassword } = require("../helpers/bcryptjs");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models/");
const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(
  process.env.CLIENT_ID
);

class UserController {
  static async userLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      const foundUser = await User.findOne({
        where: { email },
      });

      if (!foundUser) {
        throw { name: "Invalid Username/Password" };
      }

      const compared = comparePassword(password, foundUser.password);

      if (!compared) {
        throw { name: "Invalid Username/Password" };
      }

      const access_token = createToken({ id: foundUser.id });

      res.status(200).json({ access_token });
    } catch (error) {
      next(error)
    }
  }

  static async userRegister(req, res, next) {
    try {
      const { userName, email, password } = req.body;
      const newUser = await User.create({ userName, email, password });

      res.status(201).json({
        userName: newUser.userName,
        email: newUser.email,
      });
    } catch (error) {
      next(error)
    }
  }

  static async loginByGoogle(req, res, next) {
    try {
      const { google_token } = req.headers;
      const ticket = await client.verifyIdToken({
        idToken: google_token,
        audience: process.env.CLIENT_ID,
      });

      const payload = ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          email: payload.email,
          password: Math.random().toString(36).slice(-8),
        },
      });

      const access_token = createToken({ id: user.id });

      res.status(200).json({ access_token });
    } catch (error) {
      next(error)
    }
  }

  // static async handlerLogout(req, res, next) {
  //   try {
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}

module.exports = UserController;
