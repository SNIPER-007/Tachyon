import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BikePreview from "../components/BikePreview"
import AboutPreview from "../components/AboutPreview"
import SponsorsCarousel from "../components/SponsorsCarousel"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 🔥 HERO (instant load, no delay) */}
      <Hero />

      {/* 🚀 PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* 🏍 BIKE PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BikePreview />
        </motion.div>

        {/* 📖 ABOUT PREVIEW */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AboutPreview />
        </motion.div>

        {/* 🤝 SPONSORS */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <SponsorsCarousel />
        </motion.div>

      </motion.div>

      <Footer />
    </>
  )
}