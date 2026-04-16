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

      {/* 🔥 HERO */}
      <Hero />

      {/* 🚀 MAIN */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="homeMain"
      >

        {/* 🏍 BIKES */}
        <motion.section
          className="sectionSpacing"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <BikePreview />
        </motion.section>

        {/* 📖 ABOUT */}
        <motion.section
          className="sectionSpacing"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <AboutPreview />
        </motion.section>

        {/* 🤝 SPONSORS */}
        <motion.section
          className="sectionSpacing lastSection"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SponsorsCarousel />
        </motion.section>

      </motion.main>

      <Footer />

      <style>
        {`

        .homeMain {
          position: relative;
          z-index: 1;
        }

        /* 🔥 GLOBAL SECTION SPACING */
        .sectionSpacing {
          margin-top: 120px;
        }

        /* LAST SECTION → more breathing room before footer */
        .lastSection {
          margin-bottom: 40px;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .sectionSpacing {
            margin-top: 80px;
          }

          .lastSection {
            margin-bottom: 20px;
          }

        }

        `}
      </style>
    </>
  )
}