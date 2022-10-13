import Head from "next/head"
import Navbar from "../components/Navbar"
import FeaturePost from "../components/FeaturePost"

export default function Home() {


  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 h-screen text-white">
      <Navbar />
      <div className="container mx-auto">
        <FeaturePost />
      </div>
    </div>
  )
}

