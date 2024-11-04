import React from "react";

export const ProgScene = ({ nom, jour, heure, image, alt }) => {
  return (
    <div>
      <div className="border">
        <img src={image} alt={alt} className="w-[15em]" />
        <div className="p-3 flex flex-col gap-3">
          <div>
            <p className="text-white flex gap-3">
              <img
                src="/images/calendrier.png"
                alt="logo calendrier"
                className="w-[1.5em]"
              />
              {jour}
            </p>
          </div>
          <div>
            <p className="text-white flex gap-3">
              <img
                src="/images/horloge.png"
                alt="logo horloge"
                className="w-[1.5em]"
              />
              {heure}
            </p>
          </div>
          <div>
            <p className="text-white text-2xl mt-2">{nom}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
