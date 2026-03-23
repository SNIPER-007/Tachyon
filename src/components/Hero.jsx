import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section style={{
  width: "100%",
  height: "100vh",
  position: "relative",
  overflow: "hidden"
}}>

      {/* 🎥 VIDEO BACKGROUND (FIXED WIDTH) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          width: "100vw",   // 🔥 FIX (was 100%)
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          animation: "zoom 20s ease-in-out infinite alternate"
        }}
      >
        <source src="/videos/bike.mp4" type="video/mp4" />
      </video>

      {/* 🌑 GRADIENT OVERLAY */}
      <div style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.85))"
      }} />

      {/* 🧠 CONTENT */}
      <div style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px"
      }}>

        {/* 🔥 TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "70px",
            letterSpacing: "4px",
            textShadow: "0 0 20px rgba(0,191,255,0.6)",
            color: "white"
          }}
        >
          TACHYON
        </motion.h1>

        {/* ⚡ SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "12px",
            fontSize: "20px",
            opacity: "0.9",
            color: "white"   // 🔥 safety fix
          }}
        >
          Engineering High Performance Motorcycles
        </motion.p>

        {/* 🔥 BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: "35px",
            padding: "12px 32px",
            background: "linear-gradient(45deg, #ff0000, #ff4d4d)",
            border: "none",
            color: "white",
            fontWeight: "600",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.3s"
          }}
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
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth"
            })
          }}
        >
          Explore Bikes
        </motion.button>

      </div>

      {/* ⬇️ SCROLL ARROW */}
      <div
        onClick={() => window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth"
        })}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "24px",
          color: "white",
          cursor: "pointer",
          animation: "bounce 1.5s infinite"
        }}
      >
        ↓
      </div>

      {/* 🎬 ANIMATIONS */}
      <style>
        {`
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 10px); }
        }
        `}
      </style>

    </section>
  )
}