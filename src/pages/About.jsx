import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function About(){

  return(
    <>
      <Navbar/>

      <motion.section
        className="page" /* 🔥 FIX NAVBAR OVERLAP */
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          minHeight: "100vh",
          background: "radial-gradient(circle at center, #111 0%, #000 100%)",
          color: "white"
        }}
      >

        {/* 🔥 CONTAINER */}
        <div className="container" style={{ textAlign: "center" }}>

          {/* 🔥 TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "60px",
              letterSpacing: "2px",
              marginBottom: "20px" /* 🔥 better spacing */
            }}
          >
            About Tachyon
          </motion.h1>

          {/* 🧠 DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              maxWidth: "750px",
              margin: "30px auto",
              fontSize: "18px",
              lineHeight: "1.6",
              opacity: "0.85"
            }}
          >
            Tachyon is a student-driven engineering council focused on designing
            and building high-performance motorcycles. Our team integrates
            mechanical engineering, electronics, and cutting-edge racing
            technology to create innovative and competitive machines.
          </motion.p>

          {/* 🔥 FEATURES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              marginTop: "60px",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap"
            }}
          >

            {[
              { title: "Innovation", desc: "Constantly pushing engineering boundaries" },
              { title: "Performance", desc: "Built for speed and precision" },
              { title: "Teamwork", desc: "Driven by collaboration and passion" }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#111",
                  padding: "25px",
                  borderRadius: "12px",
                  width: "250px",
                  transition: "0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e)=> {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0,191,255,0.3)"
                }}
                onMouseLeave={(e)=> {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", opacity: "0.8" }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </motion.div>

        </div>

      </motion.section>

      <Footer/>
    </>
  )
}