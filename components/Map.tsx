import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Company } from '../models/Company.model'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LocationMap = ({ companies }: { companies: Company[] }): JSX.Element => {
  const getLatLngs = (): LatLngExpression[] => {
    const latlngs: { lat: number; lng: number }[] = [
      { lat: 51.32917161, lng: 12.36688082 },
      { lat: 51.32416117, lng: 12.42093381 },
      { lat: 51.36104217, lng: 12.44289182 },
      { lat: 51.35344974, lng: 12.31181237 },
      { lat: 51.36119519, lng: 12.44775928 },
      { lat: 51.37921265, lng: 12.34290048 },
      { lat: 51.32814255, lng: 12.42693969 },
      { lat: 51.37377402, lng: 12.32973346 },
      { lat: 51.34286783, lng: 12.31022446 },
      { lat: 51.33326202, lng: 12.32443007 },
    ]
    return latlngs.map((ln) => [ln.lat, ln.lng])
  }

  return (
    <MapContainer
      center={[51.356905, 12.387672]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {getLatLngs().map((pos, i) => (
        <Marker key={companies[i].id} position={pos}>
          <Popup>Ein simpler Test</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default LocationMap
