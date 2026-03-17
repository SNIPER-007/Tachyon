export default function Hero() {
  return (
    <section style={{
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0
        }}
      >
        <source src="/videos/bike.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)"
      }} />

      {/* 🧠 Content */}
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

        <h1
          data-aos="fade-up"
          style={{
            fontSize: "70px",
            letterSpacing: "3px",
            color: "white"
          }}
        >
          TACHYON
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            marginTop: "10px",
            fontSize: "18px",
            opacity: "0.9"
          }}
        >
          <h3> Engineering High Performance Motorcycles</h3>
        </p>

        {/* 🔥 PREMIUM BUTTON */}
        <button
          data-aos="fade-up"
          data-aos-delay="400"
          style={{
            marginTop: "30px",
            padding: "12px 30px",
            background: "red",
            border: "none",
            color: "white",
            fontWeight: "600",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)"
            e.currentTarget.style.background = "#ff3333"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.background = "red"
          }}
          onClick={() => window.location.href = "/bikes"}
        >
          Explore Bikes
        </button>

      </div>

    </section>
  )
}