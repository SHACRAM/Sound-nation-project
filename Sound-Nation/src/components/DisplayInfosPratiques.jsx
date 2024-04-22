import { NavLink } from "react-router-dom";

export const DisplayInfosPratiques = () => {
  return (
    <div className="bg-black rounded-lg p-10 flex-col mt-10 mb-[3.5em]">
      <div>
        <h1 className="text-[white] flex justify-center mb-[2rem] text-3xl">
          Infos pratiques
        </h1>
      </div>
      <ul className="flex-col pl-">
        <li className="text-[white] text-base flex items-center gap-3 mb-5">
          <img
            src="../images/flecheDroite.png"
            alt="fleche vers la doite"
            className="w-8"
          />
          <NavLink to="/informationsFaq/DonneesPersonnelles">
            Données personnelles
          </NavLink>
        </li>
        <li className="text-[white] text-base flex items-center gap-3 mb-5">
          <img
            src="../images/flecheDroite.png"
            alt="fleche vers la doite"
            className="w-8"
          />
          <NavLink to="/informationsFaq/Cgv">
            Conditions générales de vente
          </NavLink>
        </li>
        <li className="text-[white] text-base flex items-center gap-3">
          <img
            src="../images/flecheDroite.png"
            alt="fleche vers la doite"
            className="w-8"
          />
          <NavLink to="/informationsFaq/Cookies">Gestion des cookies</NavLink>
        </li>
      </ul>
    </div>
  );
};
