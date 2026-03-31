import { useEffect, useState } from "react"

export default function Loader({ children }) {

  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true) // 🔥 start exit animation
    }, 1400)

    const timer2 = setTimeout(() => {
      setLoading(false) // 🔥 remove loader
    }, 1700)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (loading) {
    return (
      <div className={`loader ${fadeOut ? "fadeOut" : ""}`}>

        <h1 className="logo">TACHYON</h1>

        <div className="line"></div>

        <style>{`

          .loader {
            position: fixed;
            inset: 0;
            z-index: 9999;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            background:
              radial-gradient(circle at center, #050b12, #000);

            transition: opacity 0.4s ease;
          }

          /* 🔥 EXIT ANIMATION */
          .fadeOut {
            opacity: 0;
          }

          /* LOGO */
          .logo {
            font-size: 42px;
            letter-spacing: 6px;

            opacity: 0;
            transform: translateY(20px);

            animation: logoEnter 0.8s ease forwards;

            text-shadow:
              0 0 25px rgba(0,191,255,0.6);
          }

          @keyframes logoEnter {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* 🔥 GLOW PULSE */
          .logo {
            animation:
              logoEnter 0.8s ease forwards,
              pulse 2s infinite ease-in-out;
          }

          @keyframes pulse {
            0%,100% {
              text-shadow: 0 0 20px rgba(0,191,255,0.5);
            }
            50% {
              text-shadow: 0 0 40px rgba(0,191,255,0.9);
            }
          }

          /* LINE */
          .line {
            margin-top: 25px;
            width: 240px;
            height: 2px;

            background: linear-gradient(90deg, transparent, #00f0ff, transparent);

            animation: load 1.2s infinite ease-in-out;
          }

          @keyframes load {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }

        `}</style>

      </div>
    )
  }

  return children
}