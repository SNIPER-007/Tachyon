import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function About(){

  const features = [
    { title: "Innovation", desc: "Constantly pushing engineering boundaries" },
    { title: "Performance", desc: "Built for speed and precision" },
    { title: "Teamwork", desc: "Driven by collaboration and passion" }
  ]

  return(
    <>
      <Navbar/>

      <motion.section
        className="aboutPage page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <div className="container">

          {/* 🔥 TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="title"
          >
            About Tachyon
          </motion.h1>

          {/* 🧠 DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="description"
          >
            Tachyon is a student-driven engineering council focused on designing
            and building high-performance motorcycles. Our team integrates
            mechanical engineering, electronics, and cutting-edge racing
            technology to create innovative and competitive machines.
          </motion.p>

          {/* 🔥 FEATURES */}
          <div className="features">

            {features.map((item, i) => (
              <motion.div
                key={i}
                className="featureCard"

                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}

          </div>

        </div>

        <style>{`

        .aboutPage {
          min-height: 100vh;
          padding: 120px 0 100px;

          background:
            radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
            radial-gradient(circle at 80% 80%, rgba(255,0,0,0.05), transparent),
            #000;
        }

        /* 🔥 TITLE */
        .title {
          text-align: center;
          margin-bottom: 20px;

          text-shadow:
            0 0 20px rgba(255,0,0,0.3);
        }

        /* 🔥 DESCRIPTION */
        .description {
          max-width: 750px;
          margin: 25px auto 60px;
          text-align: center;

          font-size: 17px;
          line-height: 1.7;
          opacity: 0.85;
        }

        /* 🔥 FEATURES GRID */
        .features {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        /* 🔥 CARD */
        .featureCard {
          width: 260px;

          background: linear-gradient(145deg, #0a0a0a, #050505);
          border-radius: 16px;
          padding: 26px;

          border: 1px solid rgba(255,255,255,0.08);

          text-align: center;
          cursor: pointer;

          transition: 0.35s ease;
        }

        .featureCard:hover {
          transform: translateY(-10px) scale(1.02);

          box-shadow:
            0 0 25px rgba(255,0,0,0.35),
            0 0 60px rgba(255,0,0,0.08);
        }

        /* TEXT */
        .featureCard h3 {
          margin-bottom: 10px;
        }

        .featureCard p {
          font-size: 14px;
          opacity: 0.75;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .aboutPage {
            padding: 100px 0 80px;
          }

          .description {
            font-size: 15px;
            margin-bottom: 40px;
          }

          .featureCard {
            width: 100%;
            max-width: 320px;
          }

        }

        `}</style>

      </motion.section>

      <Footer/>
    </>
  )
}