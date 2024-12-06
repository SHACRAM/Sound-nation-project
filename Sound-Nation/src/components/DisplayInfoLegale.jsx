import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const DisplayInfoLegale = () => {
  const [cgu, setCgu] = useState([]);
  const [cookies, setCookies] = useState([]);
  const [DonneesPersonnelles, setDonneesPersonnelles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    
    const tempCgu = [];
    const tempCookies = [];
    const tempDonneesPersonnelles = [];


    try{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/informations/public/getCguCookie`);
      if(response.data.status){
        response.data.data.map((item) => {
          if(item.category === "cgu"){
            tempCgu.push(item);
          }else if(item.category === "cookie"){
            tempCookies.push(item);
          }else if(item.category === "pData"){
            tempDonneesPersonnelles.push(item);
          }
        });
        setCgu(tempCgu);
        setCookies(tempCookies);
        setDonneesPersonnelles(tempDonneesPersonnelles);
        setLoading(false);
      }

    }catch(error){
      if(error.response){
        console.log(error.response.data);
      }
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);


    return (
      <div className="bg-black rounded-lg p-10 flex-col mt-10 mb-[3.5em]">
        {loading ? 
        <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>
         :
          <div>
              <div>
                <h1 className="text-[white] flex justify-center mb-[2rem] text-3xl">
                  Informations légales
                </h1>
              </div>
              <ul className="flex-col pl-">
                <li className="text-[white] text-base flex items-center gap-3 mb-5">
                  <img
                    src="../images/flecheDroite.png"
                    alt="fleche vers la doite"
                    className="w-8"
                  />
                  <NavLink to="/informationsFaq/DonneesPersonnelles" state={DonneesPersonnelles}>
                    Données personnelles
                  </NavLink>
                </li>
                <li className="text-[white] text-base flex items-center gap-3 mb-5">
                  <img
                    src="../images/flecheDroite.png"
                    alt="fleche vers la doite"
                    className="w-8"
                  />
                  <NavLink to="/informationsFaq/Cgu" state={cgu}>
                    Conditions générales d'utilisation
                  </NavLink>
                </li>
                <li className="text-[white] text-base flex items-center gap-3">
                  <img
                    src="../images/flecheDroite.png"
                    alt="fleche vers la doite"
                    className="w-8"
                  />
                  <NavLink to="/informationsFaq/Cookies" state={cookies}>Gestion des cookies</NavLink>
                </li>
              </ul>
          </div>
        }
      </div>
    );
  };