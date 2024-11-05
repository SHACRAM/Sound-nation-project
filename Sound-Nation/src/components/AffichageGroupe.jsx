import React, { useContext } from "react";
import { VignetteGroupe } from "./VignetteGroupe";


export const AffichageGroupe = ({ data }) => {
  

  
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((groupe, index)=>{
        return <VignetteGroupe groupe={groupe} key={index} />
      })}
    </div>
  );
}

