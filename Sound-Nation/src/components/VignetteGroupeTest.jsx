import React from "react";
import { NavLink } from "react-router-dom";

export const VignetteGroupeTest = ({ groupeData }) => {
  const nom = groupeData.attributes.nom;
  const image = encodeURIComponent(
    "http://localhost:1337" + groupeData.attributes.Image.data.attributes.url
  );
  const alt = groupeData.attributes.Image.data.attributes.alternativeText;
  const bio = groupeData.attributes.bio;
  return (
    <div>
      <div
        className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
        key={groupeData.id}
      >
        <h2 className="text-white text-[1.5rem] underline">
          {groupeData.attributes.nom}
        </h2>
        <img
          className="w-[15em] rounded-[30px]"
          src={
            "http://localhost:1337" +
            groupeData.attributes.Image.data.attributes.url
          }
          alt={groupeData.attributes.Image.data.attributes.alternativeText}
        />
        <p className="text-white text-[1.5rem]">{groupeData.attributes.jour}</p>
        <p className="text-white text-[1.5rem]">{`${groupeData.attributes.horaire} `}</p>
        <p className="text-white text-[1.5rem]">{`Scène ${groupeData.attributes.scene}`}</p>
        <NavLink
          to={{
            pathname: `/EnSavoirPlus/${groupeData.id}/${nom}/${bio}/${alt}/${image}`,
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
