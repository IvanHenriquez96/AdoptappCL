import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
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

  console.log({ mascota });

  //Effect
  useEffect(() => {
    obtenerDatosMascota();
  }, []);

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

  const obtenerDatosMascota = async () => {
    const mascotaRef = doc(db, "mascotas", idMascota);

    try {
      const mascotaSnap = await getDoc(mascotaRef);
      setMascota(mascotaSnap.data());
    } catch (error) {}
  };

  const obtenerDatosUsuario = async () => {
    const q = query(usuariosRef, where("id", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // setMascota(doc.data());
      console.log("usuario:", doc.data());
    });
  };

  const crearCita = async () => {
    console.log("crear cita para la adopción de " + idMascota);

    // Add a new document with a generated id
    const newCita = doc(collection(db, "citas"));

    let today = new Date();
    let date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    const cita = {
      email_usuario: user.email,
      fecha_inicio: dateTime,
      fecha_termino: null,
      finalizada: false,
      id_fundacion: mascota.id_fundacion,
      id_mascota: idMascota,
      id_usuario: user.uid,
      nombre_fundacion: user.displayName,
      nombre_mascota: mascota.nombre,
      telefono_fundacion: "+56912345678",
    };

    // console.log({ cita });

    try {
      await setDoc(newCita, cita);
    } catch (error) {
      console.log(error);
    }

    // console.log("agregado a la coleccion");

    navigate("/dashboard");

    window.open("https://wa.me/56912345678", "_blank", "noreferrer");
  };

  return (
    <>
      <section className={"text-gray-600  body-font overflow-hidden fade-in relative"}>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-md title-font text-gray-600 tracking-widest">
                Fundación: {mascota.fundacion}
              </h2>
              <h1 className="text-sky-600 text-3xl title-font font-medium my-4">
                {mascota.nombre}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-sky-600 font-semibold border-b-2 border-sky-600 py-2 text-lg px-1">
                  Descripción
                </a>
              </div>
              <p className="leading-relaxed mb-4 border-b-2 border-sky-600 pb-5">
                {mascota.descripcion}
              </p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Edad</span>
                <span className="ml-auto text-gray-900">{mascota.edad}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Tamaño</span>
                <span className="ml-auto text-gray-900">{mascota.tamano}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">
                  Cuidados especiales/Bajo tratamiento
                </span>
                <span className="ml-auto text-gray-900">
                  {mascota.discapacidad ? "SI" : "NO"}
                </span>
              </div>

              <div className="flex">
                <button
                  onClick={verificaUsuario}
                  className="flex ml-auto text-white bg-yellow-500  font-medium border-0 py-2 px-6 focus:outline-none rounded-2xl"
                >
                  Adoptar
                </button>
              </div>
            </div>

            <img
              alt="mascota_perfil"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
              src={mascota.imagen_perfil}
            />
          </div>
        </div>
      </section>

      <ModalAdoptar isOpen={isOpenModal} onClose={handleCloseModal}>
        {user && (
          <div>
            <h1 className="text-xl text-sky-600 font-bold mb-4">
              ¡Muchas Gracias! {user.displayName}
            </h1>
            <p className="text-gray-800">
              Te pondremos en contácto con la fundación "
              <span className="font-semibold text-sky-700">{mascota.fundacion}</span>"
              para que tramites una visita a "
              <span className="font-semibold text-sky-700">{mascota.nombre}</span>"
              esperamos que hayas leído la descripción con atención ya que este amiguito
              puede que necesite de{" "}
              <span className="font-semibold text-sky-700">Cuidados Especiales</span>, a
              continuáción vamos a abrir un chat vía Whatsapp con la fundación para que
              inicies el proceso de adopción.
            </p>

            <button
              className="flex w-full mt-5 p-4 bg-green-600 text-white rounded-full font-bold justify-center"
              onClick={crearCita}
            >
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
                alt="whatsapp_logo"
                className="w-7  bg-white rounded-full p-1 mr-2"
              />
              <p>Hablar con la fundación</p>
            </button>
          </div>
        )}
      </ModalAdoptar>
    </>
  );
};

export default InfoMascotaPage;
