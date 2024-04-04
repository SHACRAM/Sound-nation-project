import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

import { useRef, useState } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

export const MyMap = ({
  checkBoxChecked,
  concertParScene,
  activateFullScreen,
  desactiveFullScreen,
  isFullScreen,
}) => {
  const mapRef = useRef(null);
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  }

  const positions = checkBoxChecked.map(
    (checkBox) => checkBox.attributes.marker
  );
  const requestLocation = () => {
    mapRef.current.locate();
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center ">
        <p className="text-white text-[0.8rem] mb-[1em]">
          (Pour plus d'informations, cliquer sur le ou les marqueurs)
        </p>
      </div>
      <div>
        <div className="bg-white rounded-t-lg p-3 flex flex-wrap justify-center gap-3">
          <button
            className="border-[2px] border-black rounded-lg p-1 h-10 shadow-xl text-sm flex gap-2 active:opacity-30 items-center "
            onClick={activateFullScreen}
          >
            Agrandir la carte
            <img
              src="./public/images/fullScreen.png"
              alt="Bouton pour agrandir la carte"
              className="w-[1.5em]"
            />
          </button>

          <button
            className="text-black flex  justify-center border-[2px] border-black rounded-lg p-1 h-10  text-sm active:opacity-80 items-center shadow-xl"
            onClick={requestLocation}
          >
            Activer la géolocalisation
          </button>
          {isFullScreen ? (
            <button onClick={desactiveFullScreen}>
              <img
                className="w-[3em] border-[2px] border-black rounded-lg p-1 h-10 shadow-xl text-sm flex gap-2 active:opacity-30 items-center"
                src="./public/images/fermer.png"
                alt="bouton permettant de fermer la carte en plein écran"
              />
            </button>
          ) : null}
        </div>
        <MapContainer
          center={[48.75402157177851, 2.464285767456256]}
          zoom={16}
          className=" w-[100%] h-[100vh] rounded-b-lg z-[20]"
          id="map"
          ref={mapRef}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {positions.map((position) =>
            position.map((marker, index) => (
              <Marker position={marker.position}>
                <Circle
                  key={index}
                  center={marker.position}
                  radius={marker.radius}
                  color={marker.color}
                  stroke={marker.stroke}
                >
                  {marker.isAScene ? (
                    <Popup>
                      <div className="flex flex-col items-center gap-2 w-[15em] ">
                        {concertParScene.hasOwnProperty(marker.nom) ? (
                          <div className="flex flex-col items-center">
                            {console.log("l")}
                            <img
                              src={
                                "http://localhost:1337" +
                                concertParScene[marker.nom][0].attributes.Image
                                  .data.attributes.url
                              }
                              alt={
                                concertParScene[marker.nom][0].attributes.Image
                                  .data.attributes.alternativeText
                              }
                              className="w-[10em] rounded-xl"
                            />
                            <p className="underline text-lg">
                              {concertParScene[marker.nom][0].attributes.nom}
                            </p>
                          </div>
                        ) : (
                          <img
                            src="./public/images/offLine.jpg"
                            alt="Pas de concert en cours"
                            className="w-[10em] rounded-xl"
                          />
                        )}

                        <div className="text-lg flex flex-wrap bg-[#023E33] text-white p-3 rounded-xl">
                          {"Scène " + marker.nom}
                        </div>
                        <p className="text-black border-[3px] border-black p-2">
                          {marker.info}
                        </p>
                      </div>
                    </Popup>
                  ) : (
                    <Popup>
                      <div className="flex flex-col items-center gap-2 w-[15em] ">
                        <img
                          src={marker.image}
                          alt={marker.alt}
                          className="w-[10em] rounded-xl"
                        />
                        <div className="text-lg flex flex-wrap bg-[#023E33] text-white p-3 rounded-xl">
                          {marker.nom}
                        </div>
                        <p className="text-black border-[3px] border-black p-2">
                          {marker.info}
                        </p>
                      </div>
                    </Popup>
                  )}
                </Circle>
              </Marker>
            ))
          )}
          <LocationMarker />
        </MapContainer>
      </div>
    </div>
  );
};
