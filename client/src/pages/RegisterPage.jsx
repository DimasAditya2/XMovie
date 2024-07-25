import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InstanceAxios from "../helpers/InstanceAxios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [signUpForm, setSignUpForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setTitle('Register');
    document.title = title;
  }, [title]);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm({
      ...signUpForm,
      [name]: value,
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await InstanceAxios.post('/register', signUpForm);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="container max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-gray-900 text-4xl mb-6">Register</h1>
        <form onSubmit={handlerSubmit}>
          <div className="mb-5">
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="fullName"
              name="fullName"
              onChange={handlerChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email address
            </label>
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="email"
              name="email"
              onChange={handlerChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="password"
              name="password"
              onChange={handlerChange}
              required
            />
          </div>
          <button type="submit" className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
            Submit
          </button>
          <div className="text-center">
            <p className="text-gray-700">
              Have a Account ?<Link className="text-gray-900 underline" to="/login"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
