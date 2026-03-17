export default function Hero() {
  return (
    <section style={{
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* 🎥 Background Video with Cinematic Zoom */}
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
          left: 0,
          animation: "zoom 20s ease-in-out infinite alternate"
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

        {/* Title */}
        <h1
          data-aos="fade-up"
          style={{
            fontSize: "70px",
            letterSpacing: "4px",
            color: "white",
            animation: "fadeSlide 1s ease-out"
          }}
        >
          TACHYON
        </h1>

        {/* Subtitle (FIXED) */}
        <p
  data-aos="fade-up"
  data-aos-delay="200"
  style={{
    marginTop: "10px",
    fontSize: "18px",
    color: "white"
  }}
>
  Engineering High Performance Motorcycles
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
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth"
            })
          }}
        >
          Explore Bikes
        </button>

      </div>

      {/* ⬇️ SCROLL ARROW (BONUS SUPER PRO TIP) */}
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
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

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