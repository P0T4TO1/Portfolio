import React from "react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div
      className="sm:block lg:flex items-center min-h-screen max-w-[1240px] m-auto lg:pt-4 p-4"
      id="about"
    >
      <div className="px-5 pr-10">
        <h1 className="text-xl font-400 text-emerald-400 my-5">ABOUT</h1>
        <h2 className="text-4xl my-5 font-semibold text-gray-900">¿Quien soy?</h2>
        <p className="text-gray-800">
          Soy un desarrollador web full stack dedicado a crear sitios web y
          aplicaciones web de alta calidad. He estudiado durante 2 años el
          desarrollo web siendo estudiante pero me encanta ser autodidacta y
          aprender cosas nuevas. Comencé a estudiar programación en el 2021 con
          Java aprendiendo los fundamentos de la programación asi como la lógica
          de programación. Luego de eso comencé a estudiar el desarrollo web con
          HTML, CSS y JavaScript.
        </p>
        <p className="text-gray-800 my-2">
          Fascinado por el desarrollo web, comencé a
          estudiar React y Node.js. Seguido de eso me adentre en la conexión de
          bases de datos con MongoDB y MySQL asi que que aprendí a usar
          Frameworks como Express, Mongoose y Next.js. Mi mas reciente
          aprendizaje es el uso del lenguaje TypeScript. Actualmente estoy
          estudiando el desarrollo de aplicaciones móviles con React Native y
          aprendiendo nuevas tecnologías.
        </p>
        <Link className="text-red-700 underline" href={"https://recursos-dd.herokuapp.com/"} target={"_blank"}>
            Mi ultimo proyecto!
        </Link>
      </div>
      <Image src={"/about-image.jpg"} alt={"about"} width={600} height={500} className={"rounded-md m-auto"} />
    </div>
  );
};
