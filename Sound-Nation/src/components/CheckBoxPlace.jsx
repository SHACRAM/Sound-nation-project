import React from "react";

export const CheckBoxPlace = ({ checkBox, handleChange }) => {
  return (
    <div className="flex gap-3 ">
      <label htmlFor="checkBox" className="text-white text-xl">
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
