import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../../requests";
import { FaPlay } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import Row from "../components/Row";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.popularMovies).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const treamOverview = (str, char) => {
    if (str?.length > char) {
      return str.slice(0, char) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className="text-white w-full h-[650px] mb-10 scrollbar-hide">
      <div className="w-full h-full">
        <div className="w-full h-full">
          <div className="absolute w-full h-[650px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-center object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
        <div className="absolute top-[20%] px-8">
          <h1 className="text-white text-4xl md:text-7xl">{movie?.title}</h1>
          <div className="flex gap-4 mt-6">
            <button className="flex justify-between items-center px-4 py-2 w-[108px] h-14 text-2xl font-bold bg-[#E5DDC0] text-[#261E01] rounded">
              <FaPlay />
              <p>Play</p>
            </button>
            <button className="flex justify-between items-center px-6 py-2 w-[190px] h-14 text-2xl font-medium bg-[#454745] text-white rounded">
              <LuInfo className="text-3xl" />
              <p>More Info</p>
            </button>
          </div>
          <p className="text-xl mt-6 text-violet-400">
            Released Date: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] text-xl font-normal mt-6">
            {treamOverview(movie?.overview, 250)}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Row rowID="1" title="Up Coming" fetchURL={requests.upcomingMovies} />
        <Row rowID="2" title="Now Playing" fetchURL={requests.nowPlaying} />
        <Row rowID="3" title="Top Rated" fetchURL={requests.topRated} />
        <Row rowID="4" title="TV Shows" fetchURL={requests.tvShows} />
      </div>
    </div>
  );
};

export default Home;
