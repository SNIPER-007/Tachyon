import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {

  const { scrollY } = useScroll()

  /* 🔥 PARALLAX (SCROLL BASED) */
  const scale = useTransform(scrollY, [0, 400], [1, 1.1])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  /* 🔥 MOUSE LIGHT TRACK */
  const [pos, setPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section className="hero">

      {/* 🎥 VIDEO (PARALLAX) */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="heroVideo"
        style={{ scale, opacity }}
      >
        <source src="/videos/bike.mp4" type="video/mp4" />
      </motion.video>

      {/* 🌌 BASE OVERLAY */}
      <div className="heroOverlay" />

      {/* 🔥 MOUSE LIGHT */}
      <div
        className="mouseLight"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(0,191,255,0.15), transparent 40%)`
        }}
      />

      {/* 🧠 CONTENT */}
      <div className="heroContent">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="heroTitle"
        >
          TACHYON
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="heroSubtitle"
        >
          Engineered for Speed. Built for Precision.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="heroBtn"
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
          })}
        >
          Explore Machines
        </motion.button>

      </div>

      {/* ⬇️ SCROLL */}
      <div className="scrollArrow">↓</div>

      <style>
        {`

        .hero {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        .heroVideo {
          position: absolute;
          width: 100vw;
          height: 100%;
          object-fit: cover;
          top: 0;
          left: 0;
        }

        /* 🌌 DEPTH */
        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
        }

        /* 🔥 MOUSE LIGHT */
        .mouseLight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.1s;
        }

        /* CONTENT */
        .heroContent {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        /* TITLE */
        .heroTitle {
          font-family: 'Orbitron', sans-serif;
          font-size: clamp(50px, 8vw, 90px);
          letter-spacing: 6px;

          text-shadow:
            0 0 25px rgba(0,191,255,0.5),
            0 0 50px rgba(0,191,255,0.15);
        }

        /* SUBTITLE */
        .heroSubtitle {
          margin-top: 10px;
          font-size: 18px;
          opacity: 0.85;
        }

        /* BUTTON */
        .heroBtn {
          margin-top: 35px;
          padding: 14px 36px;

          background: linear-gradient(45deg, #ff0000, #ff4d4d);
          border: none;
          color: white;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;

          transition: 0.3s;
        }

        .heroBtn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 25px rgba(255,0,0,0.7);
        }

        /* SCROLL */
        .scrollArrow {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 22px;
          animation: bounce 1.5s infinite;
          cursor: pointer;
        }

        @keyframes bounce {
          0%,100% { transform: translate(-50%,0); }
          50% { transform: translate(-50%,10px); }
        }

        `}
      </style>

    </section>
  )
}