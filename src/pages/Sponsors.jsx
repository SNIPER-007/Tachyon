import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Sponsors() {

  const sponsors = [
    { name: "ScanEra Digital", img: "/sponsors/scanera.png" },
    { name: "SolidWorks", img: "/sponsors/solidworks.jpg" },
    { name: "The Riders Syndicate", img: "/sponsors/riders.png" }
  ]

  return (
    <>
      <Navbar />

      <motion.section
        className="page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          minHeight: "100vh",
          padding: "120px 0 100px",
          background: "radial-gradient(circle at center, #111 0%, #000 100%)",
          color: "white"
        }}
      >

        <div className="container" style={{ textAlign: "center" }}>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "20px" }}
          >
            Our Sponsors
          </motion.h1>

          {/* 🔥 INNER WRAPPER (KEY FIX) */}
          <div style={{ padding: "0 20px" }}>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginTop: "60px"
            }}>

              {sponsors.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}

                  style={{
                    background: "linear-gradient(145deg, #0a0a0a, #050505)",
                    padding: "30px",
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "0.3s",
                    cursor: "pointer"
                  }}

                  onMouseEnter={(e)=>{
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.03)"
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(0,191,255,0.4)"
                  }}

                  onMouseLeave={(e)=>{
                    e.currentTarget.style.transform = "translateY(0) scale(1)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >

                  <img
                    src={s.img}
                    alt={s.name}
                    style={{
                      height: "90px",
                      objectFit: "contain",
                      marginBottom: "20px",
                      filter: "brightness(0.9)"
                    }}
                  />

                  <h3 style={{
                    marginTop: "10px",
                    fontWeight: "500"
                  }}>
                    {s.name}
                  </h3>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </motion.section>

      <Footer />
    </>
  )
}