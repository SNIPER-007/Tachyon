import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"

export default function Bikes() {

  const [active, setActive] = useState(null)

  const bikes = [
    {
      name: "Tachyon X1",
      desc: "High performance racing machine",
      img: "/bikes/x1.jpg",
      id: "x1"
    },
    {
      name: "Tachyon X2",
      desc: "Advanced aerodynamics and speed",
      img: "/bikes/x2.jpeg",
      id: "x2"
    }
  ]

  return (
    <>
      <Navbar />

      {/* 🔥 FULL WIDTH SECTION */}
      <section style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, #111 0%, #000 100%)"
      }}>

        {/* 🔥 CONTAINER FIX */}
        <div className="container">

          <h1 style={{
            textAlign: "center",
            marginBottom: "70px"
          }}>
            Our Motorcycles
          </h1>

          <div className="bikeContainer">

            {bikes.map((bike, i) => (
              <div
                key={i}
                className={`bikeCard ${active === i ? "active" : ""}`}

                onMouseEnter={() => setActive(i)}
                onMouseLeave={(e) => {
                  setActive(null)
                  e.currentTarget.style.transform =
                    "rotateX(0deg) rotateY(0deg)"
                }}

                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top

                  const centerX = rect.width / 2
                  const centerY = rect.height / 2

                  const rotateX = -(y - centerY) / 20
                  const rotateY = (x - centerX) / 20

                  e.currentTarget.style.transform =
                    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
                }}
              >

                <div className="rotatedText">
                  {bike.name}
                </div>

                <div className="content">
                  <img src={bike.img} alt={bike.name} />
                  <h2>{bike.name}</h2>
                  <p>{bike.desc}</p>

                  <button
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
                    onClick={() => window.location.href = `/bike/${bike.id}`}
                  >
                    Know More
                  </button>
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* 🔥 CSS (UNCHANGED BUT CLEAN) */}
        <style>
          {`
          .bikeContainer {
            display: flex;
            gap: 20px;
            height: 340px;
            overflow: hidden;
          }

          .bikeCard {
            flex: 1;
            background: linear-gradient(145deg, #0a0a0a, #050505);
            border-radius: 14px;
            border: 2px solid #1f6fff;
            position: relative;
            overflow: hidden;
            cursor: pointer;

            display: flex;
            justify-content: center;
            align-items: center;

            transform-style: preserve-3d;
            perspective: 1000px;

            transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          }

          .bikeCard.active {
            flex: 4;
            border: 2px solid #00f0ff;
            background: linear-gradient(145deg, #050b12, #000);
            box-shadow: 0 0 30px rgba(0, 191, 255, 0.35);
          }

          .rotatedText {
            transform: rotate(-90deg);
            font-size: 18px;
            letter-spacing: 2px;
            white-space: nowrap;
            color: white;
            transition: all 0.6s ease;
          }

          .bikeCard.active .rotatedText {
            transform: rotate(0deg);
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 22px;
          }

          .content {
            position: absolute;
            inset: 0;
            opacity: 0;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            padding: 20px;
            transition: 0.5s ease;

            transform: translateZ(40px);
          }

          .bikeCard.active .content {
            opacity: 1;
          }

          .content img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 10px;
            transition: 0.6s;
          }

          .bikeCard.active .content img {
            transform: scale(1.05);
          }

          .content button {
            margin-top: 14px;
            padding: 10px 22px;
            background: linear-gradient(45deg, #ff0000, #ff4d4d);
            border: none;
            color: white;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: 0.3s;
          }

          .content button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px red;
          }

          .bikeCard::before {
            content: "";
            position: absolute;
            inset: -2px;
            border-radius: 16px;
            background: linear-gradient(45deg, #00f0ff, #0066ff, #00f0ff);
            opacity: 0;
            z-index: -1;
            transition: 0.4s;
          }

          .bikeCard.active::before {
            opacity: 1;
            filter: blur(10px);
          }
          `}
        </style>

      </section>

      <Footer />
    </>
  )
}