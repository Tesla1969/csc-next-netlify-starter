import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crystal Shine Cleaning Service Newtown Connecticut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Crystal Shine Cleaning Service" />
        <p className="description">
          Serving Greater Newtown, Danbury, Brookfield, Redding and Ridgefield areas.
        </p>
      </main>

      <Footer />
    </div>
  )
}
