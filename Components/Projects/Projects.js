import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="w-full h-full">
      <div className="w-90vw mx-auto my-14">
        <h3 className="text-5xl font-semibold text-grayish-green leading-none mb-10 uppercase py-4">
          Projects / Work
        </h3>
        <div className=" w-80vw mx-auto flex flex-row justify-around">
          <div className="pl-5 w-full flex flex-col items-center">
            <div className="mt-8 overflow-hidden w-5/6 h-600px rounded-2xl bg-white shadow-xl transition-all transform hover:shadow-2xl hover:scale-105 cursor-pointer grid grid-rows-4 ">
              <img
                className="w-full  row-span-3 h-full object-cover object-top"
                src="/assets/projects/awaasonline.png"
                alt=""
              />
              <div className="row-span-1 py-5 px-10 ">
                <h4 className="text-3xl font-semibold text-grayish-green mb-2  ">
                  Awaasonline
                </h4>
                <p className="text-xl font-extralight text-grayish-green leading-6">
                  A Real State Website Based On Panipat.
                </p>
                <div className="flex items-center my-3">
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    REACT J.S
                  </div>
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    REDUX
                  </div>
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    TAILWIND CSS
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "35vh",
              }}
              className=" overflow-hidden w-5/6 h-600px rounded-2xl bg-white shadow-xl transition-all transform hover:shadow-2xl hover:scale-105 cursor-pointer grid grid-rows-4 "
            >
              <img
                className="w-full  row-span-3 h-full object-cover object-top"
                src="/assets/projects/awaasonline.png"
                alt=""
              />
              <div className="row-span-1 py-5 px-10 ">
                <h4 className="text-3xl font-semibold text-grayish-green mb-2  ">
                  Awaasonline
                </h4>
                <p className="text-xl font-extralight text-grayish-green leading-6">
                  A Real State Website Based On Panipat.
                </p>
                <div className="flex items-center my-3">
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    REACT J.S
                  </div>
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    REDUX
                  </div>
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    TAILWIND CSS
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="pr-5 w-full flex flex-col items-center ">
            <div
              style={{
                marginTop: "60vh",
              }}
              className=" overflow-hidden w-5/6 h-600px rounded-2xl bg-white shadow-xl transition-all transform hover:shadow-2xl hover:scale-105 cursor-pointer grid grid-rows-4 "
            >
              <img
                className="w-full  row-span-3 h-full object-cover object-top"
                src="/assets/projects/awaasonline.png"
                alt=""
              />
              <div className="row-span-1 py-5 px-10 ">
                <h4 className="text-3xl font-semibold text-grayish-green mb-2  ">
                  Awaasonline
                </h4>
                <p className="text-xl font-extralight text-grayish-green leading-6">
                  A Real State Website Based On Panipat.
                </p>
                <div className="flex items-center my-3">
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    REACT J.S
                  </div>
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    REDUX
                  </div>
                  <div className="bg-grayish-green text-white px-2 py-1 rounded mr-2">
                    TAILWIND CSS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
