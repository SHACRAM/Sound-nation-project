import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FavorisContext = createContext();

export const FavorisProvider = ({ children }) => {
  const [favoriteGroupe, setFavoriteGroupe] = useState([]);
  const [message, setMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleFavoris = async (groupeId, userEmail, isFavorite) => {
    try {
      const response = await axios.post(
        `https://soundnation.duckdns.org/api/users/favoris`,
        { groupeId, userEmail },
        { withCredentials: true }
      );

      if (response.status === 201 || response.status === 200) {
        setMessage(response.data.message);
        setIsSuccess(true);

        if (isFavorite) {
          setFavoriteGroupe((prev) => prev.filter((id) => id !== groupeId));
        } else {
          setFavoriteGroupe((prev) => [...prev, groupeId]);
        }
      }
    } catch (error) {
      console.error("Erreur lors de la gestion des favoris :", error);
      setMessage("Erreur lors de l'ajout/suppression du groupe");
      setIsSuccess(false);
    }
  };

  const handleFavoriteGroupe = async () => {
    try {
        const response = await axios.get(
            `https://soundnation.duckdns.org/api/users/favoris/${connectInformation.user_email}`,
            { withCredentials: true }
        );
        if (response.status === 200) {
            setFavoriteGroupe(response.data.data); 
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des favoris", error);
    }
};


  return (
    <FavorisContext.Provider
      value={{
        favoriteGroupe,
        setFavoriteGroupe,
        handleFavoris,
        handleFavoriteGroupe,
        message,
        isSuccess
      }}
    >
      {children}
    </FavorisContext.Provider>
  );
};
