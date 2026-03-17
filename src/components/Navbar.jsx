import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "20px 55px",
      background: "rgba(0,0,0,0.9)",
      position: "fixed",
      top: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box"
    }}>

      <h2 style={{ letterSpacing: "2px" }}>TACHYON</h2>

      <div style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap"
      }}>

        {["Home","Team","Bikes","About","Sponsors"].map((item, i) => (
          <Link
            key={i}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              transition: "0.3s"
            }}
            onMouseEnter={(e)=> e.target.style.color="red"}
            onMouseLeave={(e)=> e.target.style.color="white"}
          >
            {item}
          </Link>
        ))}

      </div>

    </nav>
  )
}