import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../pages/MainLayout";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import Movie from "../pages/Movie";
import AiPage from "../pages/AiPage";

const checkLogin = () => {
  console.log('check login running');
  if (!localStorage.access_token) {
    console.log('masuk');
    return redirect('/login');
  }
  return null;
};

const checkNotLogin = () => {
  if (localStorage.access_token) {
    return redirect('/');
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: checkLogin
      },
      {
        path: '/movies/details/:id',
        element: <Detail/>,
        loader: checkLogin
      },
      {
        path: '/movies',
        element: <Movie/>,
        loader: checkLogin
      },
      {
        path: '/chat',
        element: <AiPage/>,
        loader: checkLogin
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: checkNotLogin
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

export default router;
