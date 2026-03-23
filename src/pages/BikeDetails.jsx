import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function BikeDetails(){

  const { id } = useParams()

  return(
    <>
      <Navbar/>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "120px 40px",
          minHeight: "100vh",
          background: "radial-gradient(circle at center, #111 0%, #000 100%)",
          color: "white"
        }}
      >

        {/* 🔥 BIKE TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          {id.toUpperCase()} MODEL
        </motion.h1>

        {/* 🎥 BIKE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img
            src={`/bikes/${id}.jpg`}
            alt={id}
            style={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: "12px",
              boxShadow: "0 0 40px rgba(0,191,255,0.2)"
            }}
          />
        </motion.div>

        {/* ⚙️ SPECS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
            gap: "20px"
          }}
        >

          {[
            { label: "Top Speed", value: "180 km/h" },
            { label: "Engine", value: "250cc" },
            { label: "Weight", value: "140 kg" },
            { label: "Acceleration", value: "0-100 in 3.5s" }
          ].map((spec, i) => (
            <div
              key={i}
              style={{
                background: "#111",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e)=>{
                e.currentTarget.style.transform = "translateY(-8px)"
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0,191,255,0.3)"
              }}
              onMouseLeave={(e)=>{
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <h3>{spec.label}</h3>
              <p style={{ opacity: "0.8" }}>{spec.value}</p>
            </div>
          ))}

        </motion.div>

        {/* 👥 TEAM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: "60px",
            textAlign: "center"
          }}
        >

          <h2>Team Behind the Build</h2>

          <p style={{
            maxWidth: "600px",
            margin: "20px auto",
            opacity: "0.8"
          }}>
            Mechanical, Design, Electronics, and Racing teams collaborated
            to engineer this high-performance machine with precision and innovation.
          </p>

        </motion.div>

      </motion.section>

      <Footer/>
    </>
  )
}