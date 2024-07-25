import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InstanceAxios from "../helpers/InstanceAxios";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setTitle("Login");
    document.title = title;
  }, [title]);

  const handlerChange = (e) => {
    const { name, value } = e.target;

    setSignInForm({
      ...signInForm,
      [name]: value,
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await InstanceAxios.post("/login", signInForm);

      localStorage.setItem("access_token", data.access_token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  async function handleCredentialResponse(response) {
    try {
      let res = await axios({
        method: "post",
        url: "http://localhost:3000/login-google",
        headers: {
          google_token: response.credential,
        },
      });

      localStorage.setItem("access_token", res.data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_CLIENT_ID,
        callback: handleCredentialResponse,
      });
      google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
        theme: "outline",
        size: "large",
      });
      google.accounts.id.prompt();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="container max-w-sm flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-gray-900 text-4xl mb-6 font-bold">Login form</h1>
        <form onSubmit={handlerSubmit} className="w-full">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={signInForm.email}
              onChange={handlerChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={signInForm.password}
              onChange={handlerChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button
          style={{width: '100%'}}
            type="submit"
            className="mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <div className="text-center">
            <p className="text-gray-900">
              Dont Have a Account ?<Link className="text-gray-900 underline" to="/register">register </Link>
            </p>
          </div>
        </form>
        <div id="buttonDiv" className="mt-5"></div>
      </div>
    </div>
  );
};

export default LoginPage;
