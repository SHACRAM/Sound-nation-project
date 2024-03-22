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

export const MyMap = ({ checkBoxChecked }) => {
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
        <button
          className="text-white flex bg-[#023E33] justify-center rounded-[50px] p-4 mb-6 text-sm active:opacity-80"
          onClick={requestLocation}
        >
          Activer la géolocalisation
        </button>
      </div>

      <MapContainer
        center={[48.7531743973979, 2.4631967270363555]}
        zoom={16}
        className="h-[400px] w-[100%] rounded-lg  z-[20]"
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
              </Circle>
            </Marker>
          ))
        )}
        <LocationMarker />
      </MapContainer>
    </div>
  );
};
