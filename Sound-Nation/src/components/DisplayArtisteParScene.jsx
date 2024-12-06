import React from "react";
import { Element, Link } from "react-scroll";
import { ProgScene } from "./ProgScene";
// Composant qui permet d'afficher les groupes triés par scène
export const DisplayArtisteParScene = ({ cat, data, sceneCat }) => {
  return (
    <div>
      <Element name={cat} className="bg-black m-3 p-5 rounded-lg">
        <h1 className="text-white text-[2rem] flex justify-center">
          {"Scène " + cat}
        </h1>
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
          {data.map((groupe) =>
            groupe.groupe_scene === parseInt(cat) ? (
              <ProgScene
                key={groupe.id}
                id={groupe.id}
                nom={groupe.groupe_name}
                image={
                  
                  groupe.groupe_image_path
                }
                alt={groupe.groupe_image_alt}
                jour={groupe.groupe_date}
                heure={groupe.groupe_hour + " h"}
              />
            ) : null
          )}
        </div>
      </Element>
    </div>
  );
};
