import { useEffect, useState } from "react";
import { AffichageGroupe } from "../components/AffichageGroupe";
import { Filtrage } from "../components/Filtrage";
import { Layout } from "../components/Layout";
import { FilterProvider } from "../contexts/FilterContext";
import axios from "axios";

export const Programmation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [uniqueCat, setUniqueCat] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/groupes');
        if(response.data.status){
          setData(response.data.data);
          const tempCat =[];
          response.data.data.map((groupe)=>{
            tempCat.push(groupe.groupe_category);
          })
          setUniqueCat([...new Set(tempCat)]);
          setIsLoading(false);
        } else{
          setMessage(response.data.message);
          setIsLoading(true);
        }
      } catch (error) {
        setMessage("Erreur lors de la récupération des données");
        setIsLoading(true);
      }
    };
    getData();
  }, []);



  if (isLoading) {
    return <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>;
  } else
    return (
      <Layout>
        <div className="bg-black m-10 rounded-lg flex flex-col items-center mb-10">
          <h1 className="text-white flex justify-center p-5 mb-5 text-[2rem]">
            Programmation
            {console.log(data)}
          </h1>
          {/* <FilterProvider> */}
            {/* <Filtrage /> */}
            <AffichageGroupe data={data} />
          {/* </FilterProvider> */}
        </div>
      </Layout>
    );
};
