import React from "react";

const FundacionesPage = () => {
  return (
    <div className="container p-4 mx-auto text-gray-600">
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

      <div className="grid md:grid-cols-2 mt-10 items-center md:p-10 p-4 mx-4 border rounded-lg">
        <img
          src="http://pawspetfoundation.org/wp-content/uploads/2012/05/paws_logo.png"
          className="w-3/5 mx-auto rounded"
          alt=""
        />
        <div className="mx-auto bg-yellow-500 px-6 py-4 rounded-full text-white font-bold shadow-xl">
          DONAR
        </div>
      </div>

      <div className="grid md:grid-cols-2 mt-10 items-center md:p-10 p-4 mx-4 border rounded-lg">
        <img
          src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_yd44c3tz/def_height/2700/def_width/2700/version/100012/type/1"
          className="w-3/5 mx-auto rounded"
          alt=""
        />
        <div className="mx-auto bg-yellow-500 px-6 py-4 rounded-full text-white font-bold shadow-xl">
          DONAR
        </div>
      </div>
    </div>
  );
};

export default FundacionesPage;
