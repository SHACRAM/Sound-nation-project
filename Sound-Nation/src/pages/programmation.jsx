import { useEffect, useState } from "react";
import { AffichageGroupe } from "../components/AffichageGroupe";
import { Filtrage } from "../components/Filtrage";
import { Layout } from "../components/Layout";
import { FilterProvider } from "../contexts/FilterContext";

export const Programmation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://stylish-luck-2453f4abab.strapiapp.com/api/groupes?populate=*"
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
        <div className="bg-black m-10 rounded-lg flex flex-col items-center mb-10">
          <h1 className="text-white flex justify-center p-5 mb-5 text-3xl">
            Programmation
          </h1>
          <FilterProvider>
            <Filtrage />
            <AffichageGroupe data={data} />
          </FilterProvider>
        </div>
      </Layout>
    );
};
