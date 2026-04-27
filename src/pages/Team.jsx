import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Team(){

  const getImg = (name) =>
    `/team/${name.toLowerCase().replace(/\s+/g, "")}.jpeg`

  const captain = {
    name: "Abbubakar Danesh Shaikh",
    role: "Team Captain",
    email: "",
    tall: true
  }

  const core = [
    {
      name: "Abdur Rahman Khan",
      role: "Chief Operations Officer",
      email: "",
      tall: true
    },
    {
      name: "Shreedhaval Damle",
      role: "Mechanical Lead",
      email: "",
      tall: true
    }
  ]

  const engineering = [
    { name: "Yashraj Chauhan", role: "Chassis Engineer" },
    { name: "Ranbeer Raja", role: "Chassis Engineer" },
    { name: "Tanish Chachad", role: "Aerodynamics Engineer" },
    { name: "Shubham Ghosalkar", role: "Brakes Engineer" },
    { name: "Mayank Koli", role: "Chassis Engineer" },
    { name: "Satakshi Jha", role: "Aerodynamics Engineer" },
    { name: "Vaishnavi Mandare", role: "Aerodynamics Engineer" },
    { name: "Vineet Nishar", role: "Harness and Driver Interface" },
    { name: "Aniket Dakhole", role: "Harness and ECU" },
    { name: "Renee Desai", role: "Suspension Engineer" },
    { name: "Tanay Paralkar", role: "Harness and Driver Interface" },
    { name: "Rehan Alam", role: "Chassis Engineer" },
    { name: "Vedant Shetty", role: "Brakes Engineer" },
    { name: "Shivam Ghawale", role: "Suspension Engineer" },
    { name: "Atharva Chaudhari", role: "Suspension Engineer" }
  ]

  const marketing = [
    { name: "Soham Sadavse", role: "Marketing Executive" },
    { name: "Yash Madhavi", role: "Marketing Executive" },
    { name: "Aditya Pisal", role: "Marketing Executive" },
    { name: "Lavanya Desai", role: "Marketing Executive" },
    { name: "Dhanashree Ankule", role: "Marketing Executive" },
    { name: "Pratibha Singh", role: "Website Management" },
    { name: "Chittansh Pancholi", role: "Website Management" },
    { name: "Maclin Nadar", role: "Content Editor" },
    { name: "Aditya Khanvilkar", role: "Content Editor" }
  ]

  /* 🔥 UPDATED CARD RENDER */
  const renderCards = (list) =>
    list.map((m, i) => (
      <motion.div
        key={i}
        className={`teamCard ${m.tall ? "tallCard" : ""}`}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        viewport={{ once: true }}
      >

        <div className="imgWrapper">
          <img
  src={getImg(m.name)}
  alt={m.name}
  style={{
    objectPosition: m.tall ? "top" : "center",
    transform: m.tall ? "scale(0.85)" : "scale(1)"
  }}
/>
        </div>

        <div className="overlay">
          <h3>{m.name}</h3>
          <p>{m.role}</p>
          {m.email && <span className="email">{m.email}</span>}
        </div>

      </motion.div>
    ))

  return(
    <>
      <Navbar/>

      <section className="teamPage page">

        <div className="container">

          <h1>Our Team</h1>

          {/* 🔥 CAPTAIN */}
          <div className="captain">
            <img src={getImg(captain.name)} alt={captain.name} />

            <div className="captainInfo">
              <h2>{captain.name}</h2>
              <p>{captain.role}</p>
              <div className="line"></div>
              <span>Leading performance. Driving innovation.</span>
            </div>
          </div>

          {/* CORE */}
          <h2 className="sectionTitle">Core Team</h2>
          <div className="teamGrid">{renderCards(core)}</div>

          {/* ENGINEERING */}
          <h2 className="sectionTitle">Engineering Team</h2>
          <div className="teamGrid">{renderCards(engineering)}</div>

          {/* MARKETING */}
          <h2 className="sectionTitle">Marketing & Media</h2>
          <div className="teamGrid">{renderCards(marketing)}</div>

        </div>

        <style>{`

.teamPage {
  padding: 120px 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
    #000;
}

h1 {
  text-align: center;
  margin-bottom: 70px;
}

/* CAPTAIN */
.captain {
  display: flex;
  gap: 40px;
  align-items: center;
  background: linear-gradient(145deg, #0a0a0a, #050505);
  padding: 30px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 80px;
}

.captain img {
  width: 320px;
  height: 320px;
  object-fit: cover;
  object-position: top;
}

/* SECTION */
.sectionTitle {
  margin: 50px 0 20px;
}

/* GRID */
.teamGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 25px;
}

/* CARD */
.teamCard {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
}

/* 🔥 WRAPPER (FIX) */
.imgWrapper {
  width: 100%;
  height: 230px;
  overflow: hidden;

  display: flex;
  align-items: flex-start; /* 🔥 top alignment */
  justify-content: center;
}

/* IMAGE */
.imgWrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
}

/* 🔥 TALL FIX */
.tallCard .imgWrapper {
  height: 320px;
}

.teamCard:hover img {
  transform: scale(1.08);
}

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

/* EMAIL */
.email {
  font-size: 12px;
  opacity: 0;
  display: block;
  margin-top: 5px;
  transition: 0.3s;
}

.teamCard:hover .email {
  opacity: 1;
}

/* MOBILE */
@media (max-width: 768px) {

  .captain {
    flex-direction: column;
    text-align: center;
  }

  .captain img {
    width: 100%;
    height: 260px;
  }

}

`}</style>

      </section>

      <Footer/>
    </>
  )
}