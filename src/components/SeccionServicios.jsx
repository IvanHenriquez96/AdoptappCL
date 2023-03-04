import React from "react";
import CardServicio from "./CardServicio";

const SeccionServicios = () => {
  return (
    <section className=" text-gray-600 body-font container  px-4 md:mx-auto md:px-32 ">
      <div className=" px-5 md:px-0 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className=" text-4xl font-bold title-font mb-2 text-sky-600">
            Aquí podrás encontrar...
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <CardServicio
            imagen="https://cdn-icons-png.flaticon.com/512/954/954591.png"
            titulo="Búsqueda de mascotas"
            desc="Permitir a los usuarios buscar y filtrar por características
                específicas de la mascota, como la raza, la edad, el tamaño, el
                género, la ubicación, entre otros."
          />
          <CardServicio
            imagen="https://cdn-icons-png.flaticon.com/512/2437/2437643.png"
            titulo="Perfiles de mascotas"
            desc="Mostrar perfiles detallados de cada mascota, incluyendo información sobre su historia, personalidad, comportamiento, cuidados médicos y requisitos especiales."
          />
          <CardServicio
            imagen="https://cdn-icons-png.flaticon.com/512/3002/3002655.png"
            titulo="Comunicación con las fundaciones"
            desc="Facilitar la comunicación directa entre los usuarios y las fundaciones para conocer más sobre las mascotas disponibles, hacer preguntas y programar visitas."
          />
          <CardServicio
            imagen="https://cdn-icons-png.flaticon.com/512/3712/3712738.png"
            titulo="Adopción en línea"
            desc=" Ofrecer la posibilidad de realizar el proceso de adopción en línea, incluyendo la solicitud, el pago de las tarifas de adopción, la revisión de los requisitos de adopción y la firma de los acuerdos de adopción."
          />
          <CardServicio
            imagen="https://cdn-icons-png.flaticon.com/512/5267/5267210.png"
            titulo="Recursos de adopción"
            desc="Proporcionar recursos educativos y de apoyo para ayudar a los usuarios a prepararse para la adopción de una mascota, como guías de cuidado de mascotas, consejos de entrenamiento y recomendaciones de veterinarios."
          />
          <CardServicio
            imagen="https://cdn-icons-png.flaticon.com/512/3039/3039788.png"
            titulo="Donaciones y voluntariado"
            desc="Brindar información sobre cómo hacer donaciones a las fundaciones y cómo participar como voluntario en eventos o en las instalaciones de las fundaciones."
          />
        </div>
      </div>
    </section>
  );
};

export default SeccionServicios;
