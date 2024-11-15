import "leaflet/dist/leaflet.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { DisplayCgv } from "./components/DisplayCgv";
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
    path: "/InformationsFaq/Cgv",
    element: <DisplayCgv />,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
