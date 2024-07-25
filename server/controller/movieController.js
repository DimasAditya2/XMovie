const { Movie, Review } = require("../models/");
const { Op } = require("sequelize");
class MovieController {
  static async getMovie(req, res, next) {
    try {
      const { title } = req.query;

      let option = {
        include: [
          {
              model: Review
          },
          // {
          //     model: 
          // }
      ],
        where: {},
      };

      if (title) {
        option.where.title = {
          [Op.iLike]: `%${title}%`,
        };
      }

      const movies = await Movie.findAll(option);

      res.status(200).json(movies);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getMovieById(req, res, next) {
    try {
      const { id } = req.params;

      const data = await Movie.findByPk(id);

      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  static async addMovie(req, res, next) {
    try {
      const { title, releaseDate, genres, director, synopsis, posterUrl } =
        req.body;

      const newMovie = await Movie.create({
        title,
        releaseDate,
        genres,
        director,
        synopsis,
        posterUrl,
      });

      res.status(201).json({
        title: newMovie.title,
        releaseDate: newMovie.releaseDate,
        genres: newMovie.genres,
        director: newMovie.director,
        synopsis: newMovie.synopsis,
        posterUrl: newMovie.posterUrl,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const { id } = req.params;
      let getMovie = await Movie.findByPk(id);
      const { title, releaseDate, genres, director, synopsis, posterUrl } =
        req.body;

      const newMovie = await getMovie.update({
        title,
        releaseDate,
        genres,
        director,
        synopsis,
        posterUrl,
      });

      res.status(200).json({
        title: newMovie.title,
        releaseDate: newMovie.releaseDate,
        genres: newMovie.genres,
        director: newMovie.director,
        synopsis: newMovie.synopsis,
        posterUrl: newMovie.posterUrl,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMovie(req, res) {
    try {
      let { id } = req.params;

      let cuisine = await Movie.destroy({
        where: {
          id,
        },
      });

      if (!cuisine) {
        throw { name: "DataNotFound" };
      } else {
        res.status(200).json({
          message: `MOVIE WITH ID ${id} DELETE SUCCESFULLY`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MovieController;
