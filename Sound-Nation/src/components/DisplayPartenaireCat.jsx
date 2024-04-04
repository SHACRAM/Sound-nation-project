import React from "react";

export const DisplayPartenaireCat = ({ cat, data }) => {
  return (
    <div>
      <h2 className="text-white flex justify-center text-3xl mb-8 underline mt-[2em] ">
        {cat}
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        {data.map((partenaire) => {
          if (partenaire.attributes.type === cat) {
            return (
              <div
                key={partenaire.id}
                className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
              >
                <img
                  src={
                    "http://localhost:1337" +
                    partenaire.attributes.logo.data.attributes.url
                  }
                  alt={
                    partenaire.attributes.logo.data.attributes.alternativeText
                  }
                  className="w-[13em] rounded-[30px]"
                />
                <h2 className="text-white underline text-[1.5rem]">
                  {partenaire.attributes.nom}
                </h2>
                <a href={partenaire.attributes.site} target="_blank">
                  <button className="text-black text-[1.2rem] bg-[#71A984] p-2 rounded-lg border active:bg-[#023E33] active:text-white hover:bg-[#93c9a5]">
                    Nous découvrir
                  </button>
                </a>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
