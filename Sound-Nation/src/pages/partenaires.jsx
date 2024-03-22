import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

export const Partenaire = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [banques, setBanque] = useState([]);
  const [equipements, setEquipements] = useState([]);
  const [services, setService] = useState([]);
  const [aliments, setAliment] = useState([]);

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
      setBanque(data.filter((banque) => banque.attributes.type === "banque"));
      setEquipements(
        data.filter((equipement) => equipement.attributes.type === "equipement")
      );
      setService(
        data.filter((service) => service.attributes.type === "service")
      );
      setAliment(
        data.filter(
          (aliment) => aliment.attributes.type === "produit-alimentaire"
        )
      );
    }
  }, [data]);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  } else
    return (
      <Layout>
        <div className="bg-black m-10 rounded-lg">
          <h1 className="text-white text-[2.5rem] flex justify-center pt-7 mb-[2em]">
            Nos partenaires
          </h1>
          <h2 className="text-white flex justify-center text-2xl mb-8 underline ">
            Équipements
          </h2>
          <div className="flex flex-row flex-wrap justify-center">
            {equipements.map((equipement) => (
              <div
                key={equipement.id}
                className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
              >
                <img
                  src={
                    "http://localhost:1337" +
                    equipement.attributes.logo.data.attributes.url
                  }
                  alt={
                    equipement.attributes.logo.data.attributes.alternativeText
                  }
                  className="w-[13em] rounded-[30px]"
                />
                <h2 className="text-white underline text-[1.5rem]">
                  {equipement.attributes.nom}
                </h2>
                <a href={equipement.attributes.site} target="_blank">
                  <button className="text-black text-[1.2rem] bg-[#71A984] p-2 rounded-lg border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                    Nous découvrire
                  </button>
                </a>
              </div>
            ))}
          </div>
          <h2 className="text-white flex justify-center text-2xl mb-8 mt-8 underline">
            Banques
          </h2>
          <div className="flex flex-wrap justify-center">
            {banques.map((banque) => (
              <div
                key={banque.id}
                className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
              >
                <img
                  src={
                    "http://localhost:1337" +
                    banque.attributes.logo.data.attributes.url
                  }
                  alt={banque.attributes.logo.data.attributes.alternativeText}
                  className="w-[13em] rounded-[30px]"
                />
                <h2 className="text-white underline text-[1.5rem]">
                  {banque.attributes.nom}
                </h2>
                <a href={banque.attributes.site} target="_blank">
                  <button className="text-black text-[1.2rem] bg-[#71A984] p-2 rounded-lg border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                    Nous découvrire
                  </button>
                </a>
              </div>
            ))}
          </div>
          <h2 className="text-white flex justify-center text-2xl mb-8 mt-8 underline">
            Services
          </h2>
          <div className="flex flex-wrap justify-center">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
              >
                <img
                  src={
                    "http://localhost:1337" +
                    service.attributes.logo.data.attributes.url
                  }
                  alt={service.attributes.logo.data.attributes.alternativeText}
                  className="w-[13em] rounded-[30px]"
                />
                <h2 className="text-white underline text-[1.5rem]">
                  {service.attributes.nom}
                </h2>
                <a href={service.attributes.site} target="_blank">
                  <button className="text-black text-[1.2rem] bg-[#71A984] p-2 rounded-lg border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                    Nous découvrire
                  </button>
                </a>
              </div>
            ))}
          </div>
          <h2 className="text-white flex justify-center text-2xl mb-8 mt-8 underline">
            Produits alimentaires
          </h2>
          <div className="flex flex-wrap justify-center">
            {aliments.map((produit) => (
              <div
                key={produit.id}
                className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
              >
                <img
                  src={
                    "http://localhost:1337" +
                    produit.attributes.logo.data.attributes.url
                  }
                  alt={produit.attributes.logo.data.attributes.alternativeText}
                  className="w-[13em] rounded-[30px]"
                />
                <h2 className="text-white underline text-[1.5rem]">
                  {produit.attributes.nom}
                </h2>
                <a href={produit.attributes.site} target="_blank">
                  <button className="text-black text-[1.2rem] bg-[#71A984] p-2 rounded-lg border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                    Nous découvrire
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
};
