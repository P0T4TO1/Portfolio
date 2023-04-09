import React from "react";
import Image from "next/image";

export const Habilities = () => {
  return (
    <div
      className="sm:block lg:flex flex-col min-h-screen max-w-[1240px] m-auto lg:pt-24 items-center p-4"
      id="habilities"
    >
      <div className="px-5">
        <h1 className="text-xl font-400 text-emerald-400 my-5 text-center">
          SKILLS
        </h1>
        <h2 className="text-4xl my-5 font-semibold text-gray-900 text-center">
          ¿Qué manejo?
        </h2>
      </div>
      <div className="px-5">
        <p className="text-xl text-center font-medium">Lenguajes</p>
        <div className="flex flex-wrap justify-center">
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/logo-java.png"}
              alt={"java"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">Java</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/js-logo.png"}
              alt={"javascript"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">JavaScript</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/ts-logo.png"}
              alt={"typescript"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">TypeScript</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/python-logo.png"}
              alt={"python"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">Python</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/logo-php.png"}
              alt={"php"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center text-center">PHP</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <p className="text-xl text-center font-medium">Web</p>
        <div className="flex flex-wrap justify-center">
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/logo-html-5.png"}
              alt={"html"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">HTML</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/css-logo.png"}
              alt={"css"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">CSS</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/bootstrap-logo.png"}
              alt={"bootstrap"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">Bootstrap</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/tailwind-css.png"}
              alt={"tailwind"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">Tailwind</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/material-ui-logo.png"}
              alt={"material-ui"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">Material UI</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/logo-node.png"}
              alt={"node"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">Node.js</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/logo-react.png"}
              alt={"react"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">React</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/logo-next.png"}
              alt={"next"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">Next.js</p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <p className="text-xl text-center font-medium">Bases de datos</p>
        <div className="flex flex-wrap justify-center">
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/mysql-logo.png"}
              alt={"mysql"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">MySQL</p>
          </div>
          <div className="items-center m-10 w-28">
            <Image
              src={"/logos/logo-mongodb.png"}
              alt={"mongodb"}
              width={50}
              height={50}
              className="m-auto"
            />
            <p className="text-l font-600 m-2 text-center">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};
