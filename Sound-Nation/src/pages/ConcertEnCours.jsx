import React from "react";
import { Layout } from "../components/Layout";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { DisplayGroupeOnline } from "../components/DisplayGroupeOnline";

// Page qui affichent les détails des artistes dont le concert est en cours
export const ConcertEnCours = () => {
    const location = useLocation();
    const [concertEnCours, setConcertEnCours] = useState([]);
    const heureActuelle = new Date().getMinutes();
    const pourcentage = String(Math.floor((heureActuelle * 100)/60)) + "%";

    useEffect(() => {
        if (location.state?.groupeOnline) {
            setConcertEnCours(location.state.groupeOnline);
        }
    }, [location.state]);

    


    return (
        <Layout>
            <DisplayGroupeOnline concertEnCours={concertEnCours} pourcentage={pourcentage}/>
        </Layout>
    );
}