import React from "react";

const FundacionesPage = () => {
  return (
    <div className="container px-4 md:px-32 my-20 mx-auto text-gray-600 fade-in">
      <h2 className=" text-3xl md:text-4xl  text-sky-600 font-bold text-center md:text-left my-10">
        ¡Gracias por esta gran labor!
      </h2>

      <p className=" text-justify text my-5">
        En colaboración con diversas organizaciones sin fines de lucro,
        trabajamos para encontrar hogares responsables y amorosos para estos
        animales, proporcionándoles la atención médica y los cuidados necesarios
        para que puedan tener una vida plena y feliz.
      </p>

      <p>
        Sabemos que muchos de ustedes comparten nuestra pasión por los animales
        y por eso los invitamos a unirse a nosotros en este esfuerzo. Si desea
        hacer una donación o contribuir de alguna manera a estas fundaciones, lo
        invitamos a hacerlo. Su apoyo puede marcar la diferencia en la vida de
        estos animales y hacer que encuentren un hogar amoroso donde puedan
        vivir felices.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-10  p-4 text-center">
        <div className="border rounded-lg p-4">
          <img
            src="https://bfpa.org/wp-content/uploads/2020/04/logo_2019_inverse.png"
            className="w-1/3 mx-auto rounded"
            alt=""
          />

          <div className="mx-auto bg-yellow-500 px-6 py-4 rounded-full text-white font-bold shadow-xl mt-10">
            DONAR
          </div>
        </div>

        {/* <div className="border rounded-lg p-4">
          <img
            src="https://bfpa.org/wp-content/uploads/2020/04/logo_2019_inverse.png"
            className="w-1/3 mx-auto rounded"
            alt=""
          />

          <div className="mx-auto bg-yellow-500 px-6 py-4 rounded-full text-white font-bold shadow-xl mt-10">
            DONAR
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FundacionesPage;
