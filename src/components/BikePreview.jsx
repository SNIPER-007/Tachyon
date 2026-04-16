import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function BikePreview() {

  const bike = {
    name: "TBD",
    img: "/bikes/tbd.jpg"
  }

  return (
    <section className="bikePreviewSection">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Machine
      </motion.h2>

      {/* 🔥 SINGLE HERO CARD */}
      <motion.div
        className="previewWrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >

        <div className="previewCard">

          <img src={bike.img} alt="Bike" />

          <div className="overlay">
            <h3>{bike.name}</h3>
            <p>Currently in Development</p>
          </div>

        </div>

      </motion.div>

      {/* 🔥 CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/bikes">
          <button className="ctaBtn">
            View Machine Details
          </button>
        </Link>
      </motion.div>

      <style>
        {`

        .bikePreviewSection {
          padding: 120px 0;
          text-align: center;

          background:
            radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
            radial-gradient(circle at 80% 80%, rgba(255,0,0,0.05), transparent),
            #000;

          color: white;
        }

        .previewWrapper {
          margin-top: 60px;
          display: flex;
          justify-content: center;
        }

        /* 🔥 HERO CARD */
        .previewCard {
          width: 100%;
          max-width: 650px;
          position: relative;

          border-radius: 18px;
          overflow: hidden;

          background: linear-gradient(145deg, #0a0a0a, #050505);
          border: 1px solid rgba(255,255,255,0.08);

          cursor: pointer;
          transition: 0.4s;
        }

        .previewCard:hover {
          transform: translateY(-10px);
          box-shadow:
            0 0 40px rgba(255,0,0,0.25),
            0 0 80px rgba(255,0,0,0.08);
        }

        /* IMAGE */
        .previewCard img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          transition: 0.5s;
        }

        .previewCard:hover img {
          transform: scale(1.05);
          filter: brightness(0.85);
        }

        /* 🔥 OVERLAY */
        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 25px;

          background: linear-gradient(to top, rgba(0,0,0,0.95), transparent);
          text-align: left;
        }

        .overlay h3 {
          margin: 0;
          font-size: 22px;
        }

        .overlay p {
          margin-top: 6px;
          font-size: 14px;
          opacity: 0.7;
        }

        /* 🔥 BUTTON */
        .ctaBtn {
          margin-top: 50px;
          padding: 14px 34px;

          background: linear-gradient(45deg, #ff0000, #ff4d4d);
          border: none;
          color: white;

          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;

          transition: 0.3s;
        }

        .ctaBtn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255,0,0,0.6);
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .bikePreviewSection {
            padding: 90px 0;
          }

          .previewCard img {
            height: 220px;
          }

          .overlay {
            padding: 18px;
          }

          .overlay h3 {
            font-size: 18px;
          }

        }

        `}
      </style>

    </section>
  )
}