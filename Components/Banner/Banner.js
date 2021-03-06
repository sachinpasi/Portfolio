import React from "react";

const Banner = ({ isLoading }) => {
  return (
    <div
      className={`w-full h-screen  ${
        isLoading ? "opacity-0" : "opacity-100"
      } transition-opacity duration-1000 delay-300 `}
    >
      <div className={`bg`}>
        <div className="w-full h-full flex items-center">
          <video
            className="w-full h-95vh rounded-full  object-cover "
            autoPlay={true}
            loop
            controls={false}
            muted
          >
            <source src="/assets/human.mp4" />
          </video>
        </div>
      </div>

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
              href="/#projects"
              className="py-5 px-12 bg-blue shadow-lg text-white font-semibold uppercase text-sm tracking-wider"
            >
              SEE MY Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
