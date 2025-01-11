import React from "react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const DisplayFavoriteGroupe = () => {
    const { connectInformation } = useContext(AuthContext);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(null);
    const [favoriteGroupe, setFavoriteGroupe]= useState([]);
   

    const handleFavoris = async (groupeId, userEmail) => {
        try {
          const response = await axios.post(
            `https://soundnation.duckdns.org/api/users/favoris`,
            { groupeId, userEmail },
            { withCredentials: true }
          );
    
          if (response.status === 201 || response.status === 200) {
            setMessage(response.data.message);
            setIsSuccess(true);
            handleFavoriteGroupe();
            
          }
        } catch (error) {
          console.error("Erreur lors de la gestion des favoris :", error);
          setMessage("Erreur lors de la supression du groupe");
          setIsSuccess(false);
        }
      };


      const handleFavoriteGroupe =async ()=>{
        if (!connectInformation.user_email) {
            console.error("L'email de l'utilisateur est manquant.");
            return;
        }

        try{
            const response = await axios.get(`https://soundnation.duckdns.org/api/users/favoris/${connectInformation.user_email}`, {withCredentials: true});
            if(response.status===200){
                setFavoriteGroupe(response.data.data);
            }
        }catch(error){
            console.error(error);
        }
    }

      useEffect(() => {
        handleFavoriteGroupe();
        if (message) {
            const timer = setTimeout(() => {
                setMessage("");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return(
        <div className="mt-10 sm:mt-0">
            <h2 className="text-white text-[1.2rem] mb-5">Mes groupes favoris</h2>
            <div className=" h-[20em] border rounded-md overflow-auto mb-5  ">
                {favoriteGroupe.length === 0 ?
                <div className="h-full flex items-center justify-center">
                    <div className="p-3 flex flex-col items-center gap-5">
                        <p className="text-white text-center text-lg">Vous n'avez pas encore de groupe favoris</p>
                        <NavLink to="/programmation" className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                            Voir la programmation
                        </NavLink>
                    </div>
                </div>
                  
                : favoriteGroupe.map((groupe, index)=>(
                    <div key={index} className="flex mb-5 gap-2 p-2 items-center border-y justify-between">
                        <div className="">
                            <img src={`https://soundnation.duckdns.org/${groupe.groupe_image_path}`} alt={groupe.groupe_image_alt} className="w-[5em]" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-10 ">
                            <p className="text-white">
                                {groupe.groupe_name}
                            </p>
                            <p className="text-white">
                                {groupe.groupe_date}
                            </p>
                            <div className="flex gap-3">
                                <p className="text-white">{groupe.groupe_hour} h</p>
                                <p className="text-white">Scène {groupe.groupe_scene}</p>
                            </div>
                        </div>
                        <div>

                            <button onClick={()=>handleFavoris(groupe.id, connectInformation.user_email)} >
                                <img src="/images/trash.png" alt="Bouton de suppression du groupe" className="w-6" />
                            </button>
                        </div>
                    </div>
                )) }
                
            </div>
            <div className="flex justify-center">
                {message && (
                            <p className={`flex mb-2 justify-center w-[80%] p-3 text-white ${isSuccess ? 'bg-green-500' : 'bg-red-600'} md:w-[15em]`}>
                                {message}
                            </p>
                    )}
            </div>
            
           
        </div>
    )
};