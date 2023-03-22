import React, { useEffect, useState } from "react";
import CardMascota from "../components/CardMascota";
import CardSkeleton from "../components/CardSkeleton";
import app from "../firebaseConfig";

// import mascotas from "../Controllers/MascotasController";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import FiltroMascotas from "../components/FiltroMascotas";

const db = getFirestore(app);

const Adopta = () => {
  //States
  const [isLoading, setIsLoading] = useState(true);
  const [mascotas, setMascotas] = useState([]);
  const [mascotasOriginal, setMascotasOriginal] = useState([]);
  const [filtroIsOpen, setFiltroIsOpen] = useState(false);

  //Effects
  useEffect(() => {
    console.log("Entra en el Useffect de Adopta,jsx");
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    obtenerMascotas(db);
  }, []);

  //Funciones
  const obtenerMascotas = async function getCities(db) {
    const mascotasCol = collection(db, "mascotas");
    const mascotaSnapshot = await getDocs(mascotasCol);
    const mascotaList = await mascotaSnapshot.docs.map((doc) => doc.data());

    setMascotas(mascotaList);
    setMascotasOriginal(mascotaList);

    localStorage.setItem("ListadoMascotas", JSON.stringify(mascotaList));
    setIsLoading(false);
  };

  const toggleFiltro = (e) => {
    e.preventDefault();
    setFiltroIsOpen(!filtroIsOpen);
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
      <div className="fade-in relative">
        {filtroIsOpen && (
          <FiltroMascotas
            mascotasOriginal={mascotasOriginal}
            setMascotas={setMascotas}
          />
        )}

        <br />
        <br />
        <div className="text-center text-3xl md:text-4xl font-bold text-sky-600  fade-in">
          Te presentamos a...
        </div>

        <div className="flex justify-end px-4  md:px-32 my-10">
          <button
            onClick={toggleFiltro}
            className={` border rounded-lg py-1 px-2 ${
              filtroIsOpen
                ? "bg-sky-600 text-white"
                : "text-sky-600  border-sky-600"
            }`}
            // filtroIsOpen
          >
            Filtrar búsqueda
          </button>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3  md:px-32 mt-10">
          {mascotas.length > 0 ? (
            mascotas.map((mascota) => {
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
            })
          ) : (
            <h1 className="px-4 md:px-32 mt-10 text-3xl font-bold text-sky-600 h-screen ">
              No se encontraron resultados
            </h1>
          )}
        </div>
      </div>
    );
  }
};

export default Adopta;
