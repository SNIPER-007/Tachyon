import { useEffect, useState } from "react"

export default function Loader({ children }) {

  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true)
    }, 1400)

    const timer2 = setTimeout(() => {
      setLoading(false)
    }, 1750)

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
              radial-gradient(circle at center, #140000, #000);

            transition: opacity 0.5s ease;
          }

          /* EXIT */
          .fadeOut {
            opacity: 0;
          }

          /* LOGO */
          .logo {
            font-size: 42px;
            letter-spacing: 6px;

            opacity: 0;
            transform: translateY(25px);

            animation:
              logoEnter 0.8s ease forwards,
              pulse 2.2s infinite ease-in-out;

            text-shadow:
              0 0 20px rgba(255,0,0,0.6);
          }

          @keyframes logoEnter {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* 🔥 SMOOTH GLOW (LESS HARSH) */
          @keyframes pulse {
            0%,100% {
              text-shadow: 0 0 18px rgba(255,0,0,0.5);
            }
            50% {
              text-shadow: 0 0 35px rgba(255,0,0,0.9);
            }
          }

          /* 🔥 RACING LINE */
          .line {
            margin-top: 28px;
            width: 260px;
            height: 2px;

            background: linear-gradient(
              90deg,
              transparent,
              #ff0000,
              #ff4d4d,
              transparent
            );

            animation: load 1.3s ease-in-out infinite;
          }

          @keyframes load {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }
            30% {
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: translateX(120%);
              opacity: 0;
            }
          }

        `}</style>

      </div>
    )
  }

  return children
}