import { DisplayInfosPratiques } from "../components/DisplayInfosPratiques";
import { Faq } from "../components/Faq";
import { Header } from "../components/Header";
import { DisplayInfoLegale } from "../components/DisplayInfoLegale";

export const InformationsFaq = () => {
  return (
    <div>
        <Header />
      <div className="p-7">
        <DisplayInfosPratiques />
        <Faq />
        <DisplayInfoLegale/>
      </div>
    </div>
  );
};
