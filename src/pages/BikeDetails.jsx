import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function BikeDetails(){

  const { id } = useParams()

  const bike = {
    name: "TBD",
    image: "/bikes/tbd.jpg",
    desc: "Our first-generation Formula Student motorcycle, engineered with a focus on performance, precision, and innovation. Currently under development by the Tachyon team.",
    specs: [
      { label: "Engine", value: "250", unit: "cc", icon: "⚙️" },
      { label: "Power", value: "40", unit: "BHP", icon: "⚡" },
      { label: "Weight", value: "TBA", unit: "", icon: "⚖️" },
      { label: "Top Speed", value: "TBA", unit: "", icon: "🏎️" },
      { label: "Chassis", value: "Steel", unit: "", icon: "🧱" }
    ]
  }

  return(
    <>
      <Navbar/>

      <section className="bikeDetails page">

        <div className="container">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="title"
          >
            {bike.name}
          </motion.h1>

          <div className="grid">

            {/* 🔥 IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              className="imageBox"
            >
              <img src={bike.image} alt="Bike"/>
            </motion.div>

            {/* 🔥 INFO */}
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
                      {spec.value}
                      <span> {spec.unit}</span>
                    </p>

                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>

          {/* 🔥 TEAM SECTION */}
          <div className="teamSection">

            <h2>Team Behind the Machine</h2>

            <div className="teamBox">

              {/* 🔥 EMPTY IMAGE FOR NOW */}
              <img src="/team/team.jpg" alt="team"/>

              <p>
                This machine is being developed by a multidisciplinary team
                working across design, aerodynamics, electronics, and performance
                engineering — pushing boundaries to build our first competitive race bike.
              </p>

            </div>

          </div>

        </div>
      </section>

      <Footer/>

      <style>
        {`

        .bikeDetails {
          padding: 120px 0;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
            radial-gradient(circle at 80% 80%, rgba(255,0,0,0.05), transparent),
            #000;
        }

        .title {
          text-align: center;
          margin-bottom: 60px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        /* 🔥 IMAGE */
        .imageBox img {
          width: 100%;
          border-radius: 14px;

          box-shadow:
            0 0 40px rgba(255,0,0,0.25),
            0 0 80px rgba(255,0,0,0.08);
        }

        .desc {
          margin-bottom: 25px;
          opacity: 0.8;
        }

        /* 🔥 SPEC GRID */
        .specGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
          gap: 18px;
        }

        .specCard {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(10px);

          padding: 18px;
          border-radius: 12px;

          border: 1px solid rgba(255,255,255,0.08);

          text-align: center;
          transition: 0.3s;
        }

        .specCard:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 20px rgba(255,0,0,0.4);
        }

        .icon {
          font-size: 22px;
          margin-bottom: 8px;
        }

        .value {
          font-size: 18px;
          font-weight: 600;
        }

        /* 🔥 TEAM */
        .teamSection {
          margin-top: 100px;
          text-align: center;
        }

        .teamBox img {
          width: 100%;
          max-width: 500px;
          border-radius: 12px;
          margin-bottom: 20px;

          box-shadow: 0 0 30px rgba(255,0,0,0.2);
        }

        .teamBox p {
          max-width: 600px;
          margin: auto;
          opacity: 0.8;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .imageBox img {
            max-height: 250px;
            object-fit: contain;
          }

          .desc {
            font-size: 14px;
          }

          .specGrid {
            gap: 12px;
          }

          .teamSection {
            margin-top: 70px;
          }

        }

        `}
      </style>
    </>
  )
}