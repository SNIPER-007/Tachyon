import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function AboutPreview(){

  return(

    <section className="aboutPreviewSection">

      <div className="container">

        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="title"
        >
          About Tachyon
        </motion.h2>

        {/* 🧠 CONTENT */}
        <motion.div
          className="contentBox"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >

          <p>
            Tachyon is a student-driven engineering team dedicated to designing
            and building high-performance racing motorcycles. We combine innovation,
            precision engineering, and cutting-edge technology to push the limits
            of speed and performance.
          </p>

        </motion.div>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/about">
            <button className="aboutBtn">
              Learn More
            </button>
          </Link>
        </motion.div>

      </div>

      <style>
        {`

        .aboutPreviewSection {
          padding: 120px 0;

          background:
            radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
            radial-gradient(circle at 80% 80%, rgba(255,0,0,0.05), transparent),
            #000;

          color: white;
          text-align: center;
        }

        .title {
          margin-bottom: 30px;
        }

        /* 🔥 CONTENT BOX */
        .contentBox {
          max-width: 750px;
          margin: 0 auto 30px;

          background: linear-gradient(145deg, #0a0a0a, #050505);
          padding: 35px;

          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);

          transition: 0.3s;
        }

        .contentBox:hover {
          box-shadow:
            0 0 25px rgba(255,0,0,0.25),
            0 0 60px rgba(255,0,0,0.05);
        }

        .contentBox p {
          font-size: 17px;
          line-height: 1.7;
          opacity: 0.85;
        }

        /* 🔥 BUTTON */
        .aboutBtn {
          margin-top: 10px;
          padding: 14px 32px;

          background: linear-gradient(45deg, #ff0000, #ff4d4d);
          border: none;
          color: white;

          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;

          transition: 0.3s;
        }

        .aboutBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255,0,0,0.6);
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .aboutPreviewSection {
            padding: 90px 0;
          }

          .contentBox {
            padding: 25px;
          }

          .contentBox p {
            font-size: 15px;
          }

        }

        `}
      </style>

    </section>

  )

}