import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "../firebaseConfig";
import { UserContext } from "../context/UserContext";
import ModalAdoptar from "../components/ModalAdoptar";

const db = getFirestore(app);
const mascotasRef = collection(db, "mascotas");
const usuariosRef = collection(db, "usuarios");

const InfoMascotaPage = () => {
  //Id Parámetro
  let { idMascota } = useParams();

  //States
  const [mascota, setMascota] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();

  //Effect
  useEffect(() => {
    obtenerDatosMascota();
  }, []);

  const obtenerDatosMascota = async () => {
    const q = query(mascotasRef, where("id", "==", parseInt(idMascota)));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setMascota(doc.data());
    });
  };

  const obtenerDatosUsuario = async () => {
    const q = query(usuariosRef, where("id", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // setMascota(doc.data());
      console.log("usuario:", doc.data());
    });
  };

  //Context
  const { user } = useContext(UserContext);

  //Funciones

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const verificaUsuario = () => {
    console.log("click en adoptar");

    if (!user) {
      navigate("/login");
    } else {
      obtenerDatosUsuario();
      setIsOpenModal(true);
    }
  };

  return (
    <>
      <section
        className={"text-gray-600  body-font overflow-hidden fade-in relative"}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-600 tracking-widest">
                Fundación: {mascota.fundacion}
              </h2>
              <h1 className="text-sky-600 text-3xl title-font font-medium mb-4 mt-2">
                {mascota.nombre}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-sky-700 border-b-2 border-sky-600 py-2 text-lg px-1">
                  Descripción
                </a>
                {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Reviews
              </a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                Details
              </a> */}
              </div>
              <p className="leading-relaxed mb-4">{mascota.descripcion}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Edad</span>
                <span className="ml-auto text-gray-900">2 Meses</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Tamaño</span>
                <span className="ml-auto text-gray-900">Pequeño</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">
                  Cuidados especiales/Bajo tratamiento
                </span>
                <span className="ml-auto text-gray-900">SI</span>
              </div>
              <div className="flex">
                <button
                  onClick={verificaUsuario}
                  className="flex ml-auto text-white bg-yellow-500  font-medium border-0 py-2 px-6 focus:outline-none rounded-2xl"
                >
                  Adoptar
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          /> */}

            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
              src={mascota.imagen_perfil}
            />
          </div>
        </div>
      </section>
      <ModalAdoptar isOpen={isOpenModal} onClose={handleCloseModal}>
        <h1 className="text-xl text-sky-600 font-bold mb-4">
          ¡Muchas Gracias! {user.displayName}
        </h1>
        <p className="text-gray-800">
          Te pondremos en contácto con la fundación "
          <span className="font-semibold text-sky-700">
            {mascota.fundacion}
          </span>
          " para que tramites una visita a "
          <span className="font-semibold text-sky-700">{mascota.nombre}</span>"
          esperamos que hayas leído la descripción con atención ya que este
          amiguito puede que necesite de{" "}
          <span className="font-semibold text-sky-700">
            Cuidados Especiales
          </span>
          , a continuáción vamos a necesitar un número de teléfono ya que se
          iniciará un chat vía Whatsapp con la fundación.
        </p>

        <form>
          <div className="relative my-4">
            <label htmlFor="email" className="leading-7 text-sm text-sky-600">
              Celular
            </label>
            <input
              type="text"
              // value={datosForm.email}
              // onChange={handleChange}
              name="telefono"
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </form>
      </ModalAdoptar>
    </>
  );
};

export default InfoMascotaPage;
