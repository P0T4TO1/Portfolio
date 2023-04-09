import React from "react";
import { useRouter } from "next/router";

export const Hero = ({ message, secondary }) => {
  const router = useRouter();
  const handleClick = (url) => {
    router.push(url).then();
  };
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem] text-center pt-32">
        <div className="flex justify-center">
          <h2 className="text-5xl font-semibold">
            Hola!, soy <span className="text-emerald-400">Jaret Garcia</span>
          </h2>
        </div>
        <p className="pt-5 text-xl">{message}</p>
        <p className="pb-5 pt-2 text-lg">{secondary}</p>
        <button
          className="px-8 py-2 border"
          onClick={() => handleClick("/#about")}
        >
          Conóceme
        </button>
      </div>
    </div>
  );
};
