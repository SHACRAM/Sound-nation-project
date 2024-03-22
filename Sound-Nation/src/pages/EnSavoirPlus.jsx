import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";

export const EnSavoirPlus = () => {
  const { nom, bio, alt, image } = useParams();

  return (
    <Layout>
      <div className="bg-black m-10 p-10 flex flex-col items-center gap-[4em] rounded-xl">
        <h1 className="text-white text-[1.5rem] underline">{nom}</h1>
        <img
          src={`${decodeURIComponent(image)}`}
          alt={alt}
          className="w-[15em] rounded-[30px]"
        />
        <p className="text-white text-[1.2rem] flex flex-col items-center w-[80%] bg-[#023E33] p-3 rounded-lg">
          {bio}
        </p>
        <NavLink to="/Programmation">
          <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
            Retour à la programmation
          </button>
        </NavLink>
      </div>
    </Layout>
  );
};
