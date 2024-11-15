import { Layout } from "../components/Layout";
import React from "react";
import { HomePage } from "../components/HomePage";
import axios from "axios";
axios.defaults.withCredentials = true;

export const Accueil = () => {
  

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};
