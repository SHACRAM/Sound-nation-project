import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";


// Composant qui gère l'affichage de la carte et de ses marqueurs
import { useEffect, useRef, useState } from "react";
import {Circle,MapContainer,Marker,Popup, TileLayer,useMapEvents,} from "react-leaflet";
import { NavLink } from "react-router-dom";

export const MyMap = ({activateFullScreen,desactiveFullScreen,isFullScreen,dataMap,checkBoxToDisplay, dataGroupe}) => {
  const [groupeConcertActuel, setGroupeConcertActuel] = useState([]);
  const options = {weekday : 'long', day: 'numeric', month: 'long'};
  const actualDate =  new Date();
  const actualHour = actualDate.getHours();
  const formattedDate = actualDate.toLocaleDateString('fr-FR', options);
  const mapRef = useRef(null);


  
  



  useEffect(() => {
    const tempGroupe = [];
    if(dataGroupe){
    dataGroupe.forEach((groupe) => {
      const groupeDate = groupe.groupe_date;
      const lowerCaseDate = groupeDate.toLowerCase();
      if (lowerCaseDate === formattedDate && groupe.groupe_hour === actualHour) {
        tempGroupe.push(groupe);
      }
    });
  }
    setGroupeConcertActuel(tempGroupe);
  }, [dataGroupe, formattedDate, actualHour]);



  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    )
  }


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
              src="/images/fullScreen.png"
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
                src="/images/fermer.png"
                alt="bouton permettant de fermer la carte en plein écran"
              />
            </button>
          ) : null}
        </div>
        <div className="w-[100%] h-[100vh]">
        <MapContainer center={[48.753924135730976, 2.4644180150457737]} zoom={16} scrollWheelZoom={false} className="w-[100%] h-[100%]" ref={mapRef} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {checkBoxToDisplay.map((place, index) => (
            <div key={index}>
                <Marker position={[parseFloat(place.place_latitude),parseFloat(place.place_longitude)]}>
                   <Popup>
                    <div className="w-[13em] flex flex-col items-center gap-3">
                      <h2 className="text-[1.5rem]">
                        {place.place_name}
                      </h2>
                      <img  className="rounded" src={`${import.meta.env.VITE_API_URL}/${place.place_image_path}`} alt={place.place_image_alt} />
                      <p className="text-[1rem]">{place.place_info_popup}</p>
                      {place.place_category === "Scène" ?
                      <div>
                        {groupeConcertActuel.length > 0 ? <div className="flex  gap-2">
                          <NavLink className="border border-black rounded-md p-2" to="/ConcertEnCours" state={{ groupeOnline: groupeConcertActuel }}>Concerts en cours</NavLink>
                          <img className="animate-pulse w-[3em]" src="public/Images/live.png" alt="Logo de live e cours" />
                        </div> 
                        : <div className="flex flex-col  gap-2">
                          <p className="text-[1rem]">Pas de concert en cours</p>
                          <NavLink to={"/Programmation"} className="border border-black rounded-md p-2 flex justify-center">Programmation</NavLink>
                        </div>}
                      </div>
                       :<div></div>}
                    </div>
                  </Popup> 
                  
                </Marker>
                <Circle center={[parseFloat(place.place_latitude),parseFloat(place.place_longitude)]} pathOptions={ {color:`${place.place_marker_color}`, fillColor:`${place.place_marker_color}`}} radius={place.place_marker_diametre} stroke={true}/>
            </div>
          ))}
          <LocationMarker />
        </MapContainer>
        </div>
      </div>
    </div>
  );
};
