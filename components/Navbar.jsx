import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [bgColor, setBgColor] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
        setBgColor("#bbbbbd")
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setBgColor("transparent")
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
        <Link href="/" className={"flex"}>
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            JGG.dev
          </h1>
          {/*<Image src={"/logo1.png"} alt={"logo"} width={100} height={100} />*/}
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className={`p-4 rounded-[5px] hover:bg-[${bgColor}]`}>
            <Link href="/">Inicio</Link>
          </li>
          <li className={`p-4 rounded-[5px] hover:bg-[${bgColor}]`}>
            <Link href="/#about">Sobre mi</Link>
          </li>
          <li className={`p-4 rounded-[5px] hover:bg-[${bgColor}]`}>
            <Link href="/#habilities">Habilidades</Link>
          </li>
          <li className={`p-4 rounded-[5px] hover:bg-[${bgColor}]`}>
            <Link href="/#contact">Contacto</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Inicio</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#about">Sobre mi</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#habilities">Habilidades</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
