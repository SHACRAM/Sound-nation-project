import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { DisplayDonneespersonnelles } from "../components/DisplayDonneesPersonnelles";

export const DonneesPersonnelles = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <DisplayDonneespersonnelles />
      </section>
      <nav>
        <Nav />
      </nav>
    </div>
  );
};
