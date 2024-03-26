import React, { useEffect, useState } from "react";
import { Element, Link } from "react-scroll";
import { Layout } from "../components/Layout";
import { ProgScene } from "../components/ProgScene";

export const Concert = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [scene1, setScene1] = useState([]);
  const [scene2, setScene2] = useState([]);
  const [scene3, setScene3] = useState([]);
  const [scene4, setScene4] = useState([]);
  const [scene5, setScene5] = useState([]);

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
      const filteredScene1 = data.filter(
        (scene) => scene.attributes.scene === "1"
      );
      const filteredScene2 = data.filter(
        (scene) => scene.attributes.scene === "2"
      );
      const filteredScene3 = data.filter(
        (scene) => scene.attributes.scene === "3"
      );
      const filteredScene4 = data.filter(
        (scene) => scene.attributes.scene === "4"
      );
      const filteredScene5 = data.filter(
        (scene) => scene.attributes.scene === "5"
      );

      setScene1(filteredScene1);
      setScene2(filteredScene2);
      setScene3(filteredScene3);
      setScene4(filteredScene4);
      setScene5(filteredScene5);
    }
  }, [data]);

  if (isLoading) {
    return <p>Chargement en cours...</p>;
  } else
    return (
      <Layout>
        <Element name="scene1" className="bg-black m-10 p-5 rounded-lg">
          <h2 className="text-white text-[3rem] flex justify-center">
            Scène 1
          </h2>
          <div className="flex justify-center mt-3">
            <Link
              to="scene2"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 2
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene3"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 3
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene4"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 4
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene5"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 5
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 justify-center mt-[5em]">
            {scene1.map((scene) => {
              return (
                <ProgScene
                  key={scene.id}
                  nom={scene.attributes.nom}
                  image={scene.attributes.Image.data.attributes.url}
                  alt={scene.attributes.Image.data.attributes.alternativeText}
                  jour={scene.attributes.jour}
                  heure={scene.attributes.horaire}
                />
              );
            })}
          </div>
        </Element>

        <div id="scene2" className="bg-black m-10 p-10 rounded-lg">
          <h2 className="text-white text-[3rem] flex justify-center">
            Scène 2
          </h2>
          <div className="flex justify-center mt-3">
            <Link
              to="scene1"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 1
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene3"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 3
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene4"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 4
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene5"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 5
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-[5em]">
            {scene2.map((scene) => {
              return (
                <ProgScene
                  key={scene.id}
                  nom={scene.attributes.nom}
                  image={scene.attributes.Image.data.attributes.url}
                  alt={scene.attributes.Image.data.attributes.alternativeText}
                  jour={scene.attributes.jour}
                  heure={scene.attributes.horaire}
                />
              );
            })}
          </div>
        </div>
        <div id="scene3" className="bg-black m-10 p-10 rounded-lg">
          <h2 className="text-white text-[3rem] flex justify-center">
            Scène 3
          </h2>
          <div className="flex justify-center mt-3">
            <Link
              to="scene1"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 1
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene2"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 2
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene4"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 4
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene5"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 5
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-[5em]">
            {scene3.map((scene) => {
              return (
                <ProgScene
                  key={scene.id}
                  nom={scene.attributes.nom}
                  image={scene.attributes.Image.data.attributes.url}
                  alt={scene.attributes.Image.data.attributes.alternativeText}
                  jour={scene.attributes.jour}
                  heure={scene.attributes.horaire}
                />
              );
            })}
          </div>
        </div>
        <div id="scene4" className="bg-black m-10 p-10 rounded-lg">
          <h2 className="text-white text-[3rem] flex justify-center">
            Scène 4
          </h2>
          <div className="flex justify-center mt-3">
            <Link
              to="scene1"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 1
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene2"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 2
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene3"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 3
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene5"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 5
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-[5em]">
            {scene4.map((scene) => {
              return (
                <ProgScene
                  key={scene.id}
                  nom={scene.attributes.nom}
                  image={scene.attributes.Image.data.attributes.url}
                  alt={scene.attributes.Image.data.attributes.alternativeText}
                  jour={scene.attributes.jour}
                  heure={scene.attributes.horaire}
                />
              );
            })}
          </div>
        </div>
        <div id="scene5" className="bg-black m-10 p-10 rounded-lg mb-10">
          <h2 className="text-white text-[3rem] flex justify-center">
            Scène 5
          </h2>
          <div className="flex justify-center mt-3">
            <Link
              to="scene1"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 1
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene2"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 2
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene3"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 3
            </Link>
            <p className="text-white">&nbsp;/&nbsp; </p>
            <Link
              to="scene4"
              spy={true}
              smooth={true}
              duration={1000}
              className="text-white underline cursor-pointer text-[0.8rem]"
            >
              Scène 4
            </Link>
          </div>
          <div className="flex flex-wrap gap-8 justify-center mt-[5em]">
            {scene5.map((scene) => {
              return (
                <ProgScene
                  key={scene.id}
                  nom={scene.attributes.nom}
                  image={scene.attributes.Image.data.attributes.url}
                  alt={scene.attributes.Image.data.attributes.alternativeText}
                  jour={scene.attributes.jour}
                  heure={scene.attributes.horaire}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    );
};
