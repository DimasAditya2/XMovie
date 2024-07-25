import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailMovies, resetData } from "../stores/movieSlicer";

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date));
}

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const [title, setTitle] = useState('')
  console.log(detail);

  useEffect(() => {
    dispatch(detailMovies(id));

    return () => {
      dispatch(resetData());
    };
  }, [dispatch, id]);

  useEffect(() => {
    setTitle('Detail Movie')
    document.title = title
  })

  return (
    <div className="container flex mx-auto my-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg max-w-4xl">
      <div className="flex flex-col items-center h-3/4 md:flex-row">
        <div className="md:w-1/3 flex justify-center">
          <img
            className="rounded-lg"
            src={detail.posterUrl}
            alt={detail.title}
          />
        </div>
        <div className="md:w-2/3 md:ml-6">
          <h2 className="text-4xl font-bold mb-4">{detail.title}</h2>
          <p className="text-gray-300 mb-4">{detail.overview}</p>
          <div className="mb-4">
            <span className="font-bold">Release Date: </span>
            {formatDate(detail.releaseDate)}
          </div>
          <div className="mb-4">
            <span className="font-bold">Rating: </span>
            {detail.rating} / 4 
          </div>
          <div className="mb-4">
            <p className="text-gray-100">{detail.synopsis}</p>
          </div>
          <button
            type="button"
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
