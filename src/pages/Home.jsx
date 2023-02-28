import React from "react";
import Hero from "../components/Hero";
import SeccionBievenida from "../components/SeccionBievenida";
import SeccionObjetivos from "../components/SeccionObjetivos";

const Home = () => {
  return (
    <div className=" text-cyan-800 fade-in">
      <Hero />
      <br />
      <br />
      <br />

      <SeccionBievenida />
      <SeccionObjetivos />
    </div>
  );
};

export default Home;
