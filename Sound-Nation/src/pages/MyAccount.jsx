import React from "react";
import { Layout } from "../components/Layout";
import { DisplayPersonalInfo } from "../components/DisplayPersonalInfo";
import { DisplayFavoriteGroupe } from "../components/DisplayFavoriteGroupe";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Page qui permet d'afficher et de gèrer les informations personnelles de l'utilisateur
export const MyAccount = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const {connectInformation, setConnectInformation, loading} = useContext(AuthContext);


    const checkAuth = async () => {
        try {
            await axios.get("http://localhost:3000/api/authentication/verify-auth", { withCredentials: true });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate("/");
            }
        }
    };

    const handleInformations =async ()=>{
        try{
            const response = await axios.get(`http://localhost:3000/api/users/information/${connectInformation.id}`, {withCredentials: true});
            if(response.status){
                setData(response.data.data);
            }
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        if (!loading && connectInformation) {
            handleInformations();
        }
    }, [connectInformation, loading]); 

    useEffect(() => {
        checkAuth();
        const interval = setInterval(checkAuth, 10000);
        return () => clearInterval(interval);
    }, [navigate]);
// TODO : Afficher les informations personnelles de l'utilisateur
// Envoyer les props au composant et créer la route côté serveur
// Créer un bouton de supression de compte
// Créer une liste des groupes favoris
    return(
        <Layout>
            <div className="bg-black m-7 flex flex-col items-center rounded-md">
            <h1 className="text-white text-[1.5rem]">Mon compte</h1>
            <div className="mt-4 p-2">
                {loading ?
                    <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>
                :
                <div className="flex flex-col">
                    <DisplayPersonalInfo data={data}/>
                    <DisplayFavoriteGroupe/>
                </div>
                }
            </div>
            </div>
        </Layout>
    )
};