import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "./../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Slider = () => {
  const screenWidth = window.innerWidth;
  const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
  const elementRef = useRef();

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[50px] absolute mx-5 mt-[250px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[50px] absolute mx-5 mt-[250px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt="poster"
            className="min-w-full md:h-[510px] object-cover object-center mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
