import React from "react";
import { RiRadioButtonLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="w-full bg-darkblue  ">
      <div className="w-90vw  mx-auto h-full py-12">
        <h3 className="text-5xl font-semibold text-white leading-none mb-10 ">
          ABOUT
        </h3>
        <div className="w-full mx-auto my-4">
          <p className=" my-2 text-white flex items-center text-2xl font-thin">
            <strong className="text-white mr-4 text-2xl">—</strong>I am an
            undergrad (B.Tech in CSE) at Oriental Institute Of Science And
            Technology, Bhopal.
          </p>
        </div>
        <div className="w-full mx-auto my-4">
          <p className=" my-2 text-white flex items-center text-2xl font-thin">
            <strong className="text-white mr-4 text-2xl">—</strong> My main
            interest is Fullstack development (MERN stack).
          </p>
        </div>

        <h3 className="text-5xl font-semibold text-white leading-none my-8 mt-12 ">
          WORK EXPERIENCE
        </h3>

        <div className="py-2">
          <div className="w-full mx-auto my-4">
            <h4 className=" text-white flex items-center text-5xl font-medium">
              <RiRadioButtonLine className="text-white text-3xl mr-4" />
              Codeiator
            </h4>
            <div className="flex items-center">
              <p className=" text-white flex items-center text-xl font-thin my-0.5 ml-12">
                Front-End Development Intern
              </p>
              <p className=" text-white flex items-center text-xl font-bold my-2  ml-4">
                [ March 2021 - Current ]
              </p>
            </div>
          </div>
          <div className="w-full  my-2 mx-8">
            <p className=" my-2 text-white flex items-center text-xl font-thin">
              <strong className="text-white mr-4 text-2xl">—</strong>Developed
              Front-End for many projects .
            </p>
            <p className=" my-2 text-white flex items-center text-xl font-thin">
              <strong className="text-white mr-4 text-2xl">—</strong>Used React
              J.S , Redux J.S , Tailwind And Created Scalable Web Applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
