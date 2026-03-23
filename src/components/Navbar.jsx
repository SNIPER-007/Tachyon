import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",            // 🔥 FIX (was 100%)
      position: "fixed",
      top: 0,
      left: 0,                  // 🔥 IMPORTANT
      right: 0,                 // 🔥 IMPORTANT
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      backdropFilter: "blur(12px)",
      background: "rgba(0,0,0,0.6)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      boxSizing: "border-box"
    }}>

      {/* 🔥 LOGO */}
      <h2 style={{
        color: "white",
        letterSpacing: "2px",
        fontSize: "20px",
        margin: 0
      }}>
        TACHYON
      </h2>

      {/* 🔗 LINKS */}
      <div style={{
        display: "flex",
        gap: "25px",
        alignItems: "center"
      }}>

        {[
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
          { name: "Bikes", path: "/bikes" },
          { name: "About", path: "/about" },
          { name: "Sponsors", path: "/sponsors" }
        ].map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="navLink"
          >
            {item.name}
          </Link>
        ))}

      </div>

      {/* 🔥 STYLES */}
      <style>
        {`
        .navLink {
          position: relative;
          color: white;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
        }

        /* 🔥 HOVER COLOR */
        .navLink:hover {
          color: #ff3b3b;
        }

        /* 🔥 UNDERLINE ANIMATION */
        .navLink::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: #ff3b3b;
          transition: 0.3s;
        }

        .navLink:hover::after {
          width: 100%;
        }
        `}
      </style>

    </nav>
  )
}