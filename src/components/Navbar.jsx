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

        {/* 🔥 LOGOS */}
        <div className="logoGroup">

          <img src="/logos/tachyonlogo.png" alt="Tachyon" className="logoImg mainLogo"/>

          <img src="/logos/kjsselogo.png" alt="KJSSE" className="logoImg"/>

          <img src="/logos/trustlogo.jpg" alt="Trust" className="logoImg"/>

        </div>

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

          padding: 14px 40px;

          backdrop-filter: blur(14px);
          background: rgba(0,0,0,0.75);
          border-bottom: 1px solid rgba(255,0,0,0.15);

          box-sizing: border-box;
        }

        /* 🔥 LOGO GROUP */
        .logoGroup {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .logoImg {
          height: 32px;
          object-fit: contain;
          opacity: 0.9;
          transition: 0.3s;
        }

        /* 🔥 MAIN LOGO SLIGHTLY BIGGER */
        .mainLogo {
          height: 56px;
        }

        .logoImg:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        /* HAMBURGER */
        .hamburger {
          width: 30px;
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
          background: linear-gradient(90deg, #ffffff, #ff1e1e);
          border-radius: 3px;
          box-shadow: 0 0 8px rgba(255,0,0,0.7);
          transition: 0.3s;
        }

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
          background: radial-gradient(circle at center, #0a0000, #000);
          z-index: 999;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 32px;

          opacity: 0;
          pointer-events: none;
          transition: 0.4s ease;
        }

        .menuOverlay.active {
          opacity: 1;
          pointer-events: all;
        }

        /* LINKS */
        .menuLink {
          font-family: 'Orbitron', sans-serif;
          font-size: 28px;
          letter-spacing: 2px;
          text-transform: uppercase;

          color: rgba(255,255,255,0.85);
          position: relative;
          transition: 0.3s;
        }

        .menuLink:hover {
          transform: translateY(-6px);
          color: #ffffff;
          text-shadow: 0 0 15px rgba(255,0,0,0.6);
        }

        .menuLink::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;

          width: 0%;
          height: 2px;

          background: linear-gradient(90deg, #ff1e1e, #ff4d4d);
          transform: translateX(-50%);
          transition: 0.3s;
        }

        .menuLink:hover::after {
          width: 100%;
        }

        .menuLink.active {
          color: #ff1e1e;
          text-shadow: 0 0 12px rgba(255,0,0,0.7);
        }

        .menuLink.active::after {
          width: 100%;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .navbar {
            padding: 12px 20px;
          }

          .logoGroup {
            gap: 10px;
          }

          .logoImg {
  height: 32px;
  object-fit: contain;
  opacity: 0.9;
  transition: 0.3s;
}

/* 🔥 TACHYON LOGO BOOST */
.mainLogo {
  height: 56px;   /* 🔥 bigger */
  transform: scale(1.1); /* slight visual boost */
}

          .menuLink {
            font-size: 22px;
          }

        }

        `}
      </style>
    </>
  )
}