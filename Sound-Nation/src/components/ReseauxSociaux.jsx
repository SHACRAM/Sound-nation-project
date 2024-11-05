import React from "react";

export const ReseauxSociaux = () => {

    const reseaux = [
        {
          name: "Facebook",
          path: "/images/Facebook.svg",
          description: "icone de facebook",
          link: "https://www.facebook.com/",
        },
        {
          name: "Twitter",
          path: "/images/Twitter.svg",
          description: "icone de twitter",
          link: "https://www.twitter.com/",
        },
        {
          name: "Youtube",
          path: "/images/Youtube.svg",
          description: "icone de youtube",
          link: "https://www.youtube.com/",
        },
        {
          name: "Instagram",
          path: "/images/Instagram.svg",
          description: "icone de instagram",
          link: "https://www.instagram.com/",
        },
        {
          name: "Linkedin",
          path: "/images/Linkedin.svg",
          description: "icone de linkedin",
          link: "https://www.linkedin.com/",
        },
        {
          name: "Snapchat",
          path: "/images/Snapchat.svg",
          description: "icone de snapchat",
          link: "https://www.snapchat.com/",
        },
      ];



    return( 
    <div className="flex justify-center mb-2">
        <div className="flex justify-center gap-6 sm:gap-[3em]">
          {reseaux.map((reseau) => (
            <a href={reseau.link} target="blank" key={reseau.name}>
              <img
                src={reseau.path}
                alt={reseau.description}
                className="w-[1.5em] h-[1.5em] hover:opacity-60"
              />
            </a>
          ))}
          ;
        </div>
      </div>)
};