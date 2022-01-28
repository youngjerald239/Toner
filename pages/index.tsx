import Head from 'next/head'
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen overflow-hidden">
      <Head>
        <title>Toner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
      </main>

      <div>
        {/* Player */}
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>

    </div>
  )
}
