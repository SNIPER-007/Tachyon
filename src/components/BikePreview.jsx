import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function BikePreview() {

  const bikes = [
    {
      name: "Tachyon X1",
      img: "/bikes/x1.jpg"
    },
    {
      name: "Tachyon X2",
      img: "/bikes/x2.jpeg"
    }
  ]

  return (
    <section style={{
      padding: "120px 40px",
      textAlign: "center",
      background: "radial-gradient(circle at center, #111 0%, #000 100%)",
      color: "white"
    }}>

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Motorcycles
      </motion.h2>

      {/* 🔥 PREVIEW CARDS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "50px",
        flexWrap: "wrap"
      }}>

        {bikes.map((bike, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}

            className="previewCard"

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

            <img src={bike.img} alt={bike.name} />

            <h3>{bike.name}</h3>

          </motion.div>
        ))}

      </div>

      {/* 🔥 BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/bikes">
          <button
            className="ctaBtn"

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
            Explore All Bikes
          </button>
        </Link>
      </motion.div>

      {/* 🔥 STYLES */}
      <style>
        {`
        .previewCard {
          width: 260px;
          background: linear-gradient(145deg, #0a0a0a, #050505);
          border-radius: 14px;
          padding: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: 0.3s;
          cursor: pointer;

          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .previewCard:hover {
          box-shadow: 0 0 25px rgba(0,191,255,0.4);
        }

        .previewCard img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 10px;
          transition: 0.4s;
        }

        .previewCard:hover img {
          transform: scale(1.05);
        }

        .previewCard h3 {
          margin-top: 10px;
          font-weight: 500;
        }

        /* BUTTON */
        .ctaBtn {
          margin-top: 40px;
          padding: 12px 30px;
          background: linear-gradient(45deg, #ff0000, #ff4d4d);
          border: none;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .ctaBtn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px red;
        }
        `}
      </style>

    </section>
  )
}