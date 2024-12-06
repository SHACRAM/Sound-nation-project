import React from "react";
import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
//Composant qui permet de créer la fiche d'information d'un groupe
export const ProgScene = ({ id, nom, jour, heure, image, alt }) => {
  const { connectInformation } = useContext(AuthContext);
  const [idFavoriteGroupe, setIdFavoriteGroupe] = useState([]);
  const isFavorite = idFavoriteGroupe.includes(id);


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

  useEffect(()=>{
    if(connectInformation){
      handleFavoriteGroupe();
    }
  },[connectInformation])





  
  return (
      <div className="hover:scale-110 hover:transition-all duration-300">
        <NavLink to={{
            pathname: `/EnSavoirPlus/${id}`,
         }} >
        <div className="border hover:rounded-2xl hover:transition-all duration-200">
          <img src={`${import.meta.env.VITE_API_URL}/${image}`} alt={alt} className="w-[15em] p-2 rounded-2xl" />
          <div className="p-3 flex flex-col gap-3">
            <div>
              <p className="text-white flex gap-3">
                <img
                  src="/images/calendrier.png"
                  alt="logo calendrier"
                  className="w-[1.5em]"
                />
                {jour}
              </p>
            </div>
            <div>
              <p className="text-white flex gap-3">
                <img
                  src="/images/horloge.png"
                  alt="logo horloge"
                  className="w-[1.5em]"
                />
                {heure}
              </p>
            </div>
          </div>
        </div>
        </NavLink>
          <div className="flex justify-center items-center gap-3 mt-2">
                <p className="text-white text-2xl mt-2">{nom}</p>
                {connectInformation && (
            <button
              className={`border rounded-xl ${
                isFavorite ? "bg-[#71A984]" : "bg-[#e0e0e0]"
              } hover:opacity-80`}
              onClick={() =>
                handleFavoris(id, connectInformation.user_email)
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
    
    
  );
};
