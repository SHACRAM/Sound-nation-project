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
export const Header = () => {
  return (
    <header className="bg-black flex justify-between">
      <div>
        <a href="https://sound-nation-f5c67.firebaseapp.com/">
          <img
            src="/images/logo.png"
            alt="Logo du festival Sound Nation"
            className="ml-2 mt-2 mb-4 hover:opacity-80"
          />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-white text-[0.8rem] mt-[1em] mb-2 pr-4 ">
          Suivez-nous sur nos réseaux :
        </p>
        <div className="flex gap-4">
          {reseaux.map((reseau) => (
            <a href={reseau.link} target="blank" key={reseau.name}>
              <img
                src={reseau.path}
                alt={reseau.description}
                className="w-[1.5em] active:opacity-60"
              />
            </a>
          ))}
          ;
        </div>
      </div>
      <div className="flex gap-1.5 items-start mt-2 mr-2">
        <img
          src="/images/fr 1.svg"
          alt="drapeau français"
          className="w-6 hover:opacity-80"
        />
        <img
          src="/images/gb 1.svg"
          alt="drapeau du Royaume-Uni"
          className="w-6 hover:opacity-80"
        />
      </div>
    </header>
  );
};
