import React, { useState } from "react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import app from "../firebaseConfig";

const db = getFirestore(app);

const BotonEliminar = ({ idMascota, mascotas, setMascotas }) => {
  const [quiereEliminar, setQuiereEliminar] = useState(false);
  console.log(mascotas);

  const borrarMascota = async () => {
    console.log("quiere eliminar");
    await deleteDoc(doc(db, "mascotas", idMascota));
    console.log("eliminado");

    const mascotasFiltrado = mascotas.filter(
      (mascota) => mascota.id !== idMascota
    );
    setMascotas(mascotasFiltrado);
  };

  return (
    <>
      {quiereEliminar ? (
        <div className="grid grid-cols-2 gap-x-2 fade-in">
          <button
            className="rounded-lg bg-red-500 text-white p-1"
            onClick={borrarMascota}
          >
            Eliminar
          </button>
          <button
            className="rounded-lg bg-red-500 text-white p-1"
            onClick={() => setQuiereEliminar(false)}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <button
          className="rounded-lg bg-red-500 text-white p-1 "
          onClick={() => setQuiereEliminar(true)}
        >
          Eliminar
        </button>
      )}
    </>
  );
};

export default BotonEliminar;
