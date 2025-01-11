import React from "react";
import { Layout } from "../components/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Page qui permet à un utilisateur de se créer un compte



export const Inscription = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [identifiant, setIdentifiant] = useState("");
    const [password, setPassword] = useState("");
    const role = "user";
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(null);


    const handleSubmit = async (e)  =>  {
        e.preventDefault();
        
        if (!identifiant || !password || !email) {
            setMessage("Veuillez remplir tous les champs.");
            setIsSuccess(false);
            return;
        }


        try{
            const response = await axios.post(`https://soundnation.duckdns.org/api/users/signup`, {email, identifiant, password, role}, { headers: { 'Content-Type': 'application/json' }});
            if(response.status=== 201){
                setMessage(response.data.message);
                setIsSuccess(true);
                setTimeout(() => {
                    navigate('/Login');
                },2000)  
               
            } else{
                setMessage(response.data.message)
                setIsSuccess(false);
            }
        }catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Erreur serveur, veuillez réessayer plus tard.');
            }
            setIsSuccess(false);
        }
    };


    return(
        <Layout>
            <div className="flex justify-center">
                <div className="bg-black m-7 w-[80%] rounded-md flex flex-col items-center gap-6 sm:w-[30em]">
                    <h1 className="text-white text-[1.5rem] mt-3">Créer un compte</h1>
                    <form className="flex flex-col items-start gap-5 mb-[1em]">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-white text-[1.2rem]">Email</label>
                            <input type="email" className="rounded w-[15em] h-8 pl-1" required onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-white text-[1.2rem]">Nom d'utilisateur</label>
                            <input type="text" className="rounded w-[15em] h-8 pl-1" required onChange={(e)=>setIdentifiant(e.target.value)}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-white text-[1.2rem]">Mot de passe</label>
                            <input type="password" className={`rounded w-[15em] h-8 pl-1 outline-none ${password.length > 8 ? 'border-2 border-green-500 border-lg' : 'border-red-500 border-2'}`} placeholder="8 caractères minimum"  required onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button className={`text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5] ml-10 mt-5 ${password.length >= 8 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`} onClick={handleSubmit}>Créer mon compte</button>
                    </form>
                    {message && (
                    <p className={`flex mb-2 justify-center w-[80%] p-3 text-white ${isSuccess ? 'bg-green-500' : 'bg-red-600'} md:w-[15em]`}>
                        {message}
                    </p>
            )} 
                </div>
            </div>
    </Layout>
    )
};