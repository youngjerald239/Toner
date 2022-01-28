import Head from 'next/head'
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Toner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is a Dope Spotify clone build</h1>

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
      </div>

    </div>
  )
}
