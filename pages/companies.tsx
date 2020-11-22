import faker from 'faker/locale/de'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

import CompanyCardList from '../components/CompanyCardList'
import { Company } from '../models/Company.model'

const LocationMap = dynamic(() => import('../components/Map'), {
  ssr: false,
})

export default function CompaniesPage(): JSX.Element {
  const [companies, setCompanies] = useState<Company[]>([])

  useEffect(() => {
    setCompanies(
      Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        name: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
        department: `${faker.commerce.department()}`,
      }))
    )
  }, [])

  return (
    <div>
      <div className="w-full h-96 p-4">
        <LocationMap companies={companies} />
      </div>
      <CompanyCardList companies={companies} />
    </div>
  )
}
