import { useEffect, useState } from "react"

export default function Loader({ children }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1600) // 🔥 duration (can tweak)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loader">

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

            background: black;
          }

          .logo {
            font-size: 42px;
            letter-spacing: 6px;

            text-shadow:
              0 0 25px rgba(0,191,255,0.6);
          }

          .line {
            margin-top: 20px;
            width: 220px;
            height: 2px;

            background: linear-gradient(90deg, transparent, #00f0ff, transparent);

            animation: load 1.2s infinite;
          }

          @keyframes load {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>

      </div>
    )
  }

  return children
}