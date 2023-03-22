import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import app from "../firebaseConfig";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore(app);

const DashboardPage = () => {
  //States
  const { user } = useContext(UserContext);
  console.log(user);

  const [seccionCitas, setSeccionCitas] = useState(true);
  const [seccionMascotas, setSeccionMascotas] = useState(false);
  const [mascotas, setMascotas] = useState([]);
  const [citas, setCitas] = useState([]);

  //Effects
  useEffect(() => {
    obtenerMascotas(db);
    obtenerCitas(db);
  }, []);

  console.log({ mascotas }, { citas });

  //Functions
  const obtenerMascotas = async (db) => {
    const mascotasCol = collection(db, "mascotas");
    const q = query(mascotasCol, where("id_fundacion", "==", user.uid));
    const mascotaSnapshot = await getDocs(q);
    const mascotaList = await mascotaSnapshot.docs.map((doc) => doc.data());
    setMascotas(mascotaList);
  };
  const obtenerCitas = async (db) => {
    const citasCol = collection(db, "citas");
    const q = query(citasCol, where("id_fundacion", "==", user.uid));
    const citasSnapshot = await getDocs(q);
    const citasList = await citasSnapshot.docs.map((doc) => doc.data());
    setCitas(citasList);
  };

  return (
    <div className="grid">
      {/* MODO CELULAR */}
      <div className="md:px-32 px-4 text-gray-500 h-full">
        <p className="text-xl font-bold text-sky-600 my-4 ">
          Bienvenido: {user.displayName}
        </p>

        <div className="grid grid-cols-2 border-b p-1 border-sky-700">
          <p
            className={`mt-5 cursor-pointer ${
              seccionCitas ? "text-sky-600 font-semibold" : "text-gray-500"
            }`}
            onClick={() => {
              setSeccionCitas(true);
              setSeccionMascotas(false);
            }}
          >
            Mis citas Agendas
          </p>

          <p
            className={`mt-5 cursor-pointer ${
              seccionMascotas ? "text-sky-600 font-semibold" : "text-gray-500"
            }`}
            onClick={() => {
              setSeccionCitas(false);
              setSeccionMascotas(true);
            }}
          >
            Mis Mascotas Inscritas
          </p>
        </div>

        {seccionCitas && (
          <div className="fade-in">
            {citas.map((cita, index) => {
              return (
                <div
                  key={index}
                  className="border rounded-lg border-sky-600 p-4 my-5"
                >
                  {/* {console.log(cita.fecha_inicio.seconds)} */}
                  <p>
                    <span className="text-sky-600">Fecha y hora:</span>{" "}
                    {cita.fecha_inicio.seconds}
                  </p>
                  <p>
                    <span className="text-sky-600">Mascota:</span>{" "}
                    {cita.nombre_mascota}
                  </p>
                  <p>
                    <span className="text-sky-600">Fundación:</span>{" "}
                    {cita.nombre_fundacion}
                  </p>
                  <p>
                    <span className="text-sky-600">Email Usuario: </span>
                    {cita.email_usuario}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {seccionMascotas && (
          <div className="fade-in">
            <button className="w-full bg-sky-600 text-white py-1 rounded-lg font-semibold my-5">
              Agregar Mascota
            </button>

            {mascotas.map((mascota) => {
              return (
                <div className="border rounded-lg border-sky-600 p-4 mb-5">
                  <p className="mb-2">
                    <span className="text-sky-600">Nombre:</span>{" "}
                    {mascota.nombre}
                  </p>
                  <p className="mb-2">
                    <span className="text-sky-600">Especie:</span>{" "}
                    {mascota.especie}
                  </p>
                  <p className="mb-2">
                    <span className="text-sky-600">Descripción:</span>{" "}
                    {mascota.descripcion}
                  </p>
                  <p className="mb-2">
                    <span className="text-sky-600">Sexo:</span> {mascota.sexo}
                  </p>
                  <p className="mb-2">
                    <span className="text-sky-600">Raza:</span> {mascota.raza}
                  </p>
                </div>
              );
            })}

            {/* <div className="border rounded-lg border-sky-600 p-4 my-5">
              <p>
                <span className="text-sky-600">Fecha y hora:</span> 16-03-2023
                15:23
              </p>
              <p>
                <span className="text-sky-600">Mascota:</span> Baltazar
              </p>
              <p>
                <span className="text-sky-600">Fundación:</span> AdoptaChile
              </p>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
