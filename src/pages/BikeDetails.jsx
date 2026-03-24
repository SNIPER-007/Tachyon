import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BikeDetails(){

  const { id } = useParams()

  /* 🔥 COUNT UP ANIMATION */
  function CountUp({ value }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const end = parseInt(value)

      if (isNaN(end)) return

      const duration = 1000
      const increment = end / (duration / 16)

      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }, [value])

    return <span>{count}</span>
  }

  /* 🔥 BIKE DATA */
  const bikes = {
    x1: {
      name: "Tachyon X1",
      image: "/bikes/x1.jpg",
      desc: "Lightweight track-focused machine built for agility and control.",
      specs: [
        { label: "Engine", value: "250", unit: "cc", icon: "⚙️" },
        { label: "Power", value: "32", unit: "BHP", icon: "⚡" },
        { label: "Torque", value: "24", unit: "Nm", icon: "🔩" },
        { label: "Top Speed", value: "180", unit: "km/h", icon: "🏎️" },
        { label: "Weight", value: "140", unit: "kg", icon: "⚖️" },
        { label: "Chassis", value: "Aluminium", unit: "", icon: "🧱" }
      ]
    },

    x2: {
      name: "Tachyon X2",
      image: "/bikes/x2.jpeg",
      desc: "Advanced aerodynamic design with enhanced speed and stability.",
      specs: [
        { label: "Engine", value: "300", unit: "cc", icon: "⚙️" },
        { label: "Power", value: "40", unit: "BHP", icon: "⚡" },
        { label: "Torque", value: "28", unit: "Nm", icon: "🔩" },
        { label: "Top Speed", value: "200", unit: "km/h", icon: "🏎️" },
        { label: "Weight", value: "135", unit: "kg", icon: "⚖️" },
        { label: "Chassis", value: "Carbon", unit: "", icon: "🧱" }
      ]
    }
  }

  const bike = bikes[id]

  return(
    <>
      <Navbar/>

      <section className="bikeDetails">
        <div className="container">

          {/* 🔥 TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="title"
          >
            {bike.name}
          </motion.h1>

          {/* 🚀 GRID */}
          <div className="grid">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              className="imageBox"
            >
              <img src={bike.image} alt={bike.name}/>
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              className="infoBox"
            >
              <p className="desc">{bike.desc}</p>

              <div className="specGrid">
                {bike.specs.map((spec, i)=>(
                  <motion.div
                    key={i}
                    className="specCard"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >

                    <div className="icon">{spec.icon}</div>

                    <h4>{spec.label}</h4>

                    <p className="value">
                      {isNaN(spec.value) ? spec.value : <CountUp value={spec.value} />}
                      <span> {spec.unit}</span>
                    </p>

                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>

          {/* 👥 TEAM */}
          <div className="teamSection">
            <h2>Team Behind the Machine</h2>

            <div className="teamBox">
              <img src="/team/team.jpg" alt="team"/>
              <p>
                Designed and engineered by a passionate team specializing in
                mechanical systems, aerodynamics, and electronics integration.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer/>

      {/* 🔥 STYLES */}
      <style>
        {`

        .bikeDetails {
          padding: 120px 0;
          background: radial-gradient(circle at center, #111 0%, #000 100%);
        }

        .title {
          text-align: center;
          margin-bottom: 60px;
          font-family: 'Orbitron', sans-serif;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .imageBox img {
          width: 100%;
          border-radius: 14px;
          box-shadow: 0 0 40px rgba(0,191,255,0.2);
        }

        .desc {
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .specGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
          gap: 15px;
        }

        .specCard {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          padding: 18px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
          transition: 0.3s;
        }

        .specCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 20px rgba(0,191,255,0.3);
        }

        .icon {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .value {
          font-size: 18px;
          font-weight: 600;
        }

        /* TEAM */
        .teamSection {
          margin-top: 80px;
          text-align: center;
        }

        .teamBox img {
          width: 100%;
          max-width: 500px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .teamBox p {
          max-width: 600px;
          margin: auto;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        `}
      </style>
    </>
  )
}