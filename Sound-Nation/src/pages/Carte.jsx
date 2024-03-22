import { React, useEffect, useState } from "react";
import { FiltrageMap } from "../components/FiltrageMap";
import { Layout } from "../components/Layout";
import { MyMap } from "../components/Map";

export const Carte = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [checkBoxChecked, setCheckBoxChecked] = useState([]);

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
        <div className="bg-black flex rounded-lg m-10 mb-[5em]">
          <div className="w-[100%] p-5">
            <h1 className="text-white text-[2rem] flex justify-center">
              Carte du festival
            </h1>
            <FiltrageMap
              data={data}
              checkBoxChecked={checkBoxChecked}
              setCheckBoxChecked={setCheckBoxChecked}
            />
            <MyMap checkBoxChecked={checkBoxChecked} />
          </div>
        </div>
      </Layout>
    );
};
