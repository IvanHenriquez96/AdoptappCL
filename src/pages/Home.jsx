import React from "react";
import Hero from "../components/Hero";
import SeccionBievenida from "../components/SeccionBievenida";
import SeccionCallToAction from "../components/SeccionCallToAction";
import SeccionObjetivos from "../components/SeccionObjetivos";
import SeccionServicios from "../components/SeccionServicios";

const Home = () => {
  return (
    <div className=" text-cyan-800 fade-in">
      <Hero />
      <br />
      <br />
      <br />
      <SeccionBievenida />
      <SeccionObjetivos />
      <SeccionServicios />
      <SeccionCallToAction />
      <br /> <br />
    </div>
  );
};

export default Home;
