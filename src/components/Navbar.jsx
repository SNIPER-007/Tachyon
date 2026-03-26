import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Bikes", path: "/bikes" },
    { name: "About", path: "/about" },
    { name: "Sponsors", path: "/sponsors" }
  ]

  return (
    <>
      <nav className="navbar">

        {/* 🔥 LOGO */}
        <h2 className="logo">TACHYON</h2>

        {/* 🍔 HAMBURGER */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>

      {/* 🔥 MENU OVERLAY */}
      <div className={`menuOverlay ${open ? "active" : ""}`}>
        {links.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            onClick={() => setOpen(false)}
            className={`menuLink ${location.pathname === item.path ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <style>
        {`

        /* NAVBAR */
        .navbar {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 16px 40px; /* 🔥 matches container */

          backdrop-filter: blur(14px);
          background: rgba(0,0,0,0.7);
          border-bottom: 1px solid rgba(255,255,255,0.08);

          box-sizing: border-box;
        }

        /* LOGO */
        .logo {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 2px;
          font-size: 18px;
          margin: 0;

          background: linear-gradient(90deg, #fff, #00f0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* HAMBURGER */
        .hamburger {
          width: 30px; /* 🔥 bigger for touch */
          height: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;

          z-index: 1100;
        }

        .hamburger span {
          height: 3px;
          width: 100%;
          background: linear-gradient(90deg, #fff, #00f0ff);
          border-radius: 3px;
          box-shadow: 0 0 6px rgba(0,191,255,0.6);
          transition: 0.3s;
        }

        /* HAMBURGER ANIMATION */
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 6px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* OVERLAY */
        .menuOverlay {
          position: fixed;
          inset: 0;
          background: #000;
          z-index: 999;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;

          opacity: 0;
          pointer-events: none;
          transition: 0.4s ease;
        }

        .menuOverlay.active {
          opacity: 1;
          pointer-events: all;
        }

        /* MENU LINKS */
        .menuLink {
          font-family: 'Orbitron', sans-serif;
          font-size: 28px;
          letter-spacing: 2px;
          text-transform: uppercase;

          color: rgba(255,255,255,0.8);
          position: relative;
          transition: 0.3s;
        }

        .menuLink:hover {
          transform: translateY(-6px);
          color: white;
        }

        .menuLink::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;

          width: 0%;
          height: 2px;

          background: linear-gradient(90deg, #00f0ff, #0072ff);
          transform: translateX(-50%);
          transition: 0.3s;
        }

        .menuLink:hover::after {
          width: 100%;
        }

        .menuLink.active {
          color: #00f0ff;
        }

        .menuLink.active::after {
          width: 100%;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .navbar {
            padding: 14px 20px; /* 🔥 tighter mobile */
          }

          .menuLink {
            font-size: 22px; /* 🔥 better fit */
          }

        }

        `}
      </style>
    </>
  )
}