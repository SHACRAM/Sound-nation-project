import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-70">
      <div className="bg-black h-14 flex justify-center gap-3 items-center fixed bottom-0 w-[100%] z-[60]">
        <button
          className="text-white text-[1.8rem] w-[100%] flex justify-center gap-2"
          onClick={toggleMenu}
        >
          Menu
          <img
            src="/images/angle-up-solid.svg"
            alt="icone chevron pour ouvrir le menu"
            className={`w-7 pt-1.5 ${
              isOpen
                ? "rotate-180 transition-transform ease-in-out duration-[0.6s]"
                : "rotate-0 transition-transform ease-in-out duration-[0.6s]"
            }`}
          />
        </button>
      </div>

      <nav
        className={`flex flex-col fixed top-0 right-0 left-0 justify-center items-center bottom-0 bg-black z-50 transition-transform duration-[0.4s] ease-in-out delay-0 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div>
          <a href="https://sound-nation-f5c67.firebaseapp.com/">
            <img
              src="/images/logo.png"
              alt="Logo du festival Sound Nation"
              className="mb-6 hover:opacity-80"
            />
          </a>
        </div>
        <ul className="w-[75%]">
          <li className="text-white bg-[#023E33] justify-center rounded-[50px] p-4 mb-6 text-lg">
            <NavLink
              className="flex justify-center items-center "
              to="/partenaire"
            >
              Nos partenaires
            </NavLink>
          </li>
          <li className="text-white bg-[#023E33] justify-center rounded-[50px] p-4 mb-6 text-lg">
            <NavLink
              className="flex justify-center items-center "
              to="/informations&faq"
            >
              Informations & FAQ
            </NavLink>
          </li>
          <li className="text-white bg-[#023E33] justify-center rounded-[50px] p-4 mb-6 text-lg">
            <NavLink className="flex justify-center items-center " to="/Carte">
              Carte
            </NavLink>
          </li>
          <li className="text-white bg-[#023E33] justify-center rounded-[50px] p-4 mb-6 text-lg">
            <NavLink
              className="flex justify-center items-center "
              to="/Concert"
            >
              Concerts
            </NavLink>
          </li>
          <li className="text-white bg-[#023E33] justify-center rounded-[50px] p-4 mb-6 text-lg">
            <NavLink
              className="flex justify-center items-center "
              to="https://shotgun.live/fr"
              target="_blank"
            >
              Billetterie
            </NavLink>
          </li>
          <li className="text-white  bg-[#023E33] justify-center rounded-[50px] p-4 mb-10 text-lg">
            <NavLink
              className="flex justify-center items-center "
              to="/programmation"
            >
              Programmation
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
