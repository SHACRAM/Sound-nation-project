import { Header } from "../components/Header";
import { DisplayCookies } from "../components/informations/DisplayCookies";
import { useLocation } from "react-router-dom";
// Page qui affiche les cookies
export const Cookies = () => {
  const location = useLocation();
  const data = location.state;



  return (
    <div>
        <Header />
        <div>
          <DisplayCookies data={data} />
        </div>
    </div>
  );
};
