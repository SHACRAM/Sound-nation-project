import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import axios from "axios";
// Page qui affiche la biographie d'un groupe en fonction de son ID

export const EnSavoirPlus = () => {
  const { id } = useParams();
  const [groupe, setGroupe] = useState(null);


  useEffect(() => {
    const getData = async () => {

      try{const response = await axios.get(`http://localhost:3000/api/groupes/${id}`);
        setGroupe(response.data.data[0]);
      } catch (error) {
        console.log("Erreur lors de la récupération des données");
      }

  }
    getData();  
  }, [id]);


  if (!groupe) {
    return (
      <Layout>
        <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>;
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="bg-black m-7 p-2 flex flex-col items-center gap-[4em] rounded-xl">
        <h1 className="text-white text-[1.5rem] underline">{groupe.groupe_name}</h1>
        
        <img
          src={`http://localhost:3000/${groupe.groupe_image_path}`}
          alt={groupe.groupe_image_alt}
          className="w-[15em] rounded-[30px]"
        />
        <p className="text-white text-[1.2rem] flex flex-col items-center w-[80%] bg-[#023E33] p-2 rounded-lg">
          {groupe.groupe_bio}
        </p>
        <NavLink className="mb-3" to="/Programmation">
          <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
            Aller à la programmation
          </button>
        </NavLink>
      </div>
    </Layout>
  );
};
