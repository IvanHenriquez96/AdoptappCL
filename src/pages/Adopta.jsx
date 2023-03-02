import React, { useEffect, useState } from "react";
import CardMascota from "../components/CardMascota";
import CardSkeleton from "../components/CardSkeleton";

import mascotas from "../Controllers/MascotasController";

const Adopta = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 px-32 fade-in">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3  md:px-32">
          {mascotas.map((mascota) => {
            return (
              <CardMascota
                key={mascota.id}
                idMascota={mascota.id}
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
  }
};

export default Adopta;
