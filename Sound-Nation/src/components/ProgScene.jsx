import React from "react";
import { NavLink } from "react-router-dom";
//Composant qui permet de créer la fiche d'information d'un groupe
export const ProgScene = ({ id, nom, jour, heure, image, alt }) => {
  return (
    <NavLink to={{
      pathname: `/EnSavoirPlus/${id}`,
    }} className="hover:scale-110 hover:transition-all duration-300">
      <div>
      <div className="border hover:rounded-2xl hover:transition-all duration-200">
        <img src={`http://localhost:3000/${image}`} alt={alt} className="w-[15em] p-2 rounded-2xl" />
        <div className="p-3 flex flex-col gap-3">
          <div>
            <p className="text-white flex gap-3">
              <img
                src="/images/calendrier.png"
                alt="logo calendrier"
                className="w-[1.5em]"
              />
              {jour}
            </p>
          </div>
          <div>
            <p className="text-white flex gap-3">
              <img
                src="/images/horloge.png"
                alt="logo horloge"
                className="w-[1.5em]"
              />
              {heure}
            </p>
          </div>
          <div>
            <p className="text-white text-2xl mt-2">{nom}</p>
          </div>
        </div>
      </div>
    </div>
    </NavLink>
    
  );
};
