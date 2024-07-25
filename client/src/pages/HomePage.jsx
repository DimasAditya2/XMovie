import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../stores/movieSlicer";
import CardComponent from "../components/CardComponent";
import { Link } from "react-router-dom";
import "../assets/style.css";
const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    setTitle('Home page')
    document.title = title
  })
  
  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src={
            "https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Explore the Movie
          </h2>
          <p className="sm:text-lg text-base text-center text-gray-200">
            Embark on an unforgettable journey. look for more movies
          </p>
          <Link
            to="/movies"
            className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Read Now
          </Link>
        </div>
      </div>

      {/* search */}

      <div className="container mx-auto px-4 py-8 bg-gray-900">
        <h1 className="text-2xl font-semibold mb-6 text-white">New Movies</h1>
        <div className="scroll-container">
          <div className="inline-flex space-x-4">
            {data.map((movie, i) => (
              <CardComponent key={i} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
