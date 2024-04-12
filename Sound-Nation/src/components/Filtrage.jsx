import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { getDataFilters } from "../utils/dataFilters";
import { CheckBoxTest } from "./CheckBoxTest";

export const Filtrage = () => {
  const { dataFilters, setDataFilters } = useContext(FilterContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [allChecked, setAllChecked] = useState(true);
  const [filtersNumber, setFiltersNumber] = useState(0);

  useEffect(() => {
    const filters = getDataFilters();
    const sum =
      filters.Jours.length + filters.Scenes.length + filters.Heures.length;
    setDataFilters(filters);
    setFiltersNumber(sum);
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("selectedCheckBox");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDataFilters(parsedData);
      parsedData.Jours.forEach((jour) => {
        if (!jour.checked) setAllChecked(false);
      });
      parsedData.Scenes.forEach((scene) => {
        if (!scene.checked) setAllChecked(false);
      });
      parsedData.Heures.forEach((heure) => {
        if (!heure.checked) setAllChecked(false);
      });
    }
  }, []);

  const handleModalDisplay = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleCheck = (nomCategorie, id) => {
    const updatedFilters = { ...dataFilters };
    const categorie = updatedFilters[nomCategorie];

    const index = categorie.findIndex((item) => item.id === id);

    if (index !== -1) {
      categorie[index].checked = !categorie[index].checked;
    }

    setDataFilters(updatedFilters);
    console.log(updatedFilters);
    localStorage.setItem("selectedCheckBox", JSON.stringify(updatedFilters));

    const checkedFiltersNumber = Object.values(updatedFilters)
      .flat()
      .filter((filter) => filter.checked).length;

    setAllChecked(
      checkedFiltersNumber === 0 || checkedFiltersNumber === filtersNumber
    );
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <button
        onClick={handleModalDisplay}
        className={`bg-[#023E33] text-white w-[15em] p-2 rounded-lg flex flex-1 justify-center text-[1.3rem] gap-2 z-30 ${
          modalIsOpen ? "rounded-b-none" : ""
        }`}
      >
        Filtres
        <img
          className="w-8"
          src="../images/filtre.svg"
          alt="logo pour les filtres"
        />
        <img
          className={`w-6 ${
            modalIsOpen
              ? "rotate-0 transition-transform ease-in-out duration-[0.4s]"
              : "rotate-180 transition-transform ease-in-out duration-[0.4s]"
          }`}
          src="../images/angle-up-solid.svg "
          alt="chevron pour ouvir fermer le menu"
        />
      </button>

      <div
        className={` flex flex-row flex-wrap  p-5 rounded-lg bg-[#71A984] transition-all ease-in-out duration-[0.2s] delay-0 transform z-1 ${
          modalIsOpen
            ? "max-h-75 translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 max-h-0"
        }`}
      >
        <div className="flex flex-col p-5">
          <div className="flex mb-10">
            <CheckBoxTest
              label="Tous"
              id="tous"
              handleCheck={() => {
                setDataFilters(getDataFilters());
                setAllChecked(true);
              }}
              checked={allChecked}
            />
          </div>
          <div className="flex flex-wrap gap-[4em]">
            {Object.keys(dataFilters).map((key) => (
              <FiltrageCategorie
                key={key}
                nomCategorie={key}
                filtres={dataFilters[key]}
                handleCheck={handleCheck}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FiltrageCategorie = ({ nomCategorie, filtres, handleCheck }) => {
  return (
    <div className="">
      <h2 className=" font-bold text-[1.5rem] mb-3">{nomCategorie}</h2>
      <ul>
        {filtres.map((filtre) => (
          <li
            key={filtre.id}
            className="flex flex-row justify-between gap-3 mb-3 "
          >
            <CheckBoxTest
              label={filtre.label}
              id={filtre.id}
              handleCheck={handleCheck}
              nomCategorie={nomCategorie}
              checked={filtre.checked}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
