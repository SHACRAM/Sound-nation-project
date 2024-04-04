import React, { useEffect, useState } from "react";
import { DisplayArtisteParScene } from "../components/DisplayArtisteParScene";
import { Layout } from "../components/Layout";

export const Concert = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [sceneCat, setSceneCat] = useState([]);

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
        setData(jsonData.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const typesUniques = {};
      data.forEach((scene) => {
        if (!typesUniques[scene.attributes.scene]) {
          typesUniques[scene.attributes.scene] = true;
        }
      });
      const typesUniquesArray = Object.keys(typesUniques);
      setSceneCat(typesUniquesArray);
    }
  }, [data]);
  if (isLoading) {
    return <p>Chargement en cours...</p>;
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
