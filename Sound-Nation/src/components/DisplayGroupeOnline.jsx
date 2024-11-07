import React from "react";
import { NavLink } from "react-router-dom";
// Composant qui crée les vignettes des groupes en concert
export const DisplayGroupeOnline = ({ concertEnCours,pourcentage }) => {
    return (
        <div className="bg-black m-7 flex flex-col items-center rounded-md pb-[3em]">
            <h1 className="text-white text-[1.5rem] m-4">Concerts en cours</h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap">
                {concertEnCours.map((groupe, index) => (
                    <div key={index} className="border border-white m-3 rounded-md flex flex-col items-center">
                        <h2 className="text-white text-[1.3rem] mt-2">{groupe.groupe_name}</h2>
                        <img 
                            src={`http://localhost:3000/${groupe.groupe_image_path}`} 
                            alt={groupe.groupe_image_alt} 
                            className="rounded-md w-[12em] m-5" 
                        />
                        <p className="text-white text-[1.2rem]">{`Scène : ${groupe.groupe_scene}`}</p>
                        <p className="text-white mt-2">De {groupe.groupe_hour}h à {groupe.groupe_hour + 1}h</p>
                        <div className="w-[80%] h-5 bg-white m-3 border rounded-md">
                            <div className="bg-red-500 h-full rounded-md animate-pulse" style={{width: pourcentage}}></div>
                        </div>
                        <NavLink className="mb-3"
                            to={{
                                pathname: `/EnSavoirPlus/${groupe.id}`,
                            }}
                            >
                            <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                                En savoir plus
                            </button>
                        </NavLink>
                    </div>
                    
                ))}

            </div>
            
        </div>
    );
};
