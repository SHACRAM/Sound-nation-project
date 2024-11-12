import React from "react";
import { NavLink } from "react-router-dom";


export const NavBarDesktop = () => {
    return(
    <div className="sm:flex sm:gap-4 sm:items-center md:mr-2 lg:mr-[4em]">
        <NavLink to={'/Programmation'}  className='p-1 rounded-md text-white w-[100%] flex justify-center pb-2 pt-2 hover:bg-[#023E33] sm:text-[1rem] md:text-[1.3rem]'>Programmation</NavLink>
        <NavLink to={'/Concert'}  className='p-1 rounded-md text-white w-[100%] flex justify-center pb-2 pt-2 hover:bg-[#023E33] sm:text-[1rem] md:text-[1.3rem]'>Concert</NavLink>
        <NavLink to={"/Partenaire"} className='p-1 rounded-md text-white  w-[100%] flex justify-center pb-2 pt-2 hover:bg-[#023E33] sm:text-[1rem] md:text-[1.3rem]'>Partenaires</NavLink>
        <NavLink to={"/Carte"} className='p-1 rounded-md text-white  w-[100%] flex justify-center pb-2 pt-2 hover:bg-[#023E33] sm:text-[1rem] md:text-[1.3rem]'>Carte</NavLink>
        <a
            href="https://shotgun.live/fr"
            className='p-1 rounded-md text-white  w-[100%] flex justify-center pb-2 pt-2 hover:bg-[#023E33] sm:text-[1rem] md:text-[1.3rem]'
            target="_blank"
            rel="noopener noreferrer"
            >Billetterie
        </a>
        <NavLink to={"/InformationsFaq"} className=' p-1 rounded-md text-white  w-[100%] flex justify-center pb-2 pt-2 hover:bg-[#023E33] sm:text-[1rem] md:text-[1.3rem]'>Informations</NavLink>
    </div>)
};