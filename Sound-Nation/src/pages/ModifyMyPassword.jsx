import React from "react";
import { Layout } from "../components/Layout";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const ModifyMyPassword = () => {
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const goodLength = password.length >= 8 ? "2px solid green": "2px solid red";
    const identicalPassword = password === checkPassword && checkPassword.length > 1 ? "2px solid green" : "2px solid red";
    const { connectInformation } = useContext(AuthContext);
    const navigate = useNavigate();
   
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checkPassword || !connectInformation.user_email) {
            setMessage("Veuillez remplir tous les champs.");
            setIsSuccess(false);
            return;
        }

       

        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/authentication/modifyPassword`, {password:checkPassword, userEmail:connectInformation.user_email},{ withCredentials: true } );
            if(response.status ===200){
                setMessage(response.data.message);
                setIsSuccess(true);
                setTimeout(()=>{
                    navigate('/MyAccount');
                }, 2000);   
            }
        }catch(error){
            setMessage("Une erreur est survenue lors de la modification de votre mot de passe");
            setIsSuccess(false);
        }
    };
    



    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="bg-black mt-5 m-3 pl-2 rounded-md flex flex-col items-start gap-6 sm:w-[40em] sm:items-center sm:mt-[3em]">
                    <h1 className="text-white text-center text-[1.5rem] pr-2 mt-3">Modifier mon mot de passe</h1>
                    <form className="flex flex-col items-start gap-5 mb-[1em] w-full sm:flex-row sm:gap-[4em] sm:justify-center">
                    <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-white text-[1.1rem]">Nouveau mot de passe</label>
                                <div className="flex items-center gap-2">
                                    <input type="password" className="rounded w-[15em] h-8 pl-1" style={{border: goodLength}} required onChange={(e)=>setPassword(e.target.value)} placeholder="8 caractères minimum"/>
                                    {password.length >= 8 ? <img src="/images/check.png" alt="Logo verifié" className="w-6"  /> : <img src="/images/unCheck.png" alt="Logo non vérifié" className="w-6"  />}
                                </div>
                                
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="checkPassword" className="text-white text-[1.1rem]">Confirmer le mot de passe</label>
                                <div className="flex items-center gap-2">
                                    <input type="password" className="rounded w-[15em] h-8 pl-1" style={{border: identicalPassword}} required onChange={(e)=>setCheckPassword(e.target.value)} placeholder="8 caractères minimum"/>
                                    {identicalPassword === "2px solid green"  ? <img src="/images/check.png" alt="Logo verifié" className="w-6" /> : <img src="/images/unCheck.png" alt="Logo non vérifié" className="w-6" />}
                                </div>
                                
                            </div>
                    </form>
                    {connectInformation? <button className={`text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5] mt-5 mb-5 ml-[6em] sm:ml-0 
                        ${password.length >= 8 && checkPassword === password ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`} 
                        onClick={handleSubmit}
                        disabled={password.length < 8 && checkPassword !== password}>
                        Enregistrer
                    </button>: null}
                    
                </div>
                {message && (
                        <p className={`flex mb-2 justify-center w-[80%] p-3 text-white ${isSuccess ? 'bg-green-500' : 'bg-red-600'} md:w-[15em]`}>
                            {message}
                        </p>
                )}
            </div>


        </Layout>
    
    )
};