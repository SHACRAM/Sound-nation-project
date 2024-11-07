import React from "react";
import { useState, useEffect } from "react"
// Composant qui permet de créer les checkbox pour filtrer l'affichage des marqueurs sur la carte
export const FiltrageMap = ({ dataMap, uniqueCategories, setCheckBoxToDisplay}) => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    const defaultCategory = ["Scène", "Entrée"];
    setSelectedCategory(defaultCategory);
    setCheckBoxToDisplay(dataMap.filter((item) => defaultCategory.includes(item.place_category)));
  },[dataMap, setCheckBoxToDisplay]);
  

  const handleCheckBoxChange = (e) => {
    const updatedCategories = e.target.checked
      ? [...selectedCategory, e.target.id]
      : selectedCategory.filter((item) => item !== e.target.id);

    setSelectedCategory(updatedCategories);
    
    setCheckBoxToDisplay(dataMap.filter((item) => updatedCategories.includes(item.place_category)));
  };



  return (
    <div className="flex flex-col mt-6 mb-[3em] bg-black gap-5 ml-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[3em]">
      {uniqueCategories.map((category, index) => ( 
        <div key={index} className="flex items-center gap-3">
            <img className="w-[1.5em]" src={`http://localhost:3000/${category.logo}`} alt={category.alt} />
            <div className="flex gap-2 items-center"> 
              <input type="checkbox" id={category.cat} onChange={handleCheckBoxChange} checked={selectedCategory.includes(category.cat)}/>
              <label className="text-white" htmlFor={category.cat}>{category.cat}</label>
              <div className="w-8 h-3" style={{backgroundColor: category.color}}></div>
            </div>
        </div>
      ))}
    </div>
  );
};
