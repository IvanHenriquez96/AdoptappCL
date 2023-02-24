import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen imagen_hero flex justify-center items-center">
      <div className="text-center px-4 md:px-40 text-white">
        <p className="text-5xl my-5 font-bold">HERO SECTION</p>
        <p className="text-2xl font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          officiis provident vero exercitationem earum saepe dignissimos!
          Reiciendis repellat accusantium est molestiae quasi at dignissimos
          illo repellendus praesentium, dolor sunt a.
        </p>

        <Link to={"adopta"}>
          <button className="flex mx-auto my-5 text-white font-bold bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded-2xl text-lg">
            ¡ADOPTA!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
