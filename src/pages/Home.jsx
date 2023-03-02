import React from "react";
import Hero from "../components/Hero";
import SeccionBievenida from "../components/SeccionBievenida";
import SeccionFooter from "../components/SeccionFooter";
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
      <SeccionFooter />
    </div>
  );
};

export default Home;
