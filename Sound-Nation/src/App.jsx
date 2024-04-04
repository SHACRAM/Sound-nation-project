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
import { InformationsFaq } from "./pages/Informations&faq";
import { Partenaire } from "./pages/Partenaire";
import { Programmation } from "./pages/Programmation";

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
    path: "/informations&faq",
    element: <InformationsFaq />,
  },
  {
    path: "/EnSavoirPlus/:id/:nom/:bio/:alt/:image",
    element: <EnSavoirPlus />,
  },
  {
    path: "/informations&faq/DonneesPersonnelles",
    element: <DonneesPersonnelles />,
  },
  {
    path: "/informations&faq/Cookies",
    element: <Cookies />,
  },
  {
    path: "/informations&faq/Cgv",
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
