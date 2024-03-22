import { Header } from "../components/Header";
import { DisplayReseaux } from "../components/DisplayReseaux";
import { Nav } from "../components/Nav";

export const ReseauxSociaux = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="p-10 bg-backGroundSite">
        <DisplayReseaux />
      </div>
      <nav>
        <Nav />
      </nav>
    </div>
  );
};
