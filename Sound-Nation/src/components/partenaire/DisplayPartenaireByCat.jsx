import React from "react";
// Composant qui permet d'afficher les partenaire en fonction de leur catégorie
export const DisplayPartenaireByCat = ({ cat, data }) => {
  return (
    <div>
      <h2 className="text-white flex justify-center text-[1.5rem] mb-8 underline mt-[2em] ">
        {cat}
      </h2>
      <div className="flex flex-row flex-wrap justify-center">
        {data.map((partenaire, index) => {
          if (partenaire.partner_category === cat) {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 items-center border-[5px] p-3 rounded-[30px] m-5 w-[fit-content] "
              >
                <img
                  src={
                    
                    `https://soundnation.duckdns.org/${partenaire.partner_image_path}`
                  }
                  alt={
                    `https://soundnation.duckdns.org/${partenaire.partner_image_alt}`
                  }
                  className="w-[13em] rounded-[30px]"
                />
                <h2 className="text-white underline text-[1.5rem]">
                  {partenaire.partner_name}
                </h2>
                <a href={partenaire.partner_site} target="_blank">
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
