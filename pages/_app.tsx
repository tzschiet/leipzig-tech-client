import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import 'leaflet/dist/leaflet.css'
import Layout from '../components/Layout'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
