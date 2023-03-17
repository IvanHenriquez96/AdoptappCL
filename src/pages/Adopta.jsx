import React, { useEffect, useState } from "react";
import CardMascota from "../components/CardMascota";
import CardSkeleton from "../components/CardSkeleton";
import app from "../firebaseConfig";

// import mascotas from "../Controllers/MascotasController";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const db = getFirestore(app);

const Adopta = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    obtenerMascotas(db);
  }, []);

  const obtenerMascotas = async function getCities(db) {
    const mascotasCol = collection(db, "mascotas");
    const mascotaSnapshot = await getDocs(mascotasCol);
    const mascotaList = await mascotaSnapshot.docs.map((doc) => doc.data());
    // console.log(mascotaList);
    setMascotas(mascotaList);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 md:px-32 fade-in">
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
      <div className="fade-in">
        <div className="text-center text-3xl md:text-4xl font-bold text-sky-600 mt-20 fade-in">
          Te presentamos a...
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3  md:px-32 mt-10">
          {mascotas.map((mascota) => {
            return (
              <CardMascota
                key={mascota.id}
                edad={mascota.edad}
                raza={mascota.raza}
                idMascota={mascota.id}
                nombre={mascota.nombre}
                imagen_perfil={mascota.imagen_perfil}
                descripcion={mascota.descripcion}
                likes={mascota.likes}
                sexo={mascota.sexo}
                especie={mascota.especie}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default Adopta;
