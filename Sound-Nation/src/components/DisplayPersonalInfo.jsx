import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
// Composant qui affiche les informations personnelles de l'utilisateur
export const DisplayPersonalInfo = ({data}) => {
    const {connectInformation} = useContext(AuthContext);
   
    // afficher les infos
    // créer les boutons de modification des données
    return(
        <div className="mt-3 flex flex-col gap-2 sm:mt-0">
            <h2 className="text-white text-[1.2rem]">Mes informations personnelles</h2>
            <div className="flex flex-col gap-2 border rounded-md p-2 mt-2 w-[17.5em]">
                <div className="flex gap-2">
                    <p className="text-white">Nom :</p>
                    <p className="text-white">{data.user_name}</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-white">Email :</p>
                    <p className="text-white">{data.user_email}</p>
                </div>
                <div className="flex flex-col items-center">
                    <NavLink className="text-black w-[15em] bg-[#71A984] flex justify-center rounded-lg border mt-2 active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]" 
                    to={`/ModifyMyInformation/${data.user_email}`}>Modifier mes informations</NavLink>
                    <NavLink className="text-black w-[15em] bg-[#71A984] flex justify-center rounded-lg border mt-2 active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]" 
                    to={`/ModifyMyPassword/${data.user_email}`}>Modifier mon mot de passe</NavLink>
                </div>
            </div>
        </div>
        
    )
};