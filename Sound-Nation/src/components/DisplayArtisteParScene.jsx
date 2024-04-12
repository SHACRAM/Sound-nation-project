import React from "react";
import { Element, Link } from "react-scroll";
import { ProgScene } from "./ProgScene";

export const DisplayArtisteParScene = ({ cat, data, sceneCat }) => {
  return (
    <div>
      <Element name={cat} className="bg-black m-10 p-5 rounded-lg">
        <h2 className="text-white text-[3rem] flex justify-center">
          {"Scène " + cat}
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {sceneCat.map((scene) => (
            <Link
              key={scene}
              className="text-white underline cursor-pointer text-[0.8rem]"
              to={scene}
              spy={true}
              smooth={true}
              duration={1000}
            >
              {" Scène " + scene + " /"}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-[5em]">
          {data.map((artiste) =>
            artiste.attributes.scene === cat ? (
              <ProgScene
                key={artiste.id}
                nom={artiste.attributes.nom}
                image={
                  "http://localhost:1337" +
                  artiste.attributes.Image.data.attributes.url
                }
                alt={artiste.attributes.Image.data.attributes.alternativeText}
                jour={artiste.attributes.jour}
                heure={artiste.attributes.horaire + " h"}
              />
            ) : null
          )}
        </div>
      </Element>
    </div>
  );
};
