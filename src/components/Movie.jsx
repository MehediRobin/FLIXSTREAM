const Movie = ({ movie }) => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block mr-6 cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="w-[100%] h-full absolute top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-violet-400 text-center  font-semibold flex flex-col items-center justify-center cursor-pointer">
        <p className=" text-sm md:text-lg lg:text-xl whitespace-normal object-cover">
          {movie?.title ? movie?.title : movie?.name}
        </p>
        <p>
          <span className="text-xs md:text-sm lg:text-base">
            IMDb: {movie?.vote_average ? movie?.vote_average.toFixed(1) : "N/A"}
          </span>
        </p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Movie;
