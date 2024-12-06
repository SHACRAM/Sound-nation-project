import React from "react";
import { Layout } from "../components/Layout";
import { DisplayPersonalInfo } from "../components/DisplayPersonalInfo";
import { DisplayFavoriteGroupe } from "../components/DisplayFavoriteGroupe";
import { DeleteAccount } from "../components/DeleteAccount";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Page qui permet d'afficher et de gèrer les informations personnelles de l'utilisateur
export const MyAccount = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const {connectInformation, setConnectInformation, loading} = useContext(AuthContext);
    const [favoriteGroupe, setFavoriteGroupe] = useState([]);
    const [deleteDiv, setDeleteDiv] = useState(false);
    const [messageDeleteAccount, setMessageDeleteAccount] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);


    const checkAuth = async () => {
        try {
            await axios.get(`${import.meta.env.VITE_API_URL}/api/authentication/verify-auth`, { withCredentials: true });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate("/");
            }
        }
    };

    const handleInformations =async ()=>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/information/${connectInformation.user_email}`, {withCredentials: true});
            if(response.status){
                setData(response.data.data);
            }
        }catch(error){
            console.error(error);
        }
    }

    const handleDelete = async () => {
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/deleteAccount/${connectInformation.user_email}`, {withCredentials: true});
            if(response.data.status){
                setMessageDeleteAccount(response.data.message);
                setTimeout(()=>{
                    setConnectInformation(null);
                    navigate("/");
                }, 2000)
            } else{
                setMessageDeleteAccount(response.data.message);
            }

        } catch(error){
            setMessageDeleteAccount("Erreur serveur merci d'essayer ultérieurement");
        }
    };

    const handleDeleteDiv =  (boolean) => {
        setDeleteDiv(boolean);
    };



    useEffect(() => {
        checkAuth();
        if (!loading && connectInformation) {
            handleInformations();
        }
        const interval = setInterval(checkAuth, 10000);
        return () => clearInterval(interval);
    }, [navigate,connectInformation, loading]);

// Créer un bouton de supression de compte
    return(
        <Layout>
            <div className="bg-black m-7 flex flex-col items-center rounded-md">
            <h1 className="text-white text-[1.5rem] mt-3">Mon compte</h1>
            <div className="mt-4 w-full">
                {loading ?
                    <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>
                :
                <div className="flex flex-col items-center">
                    <div className="w-full flex flex-col p-5 lg:flex-row gap-3 sm:justify-between lg:justify-around">
                        <DisplayPersonalInfo data={data}/>
                        <div className="xl:w-[50em]">
                            <DisplayFavoriteGroupe />
                        </div>
                    </div>
                    <div>
                        <button className="text-white bg-red-600 p-1 rounded-md mb-5 mt-5 hover:opacity-80" onClick={()=>handleDeleteDiv(true)}>Supprimer mon compte</button>
                    </div>
                    {deleteDiv &&
                        <div >
                            <div className="fixed top-0 left-0 z-10 bg-black border w-[100%] h-[100vh] opacity-80 "></div>
                            <div className="z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <DeleteAccount handleDeleteDiv={handleDeleteDiv} messageDeleteAccount={messageDeleteAccount} handleDelete={handleDelete} isSuccess={isSuccess}/>
                        </div>
                    </div>}
                </div>
                }
            </div>
            </div>
        </Layout>
    )
};