import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {

  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 400], [1, 1.1])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const [pos, setPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    if (window.innerWidth < 768) return // 🔥 disable on mobile

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

      {/* 🎥 VIDEO */}
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

      {/* 🌌 OVERLAY */}
      <div className="heroOverlay" />

      {/* 🔥 MOUSE LIGHT (DESKTOP ONLY) */}
      {window.innerWidth > 768 && (
        <div
          className="mouseLight"
          style={{
            background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(0,191,255,0.15), transparent 40%)`
          }}
        />
      )}

      {/* CONTENT */}
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

      {/* SCROLL */}
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
          width: 100%;
          height: 100%;
          object-fit: cover;
          top: 0;
          left: 0;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9));
        }

        .mouseLight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.1s;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 20px; /* 🔥 mobile safety */
        }

        .heroTitle {
          font-size: clamp(42px, 8vw, 90px);
          letter-spacing: 6px;
        }

        .heroSubtitle {
          margin-top: 12px;
          font-size: 16px;
        }

        .heroBtn {
          margin-top: 30px;
          padding: 14px 28px;
        }

        .scrollArrow {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 20px;
        }

        @media (max-width: 768px) {

          .heroTitle {
            letter-spacing: 3px;
          }

          .heroSubtitle {
            font-size: 14px;
          }

          .heroBtn {
            padding: 12px 22px;
            font-size: 14px;
          }

          .scrollArrow {
            bottom: 15px;
          }

        }

        `}
      </style>

    </section>
  )
}