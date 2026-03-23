export default function Footer(){

  return(

    <footer style={{
      background:"black",
      color:"white",
      textAlign:"center",
      padding:"40px 20px",
      borderTop:"1px solid rgba(255,255,255,0.1)"
    }}>

      {/* 🔥 BRAND */}
      <h2 style={{
        letterSpacing:"2px",
        marginBottom:"10px"
      }}>
        TACHYON
      </h2>

      {/* 📝 TEXT */}
      <p style={{
        fontSize:"14px",
        opacity:"0.7",
        marginBottom:"25px"
      }}>
        © 2026 Tachyon Racing Team
      </p>

      {/* 🔗 SOCIALS */}
      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"25px"
      }}>

        {[
          "/assets/logos/ig1.png",
          "/assets/logos/ln1.png",
          "/assets/logos/fb1.png",
          "/assets/logos/gmail.png"
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="social"
            className="socialIcon"
          />
        ))}

      </div>

      {/* 🔥 STYLES */}
      <style>
        {`
        .socialIcon {
          width: 26px;
          height: 26px;
          transition: 0.3s;
          cursor: pointer;
          filter: brightness(0.8);
        }

        .socialIcon:hover {
          transform: scale(1.2);
          filter: brightness(1);
          box-shadow: 0 0 12px rgba(0,191,255,0.6);
          border-radius: 50%;
        }
        `}
      </style>

    </footer>

  )

}