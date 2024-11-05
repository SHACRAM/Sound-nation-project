import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBarMobile = ({burgerClass, menuClass, updateMenu}) => {
  

  return (
    <div>
        <nav>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
        </nav>

        <div className={`flex flex-col items-center ${menuClass}`}>
            {/* TODO ajouter la fonction pour se déconnecter */}
            <NavLink to={'/Programmation'}  className='text-white w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]'>Programmation</NavLink>
            <NavLink to={"/Partenaire"} className='text-white  w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]'>Partenaires</NavLink>
            <NavLink to={"/Carte"} className='text-white  w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]'>Carte</NavLink>
            <a
              href="https://shotgun.live/fr"
              className="text-white w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]"
              target="_blank"
              rel="noopener noreferrer"
              >Billetterie
            </a>
            <NavLink to={"/InformationsFaq"} className='text-white  w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]'>Informations</NavLink>
            {/* {isAuthenticated && 
            <button className='text-white  w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]'>Se déconnecter</button>} */}
        </div>

    </div>
  );
};
