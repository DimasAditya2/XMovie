import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bulkMovie, searchMovie } from "../stores/movieSlicer";
import { Link } from "react-router-dom";
import { IoBookmarkOutline } from "react-icons/io5";

const Movie = () => {
  const [query, setQuery] = useState("");
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const results = movies.results || [];
  const [title, setTitle] = useState("Movie");

  useEffect(() => {
    dispatch(bulkMovie());
  }, [dispatch]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(searchMovie(query));
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 mx-auto px-4">
        <form onSubmit={handleSearch} className="mx-auto max-w-2xl">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movies"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {results.map((movie, i) => (
            <div className="col" key={i} style={{ position: "relative" }}>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </a>
                <div className="p-5" style={{ height: "200px" }}>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {movie.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {movie.overview.length > 100
                      ? `${movie.overview.substring(0, 100)}...`
                      : movie.overview}
                  </p>
                  <div className="flex justify-between items-center h-10">
                    <Link title="add watchlist" className="text-2xl text-gray-700 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition">
                      <IoBookmarkOutline />
                    </Link>
                    <p className="mb-3 font-normal text-yellow-500 dark:text-yellow-500 sm:text-gray-700 sm:dark:text-gray-400">
                      <span className="font-semibold">Rating:</span>{" "}
                      {Math.floor(movie.vote_average)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* footer */}
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
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
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline mr-4 md:mr-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline mr-4 md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline mr-4 md:mr-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              TMBD API
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Movie;
