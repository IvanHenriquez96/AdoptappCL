import React from "react";
import Hero from "../components/Hero";
import SeccionBievenida from "../components/SeccionBievenida";
import SeccionFooter from "../components/SeccionFooter";
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
      <SeccionFooter />
    </div>
  );
};

export default Home;
