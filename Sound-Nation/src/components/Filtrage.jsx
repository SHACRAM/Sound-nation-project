import { useContext, useEffect, useState } from "react";
import { CheckBox } from "./CheckBox";
// Composant qui gère le filtrage des groupes par date, heure et scène
export const Filtrage = ({uniqueDate, uniqueScene, uniqueHour, setDataFilter, dataFilter, isChecked, setIsChecked}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  

  const handleModalDisplay = () => {
    setModalIsOpen(!modalIsOpen);
  };


  const handleAllGroupes = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    localStorage.setItem('allGroupes', checked);
    
    if (checked) {
      setDataFilter([]);
      localStorage.removeItem('dataFilter');
    }
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <button
        onClick={handleModalDisplay}
        className={`bg-[#023E33] text-white w-[100%] p-2 rounded-lg flex flex-1 justify-center text-[1.3rem] gap-2 z-30 ${
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
      <div className="flex flex-col sm:flex-row sm:gap-5">
        <div className="mb-2">
          <input type="checkbox" id="allGroupes" name="allGroupes" onChange={handleAllGroupes} checked={isChecked}/>
          <label htmlFor="allGroupes">Tous</label>
        </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-[3em]">
            <div>
              <h3>Jour</h3>
              <CheckBox data={uniqueDate} setDataFilter={setDataFilter} dataFilter={dataFilter} setIsChecked={setIsChecked}/>
            </div>
            <div>
              <h3>Heure</h3>
            <CheckBox data={uniqueHour} setDataFilter={setDataFilter} dataFilter={dataFilter} setIsChecked={setIsChecked} />
            </div>
            <div>
              <h3>Scène</h3>
              <CheckBox data={uniqueScene} setDataFilter={setDataFilter} dataFilter={dataFilter} setIsChecked={setIsChecked}/>
            </div>
        </div>
        
      </div>
      </div>
    </div>
  );
};


