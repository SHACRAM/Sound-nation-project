import { React, useEffect, useState } from "react";
import { FiltrageMap } from "../components/FiltrageMap";
import { Layout } from "../components/Layout";
import { MyMap } from "../components/Map";

export const Carte = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isLoadingGroupe, setIsLoadingGroupe] = useState(true);
  const [dataGroupe, setDataGroupe] = useState(null);
  const [checkBoxChecked, setCheckBoxChecked] = useState([]);
  const [currentDate, setCurrenDate] = useState();
  const [currentHour, setCurrentHour] = useState();
  const [concertParScene, setConcertParScene] = useState({});
  const [isFullScreen, setFullScreen] = useState(false);

  const activateFullScreen = () => {
    setFullScreen(true);
  };

  const desactiveFullScreen = () => {
    setFullScreen(false);
  };

  const optionsDate = { weekday: "long", month: "long", day: "numeric" };

  useEffect(() => {
    const date = new Date();
    const dateActuelle = date.toLocaleDateString("fr-FR", optionsDate);
    const hour = date.getHours();
    setCurrenDate(dateActuelle.charAt(0).toUpperCase() + dateActuelle.slice(1));
    setCurrentHour(hour);
    if (currentDate && currentHour && dataGroupe) {
      const concertsEnCours = dataGroupe.filter((groupe) => {
        return (
          groupe.attributes.horaire === currentHour + "h" &&
          groupe.attributes.jour === currentDate
        );
      });
      const concertParScene = {};
      concertsEnCours.forEach((concert, index) => {
        if (concertParScene[concert.attributes.scene]) {
          concertParScene[concert.attributes.scene].push(concert);
        } else {
          concertParScene[concert.attributes.scene] = [concert];
        }
      });
      setConcertParScene(concertParScene);
    }
  }, [currentDate, currentHour, dataGroupe]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/groupes?populate=*"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setDataGroupe(jsonData.data);
        setIsLoadingGroupe(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoadingGroupe(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/map-places?populate=*"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await response.json();
        setData(jsonData.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  } else
    return (
      <Layout>
        <div className="bg-black flex rounded-lg m-10 mb-[5em] flex-col">
          <div className="p-5">
            <h1 className="text-white text-[2rem] flex justify-center">
              Carte du festival
            </h1>
            <FiltrageMap
              data={data}
              checkBoxChecked={checkBoxChecked}
              setCheckBoxChecked={setCheckBoxChecked}
            />
            <div
              className={
                isFullScreen
                  ? "fixed top-0 left-0 w-[100vw] h-[100%] bg-black"
                  : "w-[100%]"
              }
            >
              <MyMap
                checkBoxChecked={checkBoxChecked}
                concertParScene={concertParScene}
                activateFullScreen={activateFullScreen}
                desactiveFullScreen={desactiveFullScreen}
                isFullScreen={isFullScreen}
                currentHour={currentHour}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
};
