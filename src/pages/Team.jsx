import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Team(){

  const captain = {
    name: "Team Captain",
    role: "Mechanical Engineering",
    img: "/team/captain.jpg"
  }

  const members = [
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

      <section className="teamPage page">

        <div className="container">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Team
          </motion.h1>

          {/* 🔥 CAPTAIN */}
          <motion.div
            className="captain"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={captain.img} alt={captain.name} />

            <div className="captainInfo">
              <h2>{captain.name}</h2>
              <p>{captain.role}</p>

              <div className="line"></div>

              <span>Leading performance. Driving innovation.</span>
            </div>
          </motion.div>

          <div style={{ padding: "0 10px" }}>

            <div className="teamGrid">

              {members.map((member,index)=>(
                <motion.div
                  key={index}
                  className="teamCard"

                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >

                  <img src={member.img} alt={member.name} />

                  <div className="overlay">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

        <style>
{`
.teamPage {
  min-height: 100vh;
  padding: 120px 0 120px;

  background:
    radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
    radial-gradient(circle at 80% 80%, rgba(255,0,0,0.05), transparent),
    #000;
}

h1 {
  text-align: center;
  margin-bottom: 70px;
}

/* 🔥 CAPTAIN */
.captain {
  display: flex;
  gap: 40px;
  align-items: center;

  background: linear-gradient(145deg, #0a0a0a, #050505);
  padding: 30px;
  border-radius: 18px;

  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 80px;

  transition: 0.4s;
}

.captain:hover {
  box-shadow: 0 0 40px rgba(255,0,0,0.25);
}

.captain img {
  width: 320px;
  height: 280px;
  object-fit: cover;
  border-radius: 14px;

  box-shadow: 0 0 30px rgba(255,0,0,0.2);
}

/* INFO */
.captainInfo h2 {
  font-size: 32px;
}

.captainInfo p {
  opacity: 0.8;
  margin-top: 6px;
}

.line {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #ff0000, #ff4d4d);
  margin: 15px 0;
}

.captainInfo span {
  font-size: 14px;
  opacity: 0.7;
}

/* GRID */
.teamGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 30px;
}

/* CARD */
.teamCard {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
}

.teamCard img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: 0.4s;
}

.teamCard:hover img {
  transform: scale(1.08);
}

/* 🔥 HOVER GLOW */
.teamCard:hover {
  box-shadow: 0 0 25px rgba(255,0,0,0.3);
}

/* OVERLAY */
.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px;

  background: linear-gradient(to top, rgba(0,0,0,0.95), transparent);
}

.overlay p {
  font-size: 13px;
  opacity: 0.7;
}

/* 📱 MOBILE */
@media (max-width: 768px) {

  .teamPage {
    padding: 100px 0 100px;
  }

  .captain {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .captain img {
    width: 100%;
    height: 240px;
  }

  .captainInfo h2 {
    font-size: 22px;
  }

}
`}
</style>

      </section>

      <Footer/>
    </>
  )
}