import React from "react";
import CardMascota from "../components/CardMascota";

import mascotas from "../Controllers/MascotasController";
console.log(mascotas);
const Adopta = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3">
        {mascotas.map((mascota) => {
          return (
            <CardMascota
              key={mascota.id}
              nombre={mascota.nombre}
              imagen_perfil={mascota.imagen_perfil}
              descripcion={mascota.descripcion}
              likes={mascota.likes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Adopta;
