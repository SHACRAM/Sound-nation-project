import React from "react";
import { useState, useEffect } from "react";

// Composant qui affiche les checkbox pour filtrer les groupes par date, heure et scène
export const CheckBox = ({data, setDataFilter, dataFilter, setIsChecked, isChecked}) => {
  
  

  const handleCheck = (e) => {
    if(e.target.checked){
      setDataFilter([...dataFilter, e.target.value]);
      setIsChecked(false);
      
    } else {
      setDataFilter(dataFilter.filter((item)=> item !== e.target.value));
      if(dataFilter.length === 1){
        setIsChecked(true);
      }
    }
  };



  return (<div className="flex flex-col">
    {data.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
        <input type="checkbox" id={item} name={item} value={item} onChange={handleCheck}/>
        <label htmlFor={item}>{item}</label>
      </div>
    ))}

  </div>)
};
