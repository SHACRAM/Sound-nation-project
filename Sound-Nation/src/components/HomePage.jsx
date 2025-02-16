import React from "react";
import { NavLink } from "react-router-dom";
import { CountDown } from "./CountDown";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { DisplayFavoriteGroupe } from "./DisplayFavoriteGroupe";

// Page qui affiche les éléments de la page d'accueil
export const HomePage = () => {
  const {connectInformation}= useContext(AuthContext);
  return (
    <div>
      <div className="bg-black m-10 p-10 rounded-lg flex flex-col items-center">
        {connectInformation ?  <DisplayFavoriteGroupe/> 
        : <img
          className="rounded-lg w-[100%]"
          src="../images/homePageComp.webp"
          alt="Photo du festival Sound Nation 2023"
        />}
       
        <p className="text-white mt-[3em] text-[1.2rem] bg-[#023E33] p-3 rounded-lg">
          Après une édition 2024 courronnée de succés, Sound Nation revient
          cette année, pour vous faire vibrer au rythme des sound system.
        </p>
      </div>
      <div className="bg-black m-10 p-10 rounded-lg flex flex-col items-center ">
        <h2 className="text-white mt-2 text-[1.5rem] underline mb-[3em]">
          En 2025 Sound Nation revient dans
        </h2>
        <CountDown />
        <NavLink
          to={{
            pathname: `/Programmation`,
          }}
        >
          <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5] mt-[3em]">
            Découvir la programmation
          </button>
        </NavLink>
      </div>
      <div className="bg-black m-10 p-10 rounded-lg flex flex-col items-center mb-[5em]">
        <h2 className="text-white mt-5 text-[1.8rem] underline">
          L'année 2024 c'était :
        </h2>
        <p className="text-white text-[1.5rem] flex flex-col items-center mt-8">
          <strong className="text-[#71A984] text-[3rem]">35</strong>
          <br /> artistes
        </p>
        <p className="text-white text-[1.5rem] flex flex-col items-center mt-8">
          <strong className="text-[#71A984] text-[3rem]">60 </strong>
          <br />
          heures de live
        </p>
        <p className="text-white text-[1.5rem] flex flex-col items-center mt-8">
          <strong className="text-[#71A984] text-[3rem]">195 000</strong>
          <br /> spectateurs
        </p>
      </div>
    </div>
  );
};
