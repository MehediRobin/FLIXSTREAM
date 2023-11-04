import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const scrollLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 1000;
  };
  const scrollRight = () => {
    let slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 1000;
  };
  return (
    <div className="px-8 w-full h-full  mb-8">
      <h2 className="text-white text-lg md:text-xl lg:text-2xl mb-6">
        {title}
      </h2>
      <div className="flex items-center group relative">
        <MdChevronLeft
          onClick={scrollLeft}
          className=" text-violet-800 bg-white absolute left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => {
            scrollRight();
          }}
          className="text-violet-800 bg-white absolute right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer hidden z-50 group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
