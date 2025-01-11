import "leaflet/dist/leaflet.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { DisplayCgu } from "./components/DisplayCgu";
import { Accueil } from "./pages/Accueil";
import { Carte } from "./pages/Carte";
import { Concert } from "./pages/Concert";
import { Cookies } from "./pages/Cookies";
import { DonneesPersonnelles } from "./pages/DonneesPersonnelles";
import { EnSavoirPlus } from "./pages/EnSavoirPlus";
import { InformationsFaq } from "./pages/InformationsFaq";
import { Partenaire } from "./pages/Partenaire";
import { Programmation } from "./pages/Programmation";
import { ConcertEnCours } from "./pages/ConcertEnCours";
import { Login } from "./pages/Login";
import { Inscription } from "./pages/Inscription";
import { MyAccount } from "./pages/MyAccount";
import { ModifyMyInformation } from "./pages/ModifyMyInformation";
import { ModifyMyPassword } from "./pages/ModifyMyPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
  },
  {
    path: "/Carte",
    element: <Carte />,
  },
  {
    path: "/InformationsFaq",
    element: <InformationsFaq />,
  },
  {
    path: "/EnSavoirPlus/:id",
    element: <EnSavoirPlus />,
  },
  {
    path: "/InformationsFaq/DonneesPersonnelles",
    element: <DonneesPersonnelles />,
  },
  {
    path: "/InformationsFaq/Cookies",
    element: <Cookies />,
  },
  {
    path: "/InformationsFaq/Cgu",
    element: <DisplayCgu />,
  },
  {
    path: "/Programmation",
    element: <Programmation />,
  },
  {
    path: "/Partenaire",
    element: <Partenaire />,
  },
  {
    path: "/Concert",
    element: <Concert />,
  },
  {
    path: "/ConcertEnCours",
    element: <ConcertEnCours />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Inscription",
    element: <Inscription />,
  },
  {
    path: "/MyAccount",
    element: <MyAccount />,
  },
  {
    path: "/ModifyMyInformation/:email",
    element: <ModifyMyInformation />,
  },
  {
    path: "/ModifyMyPassword/:email",
    element: <ModifyMyPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
