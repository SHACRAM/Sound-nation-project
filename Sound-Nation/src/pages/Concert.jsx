import React, { useEffect, useState } from "react";
import { DisplayArtisteParScene } from "../components/DisplayArtisteParScene";
import { Layout } from "../components/Layout";
import axios from "axios";
// Page qui affiche les groupes triés par scène
export const Concert = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [sceneCat, setSceneCat] = useState([]);

  useEffect(() => {
    const getData = async ()=>{
      const response = await axios.get(`https://soundnation.duckdns.org/api/groupes/public/groupes`);
      if(response.data.status){
        setData(response.data.data);
        setIsLoading(false);
      }else{
        console.log(response.data.message);
        setIsLoading(true);
      }
    }
    getData();
  }, []);


  useEffect(() => {
    if(data){
      const tempScene = [];

      data.map((groupe)=>(
        tempScene.push(String(groupe.groupe_scene))
      ))
      setSceneCat([... new Set(tempScene.sort((a, b)=>a-b))]);
    }
  }, [data]);



  if (isLoading) {
    return <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>;
  } else
    return (
      <Layout>
        <div className="p-5">
          {sceneCat.map((cat) => (
            <DisplayArtisteParScene
              key={cat}
              cat={cat}
              data={data}
              sceneCat={sceneCat}
            />
          ))}

        </div>
      </Layout>
    );
};
