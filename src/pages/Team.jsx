import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Team(){

  const members = [
    {
      name: "Team Captain",
      role: "Mechanical Engineering",
      img: "/team/captain.jpg"
    },
    {
      name: "Design Lead",
      role: "Chassis & Aero",
      img: "/team/design.jpg"
    },
    {
      name: "Electronics Lead",
      role: "ECU & Sensors",
      img: "/team/electronics.jpg"
    }
  ]

  return(
    <>
      <Navbar/>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background:"radial-gradient(circle at center, #111 0%, #000 100%)",
          minHeight:"100vh",
          color:"white"
        }}
      >

        {/* 🔥 CONTAINER FIX */}
        <div className="container" style={{ textAlign:"center" }}>

          {/* 🔥 TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Team
          </motion.h1>

          {/* GRID */}
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(250px,1fr))",
            gap:"30px",
            marginTop:"60px"
          }}>

            {members.map((member,index)=>(
              <motion.div
                key={index}

                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}

                className="teamCard"

                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top

                  const centerX = rect.width / 2
                  const centerY = rect.height / 2

                  const rotateX = -(y - centerY) / 20
                  const rotateY = (x - centerX) / 20

                  e.currentTarget.style.transform =
                    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg) scale(1)"
                }}
              >

                <img src={member.img} alt={member.name} />

                <h3>{member.name}</h3>
                <p>{member.role}</p>

              </motion.div>
            ))}

          </div>

        </div>

        {/* 🔥 STYLES */}
        <style>
          {`
          .teamCard {
            background: linear-gradient(145deg, #0a0a0a, #050505);
            padding: 20px;
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: 0.3s;
            cursor: pointer;

            transform-style: preserve-3d;
            perspective: 1000px;
          }

          .teamCard:hover {
            box-shadow: 0 0 25px rgba(0,191,255,0.4);
          }

          .teamCard img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 15px;
            transition: 0.4s;
          }

          .teamCard:hover img {
            transform: scale(1.05);
          }

          .teamCard h3 {
            margin-top: 10px;
            font-weight: 500;
          }

          .teamCard p {
            font-size: 14px;
            opacity: 0.8;
          }
          `}
        </style>

      </motion.section>

      <Footer/>
    </>
  )
}