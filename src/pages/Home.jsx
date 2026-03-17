import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BikePreview from "../components/BikePreview"
import AboutPreview from "../components/AboutPreview"
import SponsorsCarousel from "../components/SponsorsCarousel"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BikePreview />
      <AboutPreview />
      <SponsorsCarousel />
      <Footer />
    </>
  )
}