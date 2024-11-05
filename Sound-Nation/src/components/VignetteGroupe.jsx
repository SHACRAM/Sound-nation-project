import React from "react";
import { NavLink } from "react-router-dom";

export const VignetteGroupe = ({ groupe }) => {
  const id = groupe.id;
  return (
    <div>
      <div
        className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
        key={groupe.id}
      >
        <h2 className="text-white text-[1.5rem] underline">
          {groupe.groupe_name}
        </h2>
        <img
          className="w-[15em] rounded-[30px]"
          src={'http://localhost:3000/'+ groupe.groupe_image_path
          }
          alt={groupe.groupe_image_alt}
        />
        <p className="text-white text-[1.2rem]">{groupe.groupe_date}</p>
        <p className="text-white text-[1.2rem]">{`${groupe.groupe_hour} h`}</p>
        <p className="text-white text-[1.2rem]">{`Scène ${groupe.groupe_scene}`}</p>
        <NavLink
          to={{
            pathname: `/EnSavoirPlus/${id}`,
          }}
        >
          <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
            En savoir plus
          </button>
        </NavLink>
      </div>
    </div>
  );
};
