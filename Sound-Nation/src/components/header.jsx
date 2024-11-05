import { ReseauxSociaux } from "./ReseauxSociaux";
import { NavLink } from "react-router-dom";
import { NavBarMobile } from "./NavBarMobile";
import { NavBarDesktop } from "./NavBarDesktop";
import { useState } from "react";
export const Header = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState('menu');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = ()=>{
    if(!isMenuClicked){
        setBurgerClass('burger-bar clicked');
        setMenuClass('menu visible');
    } else{
        setBurgerClass('burger-bar unclicked');
        setMenuClass('menu');  
    }
    setIsMenuClicked(!isMenuClicked);
}



  return (
    <header className="bg-black flex flex-col">
      <div className="flex justify-between">
        <a href="http://localhost:5173/">
          <img
            src="/images/logo.png"
            alt="Logo du festival Sound Nation"
            className="ml-2 mt-2 mb-4 hover:opacity-80 w-[6em] h-[5em]"
          />
        </a>
        <div className="sm:hidden">
          <NavBarMobile burgerClass={burgerClass} menuClass={menuClass} updateMenu={updateMenu} />
        </div>
        <div className="hidden sm:flex">
          <NavBarDesktop/>
        </div>
      </div>
      <div>
        <ReseauxSociaux />
      </div>
    </header>
  );
};
