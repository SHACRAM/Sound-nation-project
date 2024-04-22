import React, { useEffect, useState } from "react";
import { DisplayPartenaireCat } from "../components/DisplayPartenaireCat";
import { Layout } from "../components/Layout";

export const Partenaire = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [partenaireCat, setPartenaireCat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/partenaires?populate=*"
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
      data.forEach((partenaire) => {
        if (!typesUniques[partenaire.attributes.type]) {
          typesUniques[partenaire.attributes.type] = true;
        }
      });
      const typesUniquesArray = Object.keys(typesUniques);
      setPartenaireCat(typesUniquesArray);
    }
  }, [data]);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  } else
    return (
      <Layout>
        <div className="bg-black m-10 rounded-lg mb-[8em] pt-5 pb-5">
          <h1 className="text-white text-[2rem] flex justify-center">
            Nos partenaires
          </h1>
          {partenaireCat.map((cat) => (
            <DisplayPartenaireCat key={cat} cat={cat} data={data} />
          ))}
        </div>
      </Layout>
    );
};
