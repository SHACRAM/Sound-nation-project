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
    <div className="flex  ">
      <label htmlFor={id} className="text-[1.2rem] w-[9em]">
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
