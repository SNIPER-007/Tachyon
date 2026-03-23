import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function AboutPreview(){

  return(

    <section style={{
      padding:"120px 40px",
      background:"radial-gradient(circle at center, #111 0%, #000 100%)",
      color:"white",
      textAlign:"center"
    }}>

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Tachyon
      </motion.h2>

      {/* 🧠 CONTENT BOX */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          maxWidth:"750px",
          margin:"40px auto",
          background:"linear-gradient(145deg, #0a0a0a, #050505)",
          padding:"30px",
          borderRadius:"14px",
          border:"1px solid rgba(255,255,255,0.1)"
        }}
      >

        <p style={{
          fontSize:"18px",
          lineHeight:"1.6",
          opacity:"0.85"
        }}>
          Tachyon is a student-driven engineering team dedicated to designing
          and building high-performance racing motorcycles. We combine innovation,
          precision engineering, and cutting-edge technology to push the limits
          of speed and performance.
        </p>

      </motion.div>

      {/* 🔥 CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/about">
          <button
            className="aboutBtn"

            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left - rect.width / 2
              const y = e.clientY - rect.top - rect.height / 2

              e.currentTarget.style.transform =
                `translate(${x * 0.2}px, ${y * 0.2}px)`
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0,0)"
            }}
          >
            Learn More
          </button>
        </Link>
      </motion.div>

      {/* 🔥 STYLES */}
      <style>
        {`
        .aboutBtn {
          margin-top: 20px;
          padding: 12px 30px;
          background: linear-gradient(45deg, #00bfff, #007bff);
          border: none;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .aboutBtn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(0,191,255,0.6);
        }
        `}
      </style>

    </section>

  )

}