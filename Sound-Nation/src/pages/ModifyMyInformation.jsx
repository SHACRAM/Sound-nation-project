import React from "react";
import { Layout } from "../components/Layout";
import { useState, useEffect,useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";


export const ModifyMyInformation = () => {
    const {email} = useParams();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(null);
    const {setConnectInformation} = useContext(AuthContext);
   



    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `${import.meta.env.VITE_API_URL}/api/users/information/${email}`,
              { withCredentials: true }
            );
    
            if (response.status) {
              setNewName(response.data.data.user_name);
              setNewEmail(response.data.data.user_email);
              setMessage(response.data.message);
              setLoading(false);
              setIsSuccess(true);
              
            }
          } catch (error) {
            setMessage(
              "Erreur lors de la récupération des données. Merci de réessayer ultérieurement."
            );
            setLoading(true);
            setIsSuccess(false);
            
          }
        };
    
        getData();
      }, [email]);


      const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/updateUser/${email}`, {email:newEmail, name:newName}, { headers: { 'Content-Type': 'application/json' }});
            if(response.status===200){
                setMessage(response.data.message);
                setConnectInformation({
                    user_email: response.data.data.user_email,
                    user_name: response.data.data.user_name,
                })
                setTimeout(() => {
                    navigate('/MyAccount');
                },2000)  
            }
        }catch{
            setMessage('Erreur lors de la modification de vos informations, merci de réessayer ultérieurement');
        }
      };



    return(
        <Layout>
            <div className="flex flex-col items-center">
                {loading ? 
                <div className="bg-black rounded-lg m-5 mb-[2em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>
                :
                <div className="bg-black m-7 w-[80%] rounded-md flex flex-col items-center gap-6 sm:w-[40em]">
                    <h1 className="text-white text-[1.5rem] mt-3">Modifier mes informations</h1>
                    <form className="flex flex-col items-start gap-5 mb-[1em] sm:flex-row sm:gap-[4em]">
                    <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-white text-[1.2rem]">Email</label>
                                <input type="email" className="rounded w-[15em] h-8 pl-1" value={newEmail} required onChange={(e)=>setNewEmail(e.target.value)}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-white text-[1.2rem]">Nom d'utilisateur</label>
                                <input type="text" className="rounded w-[15em] h-8 pl-1" value={newName} required onChange={(e)=>setNewName(e.target.value)}/>
                            </div>
                    </form>

                    <button className="text-black bg-[#71A984] rounded-lg p-2 border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5] mt-5 mb-5" onClick={handleSubmit}>
                        Enregistrer
                    </button>
                </div>
                }
                {message && (
                        <p className={`flex mb-2 justify-center w-[80%] p-3 text-white ${isSuccess ? 'bg-green-500' : 'bg-red-600'} md:w-[15em]`}>
                            {message}
                        </p>
                )}
            </div>
        </Layout>
    )
    
}