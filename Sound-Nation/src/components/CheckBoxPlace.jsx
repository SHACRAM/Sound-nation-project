import React from "react";

export const CheckBoxPlace = ({ checkBox, handleChange }) => {
  return (
    <div className="flex gap-3 ">
       <img src={'http://localhost:1337'+checkBox.attributes.logo.data.attributes.url} alt={checkBox.attributes.logo.data.attributes.alternativeText} className="w-7 h-7"/>
      <label htmlFor="checkBox" className="text-white text-xl flex gap-2 items-center">
        {checkBox.attributes.nom}
      </label>
      <input
        type="checkbox"
        id="checkBox"
        onChange={() => handleChange(checkBox)}
      />
    </div>
  );
};
