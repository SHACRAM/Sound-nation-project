import React from "react";
import { useState, useEffect } from "react";
import { VignetteGroupe } from "./VignetteGroupe";
import { AffichageGroupe } from "./AffichageGroupe";
import { AffichageGroupeAll } from "./AffichageGroupeAll";

export const CheckBox = ({
  setCheckBoxChecked,
  checkBoxChecked,
  setCheckBoxAll,
  checkBoxAll,
}) => {
  const [jours, setJours] = useState([
    {
      label: "Vendredi 22 juillet",
      id: "Vendredi 22 juillet",
      name: "jours",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "Samedi 23 Juillet",
      id: "Samedi 23 juillet",
      name: "jours",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "Dimanche 24 Juillet",
      id: "Dimanche 24 juillet",
      name: "jours",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
  ]);
  const [scenes, setScenes] = useState([
    {
      label: "1",
      id: "1",
      name: "Scènes",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "2",
      id: "2",
      name: "Scènes",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "3",
      id: "3",
      name: "Scène",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
  ]);

  const [heures, setHeures] = useState([
    {
      label: "19h",
      id: "19h",
      name: "Horaire",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "20h",
      id: "20h",
      name: "Horaire",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "21h",
      id: "21h",
      name: "Horaire",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "22h",
      id: "22h",
      name: "Horaire",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
    {
      label: "23h",
      id: "23h",
      name: "Horaire",
      type: "checkbox",
      checked: false,
      onChange: {},
    },
  ]);
  const handleChangeAll = () => {
    setCheckBoxAll(checkBoxAll);
  };
  const handleCheckBox = () => {
    const jourValide = jours.filter((day) => day.checked === true);
    const sceneValide = scenes.filter((scene) => scene.checked === true);
    const heureValide = heures.filter((heure) => heure.checked === true);
    setCheckBoxChecked([...jourValide, ...sceneValide, ...heureValide]);
  };
  useEffect(() => {
    handleCheckBox();
  }, [jours, scenes, heures]);

  const handleChangeJour = (indexJour) => {
    const check = [...jours];
    check[indexJour] = {
      ...check[indexJour],
      checked: !check[indexJour].checked,
    };
    setJours(check);
    if (checkBoxChecked.length === 0) {
      setCheckBoxAll(!checkBoxAll);
    }
  };
  const handleChangeScene = (indexScene) => {
    const scene = [...scenes];
    scene[indexScene] = {
      ...scene[indexScene],
      checked: !scene[indexScene].checked,
    };
    setScenes(scene);
    if (checkBoxChecked.length === 0) {
      setCheckBoxAll(!checkBoxAll);
    }
  };
  const handleChangeHeure = (indexHeure) => {
    const heure = [...heures];
    heure[indexHeure] = {
      ...heure[indexHeure],
      checked: !heure[indexHeure].checked,
    };
    setHeures(heure);
    if (checkBoxChecked.length === 0) {
      setCheckBoxAll(!checkBoxAll);
    }
  };
  return (
    <div>
      <div className="flex flex-wrap gap-14 p-3">
        <div>
          <h2 className="underline text-[1.5rem] mb-3">Jours</h2>
          <ul>
            {jours.map((jour, indexJour) => (
              <li
                key={jour.id}
                className="flex flex-row justify-between gap-3 mb-3"
              >
                <label htmlFor={jour.id} className="text-[1.2rem]">
                  {jour.label}
                </label>
                <input
                  type={jour.type}
                  id={jour.id}
                  checked={jour.checked}
                  onChange={() => handleChangeJour(indexJour)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="underline text-[1.5rem] mb-3">Scènes</h2>
          <ul>
            {scenes.map((scene, indexScene) => (
              <li key={scene.id} className="flex flex-row justify-between mb-2">
                <label htmlFor={scene.id} className="text-[1.2rem]">
                  {scene.label}
                </label>
                <input
                  type={scene.type}
                  id={scene.id}
                  checked={scene.checked}
                  onChange={() => handleChangeScene(indexScene)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="underline text-[1.5rem] mb-3">Horaires</h2>
          <ul>
            {heures.map((heure, indexHeure) => (
              <li key={heure.id} className="flex flex-row justify-between mb-2">
                <label htmlFor={heure.id} className="text-[1.2rem]">
                  {heure.label}
                </label>
                <input
                  type={heure.type}
                  id={heure.id}
                  checked={heure.checked}
                  onChange={() => handleChangeHeure(indexHeure)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex gap-3">
        <label htmlFor="tous" className="text-[1.2rem]">
          Tous
        </label>
        <input
          type="checkbox"
          id="tous"
          onChange={handleChangeAll}
          checked={checkBoxAll}
        />
      </div>
    </div>
  );
};
