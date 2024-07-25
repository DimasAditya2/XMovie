import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsStars } from "react-icons/bs";

import Swal from "sweetalert2";

const NavbarComponent = () => {

  const navigate = useNavigate();
  const handlerLogout = async () => {
    const result = await Swal.fire({
      title: "Anda yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      color: "#fff",
      background: "rgb(15 23 42)",
      confirmButtonColor: "rgb(101 163 13)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, logout!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Xmovies
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/login"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
            <button
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
              onClick={handlerLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-between" style={{position: 'relative'}}>
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to=""
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/watchlists"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Watch List
                </Link>
              </li>
              <li>
                <a
                  href="/chat"
                  className="text-gray-900 dark:text-white hover:underline"
                >

                  Ask Ai <BsStars style={{position: 'absolute', top: '5px', left: '290px', fontSize: '1.3rem'}}/>
                </a>
              </li>
            </ul>
            <div>
              <Link
                to="/profile/"
                className="text-gray-900 dark:text-white hover:underline text-3xl"
              >
                <CgProfile />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
