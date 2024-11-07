import { React, useEffect, useState } from "react";
import { FiltrageMap } from "../components/FiltrageMap";
import { Layout } from "../components/Layout";
import { MyMap } from "../components/Map";
import axios from "axios";
// Page qui permet d'afficher la carte du festival
export const Carte = () => {
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  const [dataMap, setDataMap] = useState(null);
  const [isLoadingGroupe, setIsLoadingGroupe] = useState(true);
  const [dataGroupe, setDataGroupe] = useState(null);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [isFullScreen, setFullScreen] = useState(false);
  const [checkBoxToDisplay, setCheckBoxToDisplay] = useState([]);

  const activateFullScreen = () => {
    setFullScreen(true);
  };

  const desactiveFullScreen = () => {
    setFullScreen(false);
  };

  useEffect(() => {
    const getDataGroupes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/groupes');
        if(response.data.status){
          setDataGroupe(response.data.data);
          setIsLoadingGroupe(false);
        } else{
          setIsLoadingGroupe(true);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setIsLoadingGroupe(false);
      }
    };
    getDataGroupes();
  }, []);

  useEffect(() => {
    const getDataMap = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/places');
        if(response.data.status){
          setDataMap(response.data.data);
          const tempCategories = response.data.data.map((place) => {
            return {
              cat: place.place_category,
              logo: place.place_logo_path,
              alt: place.place_logo_alt,
              color: place.place_marker_color
            };
          });
          const uniqueCategories = Array.from(
            new Map(tempCategories.map((item) => [item.cat, item])).values()
          );
          setUniqueCategories(uniqueCategories);
          setIsLoadingMap(false);
        } else{
          setIsLoadingMap(true)};
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
        setIsLoadingMap(false);
      }
    };
    getDataMap();
  }, []);

  if (isLoadingMap) {
    return <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>
    
  } else
    return (
      <Layout>
        <div className="bg-black flex rounded-lg m-7 mb-[5em] flex-col">
        <h1 className="text-white text-[2rem] flex justify-center">
              Carte du festival
            </h1>
            <FiltrageMap dataMap={dataMap} uniqueCategories={uniqueCategories} setCheckBoxToDisplay={setCheckBoxToDisplay} />
        </div>
        <div className="bg-black flex rounded-lg m-7 mb-[5em] flex-col">
          <div className="p-3">
            <div
              className={
                isFullScreen
                  ? "fixed top-0 left-0 w-[100vw] h-[100%] bg-black"
                  : "w-[100%]"
              }
            >
              <MyMap
                activateFullScreen={activateFullScreen}
                desactiveFullScreen={desactiveFullScreen}
                isFullScreen={isFullScreen}
                dataMap={dataMap}
                checkBoxToDisplay={checkBoxToDisplay}
                dataGroupe={dataGroupe}
                
              />
            </div>
          </div>
        </div>
       
      </Layout>
    );
};
