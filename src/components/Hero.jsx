import React from "react";

const Hero = () => {
  return (
    <div className="h-screen">
      <div className="imagen_hero    w-full h-screen absolute">hola</div>

      <div className=" w-full h-screen absolute z-20 bg-gradient-to-tr from-transparent to-cyan-700 flex justify-center items-center">
        <div className="text-white grid md:grid-cols-2  justify-center items-center">
          <p className="text-white font-bold text-5xl text-center">
            Ellos también merecen una segunda oportunidad
          </p>

          <div className="flex justify-center items-middle">
            <img
              className="w-1/2"
              src="https://cdn-icons-png.flaticon.com/512/5267/5267516.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
