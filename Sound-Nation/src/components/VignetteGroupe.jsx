import React from "react";
import { NavLink } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export const VignetteGroupe = ({ groupe }) => {
  const { connectInformation } = useContext(AuthContext);
  const [idFavoriteGroupe, setIdFavoriteGroupe] = useState([]);
  const id = groupe.id
  const isFavorite = idFavoriteGroupe.includes(groupe.id);

  const handleFavoriteGroupe =async ()=>{
    if (!connectInformation?.user_email) {
        console.error("L'email de l'utilisateur est manquant.");
        return;
    }

    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/favoris/${connectInformation.user_email}`, {withCredentials: true});
        if(response.status===200){
          const tempId = [];
            response.data.data.map((groupe)=>(
              tempId.push(groupe.id)
            ))
            setIdFavoriteGroupe(tempId)
          
        }
    }catch(error){
        console.error(error);
    }
}


const handleFavoris = async (groupeId, userEmail) => {
  try {
    if (isFavorite) {
      setIdFavoriteGroupe((prev) => prev.filter((id) => id !== groupeId));
    } else {
      setIdFavoriteGroupe((prev) => [...prev, groupeId]);
    }

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/users/favoris`,
      { groupeId, userEmail },
      { withCredentials: true }
    );
    handleFavoriteGroupe();

  } catch (error) {
    console.error("Erreur lors de la gestion des favoris :", error);
  
  }
};


  useEffect(()=>{
    if(connectInformation){
      handleFavoriteGroupe()
    }
  },[connectInformation])



  


  return (
    <div>
      <div
        className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
        key={groupe.id}
      >
        <h2 className="text-white text-[1.5rem] underline">
          {groupe.groupe_name}
        </h2>
        <img
          className="w-[15em] rounded-[30px]"
          src={`${import.meta.env.VITE_API_URL}/`+ groupe.groupe_image_path
          }
          alt={groupe.groupe_image_alt}
        />
        <p className="text-white text-[1.2rem]">{groupe.groupe_date}</p>
        <p className="text-white text-[1.2rem]">{`${groupe.groupe_hour} h`}</p>
        <p className="text-white text-[1.2rem]">{`Scène ${groupe.groupe_scene}`}</p>
        <div className="flex items-center gap-3">
          <NavLink
            to={{
              pathname: `/EnSavoirPlus/${id}`,
            }}
          >
            <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
              En savoir plus
            </button>
          </NavLink>
          {connectInformation && (
            <button
              className={`border rounded-xl ${
                isFavorite ? "bg-[#71A984]" : "bg-[#e0e0e0]"
              } hover:opacity-80`}
              onClick={() =>
                handleFavoris(groupe.id, connectInformation.user_email)
              }
            >
              <img
                className="w-8 p-1"
                src={
                  connectInformation
                    ? "/images/favoris.png"
                    : "/images/favoris.png"
                }
                alt="Boutton pour ajouter ou retirer des favoris"
              />
            </button>
          )}
        </div>
        
      </div>
    </div>
  );
};
