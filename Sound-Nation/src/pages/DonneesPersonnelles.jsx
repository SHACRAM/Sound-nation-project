import { DisplayDonneespersonnelles } from "../components/DisplayDonneesPersonnelles";
import { Layout } from "../components/Layout";
import { useLocation } from "react-router-dom";

export const DonneesPersonnelles = () => {
  const location = useLocation();
  const data = location.state;


  
  return (
    <Layout>
      <DisplayDonneespersonnelles data={data} />
    </Layout>
  );
};
