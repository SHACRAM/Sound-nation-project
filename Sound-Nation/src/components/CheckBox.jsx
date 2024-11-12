import React from "react";
import { useState, useEffect } from "react";

// Composant qui affiche les checkbox pour filtrer les groupes par date, heure et scène
export const CheckBox = ({data, setDataFilter, dataFilter, setIsChecked, isChecked}) => {
  
  

  const handleCheck = (e) => {
    if (e.target.checked) {
      const newFilter = [...dataFilter, e.target.value];
      setDataFilter(newFilter);
      setIsChecked(false);
      localStorage.setItem("dataFilter", JSON.stringify(newFilter));
    } else {
      const newFilter = dataFilter.filter((item) => item !== e.target.value);
      setDataFilter(newFilter);
      if (newFilter.length === 0) {
        setIsChecked(true);
      }
      localStorage.setItem("dataFilter", JSON.stringify(newFilter));
    }
  };



  return (<div className="flex flex-col">
    {data.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
        <input type="checkbox" id={item} name={item} value={item} onChange={handleCheck} checked={dataFilter.includes(item)}/>
        <label htmlFor={item}>{item}</label>
      </div>
    ))}

  </div>)
};
