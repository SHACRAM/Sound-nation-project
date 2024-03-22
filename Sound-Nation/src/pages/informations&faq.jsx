import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { DisplayInfosPratiques } from "../components/DisplayInfosPratiques";
import { Faq } from "../components/Faq";

export const InformationsFaq = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="p-10">
        <DisplayInfosPratiques />
        <Faq />
      </div>
      <nav>
        <Nav />
      </nav>
    </div>
  );
};
