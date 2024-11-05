import { DisplayInfosPratiques } from "../components/DisplayInfosPratiques";
import { Faq } from "../components/Faq";
import { Header } from "../components/Header";
// import { Nav } from "../components/Nav";

export const InformationsFaq = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="p-10">
        <Faq />
        <DisplayInfosPratiques />
      </div>
      {/* <nav>
        <Nav />
      </nav> */}
    </div>
  );
};
