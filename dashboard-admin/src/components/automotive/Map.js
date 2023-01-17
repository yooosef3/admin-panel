import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import React from "react";
import styled from "styled-components";

const Mp = styled.div`
`
const Map = () => {
  return (
    <Mp>
      <MapContainer
        center={[51.505, -0.09]}
        style={{ height: "300px"}}
        zoom={20}
        scrollWheelZoom={true}
      >
        <TileLayer
        
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Mp>
  );
};

export default Map;
