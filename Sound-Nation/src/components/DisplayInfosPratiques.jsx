import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
// Composant qui permet de récupérer les informations pratiques et de les afficher
export const DisplayInfosPratiques = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getData();
  },[]);


  const getData = async () => {
    try{

      const response = await axios.get(`https://soundnation.duckdns.org/api/informations/public`);
      if(response.data.status){
        setData(response.data.data);
        setLoading(false);
      }

    }catch(error){
      setLoading(true);
    }
  }; 


  
  return (
    <div className="bg-black rounded-lg p-4 flex-col  mb-[3.5em]">
      {loading ? 
      <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>
      :<div>
          <h1 className="text-[white] flex justify-center mb-[2rem] text-3xl">
            Informations pratiques
          </h1>
          <div className="flex flex-col">
            {data.map((item) => (
              <div key={item.id} className="mt-[2em]">
                <h2 className=" text-[1.4rem] mb-4 text-[#ee7e1a]">{item.title}</h2>
                <ReactMarkdown className="text-[white] markdown react-markdown w-full h-80 overflow-auto border p-2 rounded-md lg:h-fit">{item.information}</ReactMarkdown>
              </div>
            ))}
          </div>
        </div>}
    </div>
    
  );
};
