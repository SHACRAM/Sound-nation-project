import React, { useEffect, useState } from "react";
import { DisplayPartenaireByCat } from "../components/partenaire/DisplayPartenaireByCat";
import { Layout } from "../components/Layout";
import axios from "axios";
// Page qui affiche les partenaires du festival
export const Partenaire = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [partenaireCat, setPartenaireCat] = useState([]);

    const getData = async () => {
      try {
        const response = await axios.get(
          `https://soundnation.duckdns.org/api/partners/getPartners/public`
        );
        if (response.data.status) {
          setData(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
  
  useEffect(() => {
    getData();
    if (data) {
     
     const tempCat = data.map((partner)=> partner.partner_category);
      const cat = [...new Set(tempCat)];
      setPartenaireCat(cat);
    }
  }, [data]);

  if (isLoading) {
    return <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>;
  } else
    return (
      <Layout>
        <div className="bg-black m-10 rounded-lg mb-[8em] pt-5 pb-5">
          <h1 className="text-white text-[2rem] flex justify-center">
            Nos partenaires
          </h1>
          {partenaireCat.map((cat, index) => (
            <DisplayPartenaireByCat key={index} cat={cat} data={data} />
          ))}
        </div>
      </Layout>
    );
};
