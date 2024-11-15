import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// Composant qui gère l'affichage de la navigation mobile
export const NavBarMobile = ({burgerClass, menuClass, updateMenu, handleLogOut}) => {
  const {connectInformation, setConnectInformation} = useContext(AuthContext);

  useEffect(()=>{},[connectInformation]);

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
            <NavLink to={'/Programmation'}  className='text-white w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]'>Programmation</NavLink>
            <NavLink to={'/Concert'}  className='text-white w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]'>Concert</NavLink>
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
            {connectInformation  ? 
            <div className="flex w-[100%] items-center justify-around mb-2">
              <div className="flex items-center gap-2">
                <img src="/public/images/User.png" alt="Logo utilisateur" className="w-5 h-5" />
                <NavLink className='text-white flex justify-center pb-2 pt-2 text-[1rem]' to="/MyAccount" >{connectInformation.user_name}</NavLink>
              </div>
              <button className='text-[#008BFF] flex justify-center pb-2 pt-2 text-[0.8rem]' onClick={()=>handleLogOut()}>Se déconnecter</button>
            </div>
             
            :<NavLink className='text-white  w-[100%] flex justify-center pb-2 pt-2 text-[1.3rem]' to="/Login">Se connecter</NavLink>
              }
        </div>

    </div>
  );
};
