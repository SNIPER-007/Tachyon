import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {

  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 400], [1, 1.1])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const [pos, setPos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    if (window.innerWidth < 768) return

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

      {/* 🔴 OVERLAY */}
      <div className="heroOverlay" />

      {/* 🔥 MOUSE LIGHT */}
      {window.innerWidth > 768 && (
        <div
          className="mouseLight"
          style={{
            background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,0,0,0.18), transparent 45%)`
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

        {/* 🔥 PREMIUM BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="heroBtn"

          onMouseMove={(e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2

  if (!e.currentTarget._raf) {
    e.currentTarget._raf = true

    requestAnimationFrame(() => {
      e.currentTarget.style.transform =
        `translate(${x * 0.08}px, ${y * 0.08}px) scale(1.05)`

      e.currentTarget._raf = false
    })
  }
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translate(0,0) scale(1)"
}}

          onClick={(e) => {
            const circle = document.createElement("span")
            circle.className = "ripple"

            const rect = e.currentTarget.getBoundingClientRect()
            circle.style.left = e.clientX - rect.left + "px"
            circle.style.top = e.clientY - rect.top + "px"

            e.currentTarget.appendChild(circle)

            setTimeout(() => circle.remove(), 600)

            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth"
            })
          }}
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
            radial-gradient(circle at center, rgba(255,0,0,0.08), transparent 60%),
            linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95));
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
          padding: 0 20px;
        }

        .heroTitle {
          font-size: clamp(42px, 8vw, 90px);
          letter-spacing: 6px;

          text-shadow:
            0 0 30px rgba(255,0,0,0.7),
            0 0 60px rgba(255,0,0,0.2);
        }

        .heroSubtitle {
          margin-top: 12px;
          font-size: 16px;
          opacity: 0.85;
        }

        /* 🔥 BUTTON */
        .heroBtn {
          margin-top: 30px;
          padding: 14px 28px;

          background: linear-gradient(45deg, #ff0000, #ff4d4d);
          border: none;
          color: white;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;

          position: relative;
          overflow: hidden;

          box-shadow: 0 0 20px rgba(255,0,0,0.4);
          transition: 0.3s;
        }

        /* 🔥 RIPPLE */
        .ripple {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          transform: scale(0);
          animation: rippleAnim 0.6s linear;
        }

        @keyframes rippleAnim {
          to {
            transform: scale(12);
            opacity: 0;
          }
        }

        /* SCROLL */
        .scrollArrow {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 20px;
          animation: bounce 1.5s infinite;
          cursor: pointer;
        }

        @keyframes bounce {
          0%,100% { transform: translate(-50%,0); }
          50% { transform: translate(-50%,10px); }
        }

        /* 📱 MOBILE */
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

        }

        `}
      </style>

    </section>
  )
}