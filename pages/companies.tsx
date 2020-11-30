import 'simplebar/dist/simplebar.min.css'

import faker from 'faker/locale/de'
import { LatLngExpression } from 'leaflet'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

import CompanyCardList from '../components/CompanyCardList'
import { Company } from '../models/Company.model'

// query to get latlng from address, could be done from backend?
// https://nominatim.openstreetmap.org/search?format=json&q=ADDRESS

const LocationMap = dynamic(() => import('../components/Map'), {
  ssr: false,
})

function getRandomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function getRandomLocation(): LatLngExpression {
  // center of Leipzig
  const middlePoint = { lat: 51.33962, lng: 12.37129 }
  const diff = 0.05
  return {
    lat: getRandomBetween(middlePoint.lat - diff, middlePoint.lat + diff),
    lng: getRandomBetween(middlePoint.lng - diff, middlePoint.lng + diff),
  }
}

export default function CompaniesPage(): JSX.Element {
  const [companies, setCompanies] = useState<Company[]>([])
  const [selected, setSelected] = useState<string>('')

  useEffect(() => {
    setCompanies(
      Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        name: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
        department: `${faker.commerce.department()}`,
        latlng: getRandomLocation(),
      }))
    )
  }, [])

  const handleItemClick = (id: string) => {
    setSelected(id)
  }

  return (
    <div className="container h-content flex">
      <div className="w-full h-full overflow-auto">
        <CompanyCardList companies={companies} onItemClick={handleItemClick} />
      </div>
      <div className="w-full h-full px-4 custom-scroll">
        <LocationMap companies={companies} selected={selected} />
      </div>
    </div>
  )
}
