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
        className="page sponsorsPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <div className="container" style={{ textAlign: "center" }}>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="title"
          >
            Our Sponsors
          </motion.h1>

          <div className="innerWrap">

            <div className="grid">

              {sponsors.map((s, i) => (
                <motion.div
                  key={i}
                  className="card"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >

                  <img src={s.img} alt={s.name} />

                  <h3>{s.name}</h3>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

        <style>
{`
.sponsorsPage {
  min-height: 100vh;
  padding: 120px 0 100px;

  background:
    radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
    radial-gradient(circle at 80% 80%, rgba(255,0,0,0.05), transparent),
    #000;

  color: white;
}

.title {
  margin-bottom: 20px;
}

.innerWrap {
  padding: 0 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

/* 🔥 CARD */
.card {
  background: linear-gradient(145deg, #0a0a0a, #050505);
  padding: 30px;
  border-radius: 14px;

  border: 1px solid rgba(255,255,255,0.08);

  transition: 0.3s;
  cursor: pointer;
}

/* 🔥 HOVER */
.card:hover {
  transform: translateY(-10px) scale(1.03);

  box-shadow:
    0 0 25px rgba(255,0,0,0.35),
    0 0 60px rgba(255,0,0,0.08);
}

/* IMAGE */
.card img {
  height: 90px;
  object-fit: contain;
  margin: 0 auto 20px;

  filter: brightness(0.9);
}

/* TEXT */
.card h3 {
  margin-top: 10px;
  font-weight: 500;
}

/* 📱 MOBILE */
@media (max-width: 768px) {

  .sponsorsPage {
    padding: 100px 0 80px;
  }

  .grid {
    gap: 20px;
  }

}
`}
</style>

      </motion.section>

      <Footer />
    </>
  )
}