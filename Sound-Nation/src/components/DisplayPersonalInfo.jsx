import React from "react";
import { NavLink } from "react-router-dom";
// Composant qui affiche les informations personnelles de l'utilisateur
export const DisplayPersonalInfo = ({data}) => {
    // afficher les infos
    // créer les boutons de modification des données
    return(
        <div className="mt-3 flex flex-col gap-2">
            <h2 className="text-white text-[1.2rem]">Mes informations personnelles</h2>
            <div className="flex flex-col gap-2 border rounded-md p-2 mt-2">
                <div className="flex gap-2">
                    <p className="text-white">Nom :</p>
                    <p className="text-white">{data.user_name}</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-white">Email :</p>
                    <p className="text-white">{data.user_email}</p>
                </div>
                <NavLink className="text-black bg-[#71A984] flex justify-center rounded-lg border mt-2 active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">Modifier mes informations</NavLink>
            </div>
        </div>
        
    )
};