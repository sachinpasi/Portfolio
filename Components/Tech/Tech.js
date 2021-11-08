import React from "react";

import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

const Tech = () => {
  return (
    <section className="w-full h-full">
      <div className="w-90vw mx-auto h-full my-48">
        <div className="font-medium">
          <h3 className="uppercase text-3xl tracking-wider">
            Technologies That I Love
          </h3>
          <div className="grid mt-20 grid-cols-7">
            <div className="flex flex-col items-center">
              <SiReact className="text-9xl text-grayish-green" />
              <span className="uppercase text-grayish-green text-sm my-4">
                React js
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-9xl text-grayish-green" />
              <span className="uppercase text-grayish-green text-sm my-4">
                next js
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiRedux className="text-9xl text-grayish-green" />
              <span className="uppercase text-grayish-green text-sm my-4">
                redux js
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-9xl text-grayish-green" />
              <span className="uppercase text-grayish-green text-sm my-4">
                express js
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-9xl text-grayish-green" />
              <span className="uppercase text-grayish-green text-sm my-4">
                mongo db
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-9xl text-grayish-green" />
              <span className="uppercase text-grayish-green text-sm my-4">
                Tailwind
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SiStyledcomponents className="text-9xl text-grayish-green" />
              <span className="uppercase text-grayish-green text-sm my-4">
                styled components
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
