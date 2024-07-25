import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CardComponent = ({ movie }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-60">
        <Link to={`/movies/details/${movie.id}`}>
          <img
            src={movie.posterUrl}
            style={{ height: "400px", objectFit: "cover" }}
            className="w-full object-cover"
            alt={movie.title}
          />
        </Link>

        <div className="p-4">
          <h5 className="text-lg text-slate-900 font-semibold">{movie.title}</h5>
          <p className="text-gray-600">{formatDate(movie.releaseDate)}</p>
          
          {movie.Reviews && movie.Reviews.length > 0 ? (
            movie.Reviews.map((review, index) => (
              <div key={index} className="mt-2" style={{position: 'relative'}}>
                <p className="text-gray-500">
                  Rating: {review.rating} <FaStar style={{ color: "yellow", position: 'absolute', top: '3.7px', left: '70px' }} />
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Belum ada ulasan.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
