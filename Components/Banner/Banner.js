import React from "react";

const Banner = ({ isLoading }) => {
  return (
    <div
      className={`w-full h-screen ${
        isLoading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 delay-300 `}
    >
      <div className={`bg`}></div>

      <div className="pt-40vh w-90vw mx-auto">
        <div className="w-3/5">
          <p className="text-blue text-base leading-3 tracking-wide uppercase mb-3 font-semibold">
            I'M A WEB Developer
          </p>
          <p className="text-6xl font-semibold text-grayish-green leading-none mb-3 ">
            Hire Me !
          </p>
          <p className="text-6xl font-semibold text-grayish-green leading-none mb-3">
            To Build Awesome
          </p>
          <p className="text-6xl font-semibold text-grayish-green leading-none">
            Web Experiences For You
          </p>

          <div className="mt-12">
            <a
              href="/"
              className="py-5 px-12 bg-blue shadow-lg text-white font-semibold uppercase text-sm tracking-wider"
            >
              SEE MY WORK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
