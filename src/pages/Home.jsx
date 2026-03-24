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

      {/* 🔥 HERO (full width — no container) */}
      <Hero />

      {/* 🚀 PAGE CONTENT */}
      <motion.main   // ✅ better semantic than div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* 🏍 BIKE PREVIEW */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BikePreview />
        </motion.section>

        {/* 📖 ABOUT PREVIEW */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AboutPreview />
        </motion.section>

        {/* 🤝 SPONSORS */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <SponsorsCarousel />
        </motion.section>

      </motion.main>

      <Footer />
    </>
  )
}