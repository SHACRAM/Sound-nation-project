import React from "react";
import { Layout } from "../components/Layout";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import axios from 'axios';
// Page qui permet à un utilisateur de se connecter à son compte

export const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isConnected, setIsConnected] = useState(null);
    const {connectInformation, setConnectInformation} = useContext(AuthContext);
    
    
    

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/authentication/signin`, {email, password}, { withCredentials: true });
            if(response.status){
                setMessage(response.data.message);
                setConnectInformation(response.data.data);
                setTimeout(()=>{
                    navigate('/');
                }, 2000);
                setIsConnected(true);
            } else{
                setMessage(response.data.message);
                setIsConnected(false);
                setConnectInformation(null);
               
            }
        }catch(error){
            setMessage('Erreur, merci de vérifier vos identifiants');
            setIsConnected(false);
            setConnectInformation(null);
            
        }
    }


    return(
        <Layout>
            <div className="flex justify-center">
                <div className="bg-black m-7 w-[80%] rounded-md flex flex-col items-center gap-6 sm:w-[30em]">
                    <h1 className="text-white text-[1.5rem] mt-3">Connexion</h1>
                    <form className="flex flex-col items-start gap-5 mb-[1em]">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-white text-[1.2rem]">Email</label>
                            <input type="email" className="rounded w-[15em] pl-1" onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-white text-[1.2rem]">Mot de passe</label>
                            <input type="password" className="rounded w-[15em] pl-1" onChange={(e)=>setPassword(e.target.value)}  required/>
                        </div>
                        <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5] ml-[4em] mt-5" onClick={handleLogin}>Connexion</button>
                    </form>
                    {message && (
                        <p className={`flex justify-center w-[80%] p-3 text-white ${isConnected ? 'bg-green-500' : 'bg-red-600'} md:w-[15em]`}>
                            {message}
                        </p>
                    )}
                    <div className="flex flex-col items-center mb-4">
                        <p className="text-white">Pas encore de compte ?</p>
                        <NavLink to="/Inscription" className="text-[#008BFF] hover:opacity-80">Créer un compte</NavLink>
                    </div>
                </div>
            </div>
            

        </Layout>
    )
};