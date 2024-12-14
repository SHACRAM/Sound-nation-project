import React, { useContext, useState } from "react";
import { VignetteGroupe } from "../VignetteGroupe";
import axios from "axios";

export const AffichageGroupe = ({ data }) => {

  
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((groupe, index)=>{
        return <VignetteGroupe groupe={groupe} key={index} />
      })}
    </div>
  );
}

