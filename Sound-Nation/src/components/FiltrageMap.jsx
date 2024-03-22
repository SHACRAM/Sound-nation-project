import React from "react";
import { CheckBoxPlace } from "../components/CheckBoxPlace";

export const FiltrageMap = ({ data, checkBoxChecked, setCheckBoxChecked }) => {
  const handleChange = (checkBox) => {
    const isChecked = checkBoxChecked.includes(checkBox);
    if (!isChecked) {
      setCheckBoxChecked([...checkBoxChecked, checkBox]);
    } else {
      const newCheckBoxChecked = checkBoxChecked.filter(
        (item) => item !== checkBox
      );
      setCheckBoxChecked(newCheckBoxChecked);
    }
  };

  return (
    <div className="flex flex-wrap gap-[3em] mt-[3em] mb-[3em] justify-center">
      {data.map((checkBox, index) => (
        <div key={index}>
          <CheckBoxPlace
            checkBox={checkBox}
            index={index}
            handleChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
};
