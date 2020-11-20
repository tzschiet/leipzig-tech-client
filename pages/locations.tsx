import dynamic from 'next/dynamic'
import React from 'react'

const LocationMap = dynamic(() => import('../components/Map'), {
  ssr: false,
})

export default function Location(): JSX.Element {
  return (
    <div className="flex flex-col">
      <LocationMap />
    </div>
  )
}
