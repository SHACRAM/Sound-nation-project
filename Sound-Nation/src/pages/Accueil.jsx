import { Layout } from "../components/Layout";
import React from "react";
import { HomePage } from "../components/HomePage";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

export const Accueil = () => {
  const location = useLocation();
  const [userName, setUserName]= useState(location.state?.userName || null)
  

  return (
    <Layout userName={userName} >
      <HomePage />
    </Layout>
  );
};
