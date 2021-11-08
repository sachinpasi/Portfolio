import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Startup from "../Startup/Startup";
import Tech from "../Tech/Tech";

const Home = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Startup isLoading={isLoading} />
      <Header isLoading={isLoading} />
      <Banner isLoading={isLoading} />
      <Tech isLoading={isLoading} />
      <About isLoading={isLoading} />
      <Projects />
    </>
  );
};

export default Home;
