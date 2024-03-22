import React from "react";

export const CountDown = () => {
  const currentDate = new Date();
  const targetDate = new Date(2024, 6, 22, 19, 0, 0);
  let difference = targetDate - currentDate;
  const day = Math.floor(difference / (1000 * 60 * 60 * 24));
  difference -= day * (1000 * 60 * 60 * 24);
  const hour = Math.floor(difference / (1000 * 60 * 60));
  difference -= hour * (1000 * 60 * 60);
  const min = Math.floor(difference / (1000 * 60));
  difference -= min * (1000 * 60);
  const scd = Math.floor(difference / 1000);

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <div className="flex flex-col  items-center">
        <p className="text-[#71A984] text-3xl mb-2">{day}</p>
        <p className="text-white">jours</p>
      </div>
      <p className="text-white text-xl">:</p>
      <div className="flex flex-col  text-[#71A984] items-center">
        <p className="text-[#71A984] text-3xl mb-2">{hour}</p>
        <p className="text-white">heures</p>
      </div>
      <p className="text-white text-xl">:</p>
      <div className="flex flex-col  text-[#71A984] items-center">
        <p className="text-[#71A984] text-3xl mb-2">{min}</p>
        <p className="text-white">minutes</p>
      </div>
      <p className="text-white text-xl">:</p>
      <div className="flex flex-col  text-[#71A984] items-center">
        <p className="text-[#71A984] text-3xl mb-2">{scd}</p>
        <p className="text-white">secondes</p>
      </div>
    </div>
  );
};
