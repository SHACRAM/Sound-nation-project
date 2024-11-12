import { useEffect, useState } from "react";
import { AffichageGroupe } from "../components/AffichageGroupe";
import { Filtrage } from "../components/Filtrage";
import { Layout } from "../components/Layout";
import axios from "axios";
// Page de la programmation du festival
export const Programmation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [uniqueDate, setUniqueDate] = useState([]);
  const [uniqueHour, setUniqueHour] = useState([]);
  const [uniqueScene, setUniqueScene] = useState([]);
  const [message, setMessage] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const storedDataFilter = localStorage.getItem("dataFilter");
    if (storedDataFilter) {
      setDataFilter(JSON.parse(storedDataFilter));
    }
    const storedAllGroupes = localStorage.getItem("allGroupes") === "true";
    setIsChecked(storedAllGroupes);  
  }, []); 

  useEffect(() => {
    if (isChecked) {
      localStorage.setItem('allGroupes', JSON.stringify(true));
    }
  }, [isChecked]);

  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/groupes');
        if(response.data.status){
          setData(response.data.data);
          const tempDate =[];
          const tempHour =[];
          const tempScene =[];
          response.data.data.map((groupe)=>{
            tempDate.push(groupe.groupe_date);
            tempHour.push(groupe.groupe_hour);
            tempScene.push(groupe.groupe_scene);
          })
          setUniqueDate([...new Set(tempDate.reverse())]);
          setUniqueHour([...new Set(tempHour.sort((a, b)=>a-b))]);
          setUniqueScene([...new Set(tempScene.sort((a, b)=>a-b))]);
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

  const dataToDisplay = data.filter((groupe) => {
    if (dataFilter.length === 0) {
      return true;
    }
  
    const dateFilters = dataFilter.filter((filter) => uniqueDate.includes(filter));
    const hourFilters = dataFilter.filter((filter) => uniqueHour.includes(parseInt(filter)));
    const sceneFilters = dataFilter.filter((filter) => uniqueScene.includes(parseInt(filter)));
  
    const matchesDate = dateFilters.length === 0 || dateFilters.includes(groupe.groupe_date);
    const matchesHour = hourFilters.length === 0 || hourFilters.includes(groupe.groupe_hour.toString());
    const matchesScene = sceneFilters.length === 0 || sceneFilters.includes(groupe.groupe_scene.toString());
  
    return matchesDate && matchesHour && matchesScene;
  });
  
  
  
  



  if (isLoading) {
    return <div className="bg-black rounded-lg m-10 mb-[5em] flex justify-center"><div className="p-[10em] flex flex-col items-center"><p className="text-white m-10">Chargement en cours...</p> <img src="/images/logo.jpg" alt="Logo du site Sound Nation" className="h-[10em] w-[10em] animate-bounce" /></div></div>;
  } else
    return (
      <Layout>
        <div className="bg-black m-10 rounded-lg flex flex-col items-center mb-10">
          <h1 className="text-white flex justify-center p-5 mb-5 text-[2rem]">
            Programmation
          </h1>
            <Filtrage uniqueDate={uniqueDate} uniqueHour={uniqueHour} uniqueScene={uniqueScene} setDataFilter={setDataFilter} dataFilter={dataFilter} isChecked={isChecked} setIsChecked={setIsChecked}  />
            <AffichageGroupe data={dataToDisplay} />
        </div>
      </Layout>
    );
};
