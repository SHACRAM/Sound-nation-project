import React from "react";

export const CheckBoxTest = ({
  label,
  id,
  handleCheck,
  nomCategorie,
  checked,
}) => {
  const handleChange = () => {
    handleCheck(nomCategorie, id);
  };
  return (
    <div className="flex gap-10 justify-between ">
      <label htmlFor={id} className="text-[1.2rem]">
        {label}
      </label>
      <input
        type="checkbox"
        id={id}
        onChange={handleChange}
        checked={checked}
      />
    </div>
  );
};
