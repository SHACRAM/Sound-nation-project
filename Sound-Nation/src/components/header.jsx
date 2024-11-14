import { ReseauxSociaux } from "./ReseauxSociaux";
import { NavLink } from "react-router-dom";
import { NavBarMobile } from "./NavBarMobile";
import { NavBarDesktop } from "./NavBarDesktop";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Composant qui permet de gérer le header dont la navigation responsive
export const Header = ({userName}) => {
  const navigate = useNavigate();
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState('menu');
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [disconnectMesssage, setDisconnectMessage] = useState(''); 
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(userName));

  useEffect(() => {
      setIsAuthenticated(Boolean(userName));
  }, [userName]);



  const handleLogOut = async()=>{
    const response = await axios.get('http://localhost:3000/api/authentication/logOut', { withCredentials: true });
    if(response.data.status){
        setIsAuthenticated(false);
        setDisconnectMessage(response.data.message);
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



  return (
    <header className="bg-black flex flex-col">
      <div className="justify-end hidden sm:flex">
        {isAuthenticated ?
          <div className="flex items-center gap-[2em]">
            <div className="flex items-center gap-2">
              <img src="/public/images/User.png" alt="Logo utilisateur" className="w-5 h-5" />
              <NavLink className='text-white flex justify-center pb-2 pt-2 text-[1rem] hover:underline' to="">{userName}</NavLink>
            </div>
              <button className="text-[#008BFF] mr-3 hover:opacity-80" onClick={()=>handleLogOut()} >Se déconnecter</button>
            </div>
              : <NavLink className="text-white mt-2 mr-3" to="/Login">
              Se connecter
            </NavLink>}
        
      </div>
      <div className="flex justify-between sm:flex-col sm:items-center lg:flex-row">
        <a href="http://localhost:5173/">
          <img
            src="/images/logo.png"
            alt="Logo du festival Sound Nation"
            className="ml-2 mt-2 mb-4 hover:opacity-80 w-[6em] h-[5em]"
          />
        </a>
        <div className="sm:hidden">
          <NavBarMobile burgerClass={burgerClass} menuClass={menuClass} updateMenu={updateMenu} userName={userName} isAuthenticated={isAuthenticated} handleLogOut={handleLogOut}  />
        </div>
        <div className="hidden sm:flex">
          <NavBarDesktop/>
        </div>
      </div>
      <div className="mt-4 flex justify-center w-[100%]">
          <ReseauxSociaux />
      </div>
    </header>
  );
};
