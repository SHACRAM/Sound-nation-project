import { ReseauxSociaux } from "./ReseauxSociaux";
import { NavLink } from "react-router-dom";
import { NavBarMobile } from "./navBar/NavBarMobile";
import { NavBarDesktop } from "./navBar/NavBarDesktop";
import { useState,useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

// Composant qui permet de gérer le header dont la navigation responsive
export const Header = () => {
  const navigate = useNavigate();
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState('menu');
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [disconnectMesssage, setDisconnectMessage] = useState('');
  const {connectInformation, setConnectInformation} = useContext(AuthContext);
  const [cookieDiv, setCookieDiv] = useState(localStorage.getItem('cookie') === 'false' ? false : true);

  



  const handleLogOut = async()=>{
    const response = await axios.get(`https://soundnation.duckdns.org/api/authentication/logOut`, { withCredentials: true });
    if(response.data.status){
        setDisconnectMessage(response.data.message);
        setConnectInformation(null);
        setMenuClass('menu'); 
        setBurgerClass('burger-bar unclicked');
        setTimeout(()=>{
            navigate('/');
        }, 2000);
    } else {
        setDisconnectMessage(response.data.message);
    }
  }

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


const handleCookie = ()=>{
  setCookieDiv(false);
  localStorage.setItem('cookie', 'false');
}



  return (
    <header className="bg-black flex flex-col">
      <div className="justify-end hidden sm:flex">
        {connectInformation ?
          <div className="flex items-center gap-[2em]">
            <div className="flex items-center gap-2">
              <img src="/images/User.png" alt="Logo utilisateur" className="w-5 h-5" />
              <NavLink className='text-white flex justify-center pb-2 pt-2 text-[1rem] hover:underline' to="/MyAccount">{connectInformation.user_name}</NavLink>
            </div>
              <button className="text-[#008BFF] mr-3 hover:opacity-80" onClick={()=>handleLogOut()} >Se déconnecter</button>
            </div>
              : <NavLink className="text-white mt-2 mr-3" to="/Login">
              Se connecter
            </NavLink>}
        
      </div>
      <div className="flex justify-between sm:flex-col sm:items-center lg:flex-row">
        <a href="https://sound-nation.vercel.app/">
          <img
            src="/images/logo.png"
            alt="Logo du festival Sound Nation"
            className="ml-2 mt-2 mb-4 hover:opacity-80 w-[6em] h-[5em]"
          />
        </a>
        <div className="sm:hidden">
          <NavBarMobile burgerClass={burgerClass} menuClass={menuClass} updateMenu={updateMenu} handleLogOut={handleLogOut} />
        </div>
        <div className="hidden sm:flex">
          <NavBarDesktop/>
        </div>
      </div>
      <div className="mt-4 flex justify-center w-[100%]">
          <ReseauxSociaux />
      </div>
      {cookieDiv ? 
        <div className="h-[10em] w-full fixed bottom-0 bg-white opacity-90 p-3 flex flex-col items-center gap-2 lg:flex-row lg:gap-6 lg:items-center sm:h-[8em] md:h-[8em] lg:h-[5em] z-[1000]">
            <p className="text-black md:w-[80%]">Ce site utilise des cookies pour améliorer votre expérience. Vos données restent confidentielles et ne seront ni partagées ni vendues à des tiers.</p>
            <button className="text-blue-600 border border-blue-600 p-1 rounded-md mb-2 hover:bg-blue-600 hover:text-white" onClick={handleCookie} >J'ai compris</button>
      </div> : null}
      
    </header>
  );
};
