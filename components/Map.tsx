import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const LocationMap = (): JSX.Element => {
  return (
    <MapContainer
      center={[51.343479, 12.387772]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '500px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}

export default LocationMap
