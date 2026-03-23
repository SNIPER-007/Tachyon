export default function SponsorsCarousel() {

  const sponsors = [
    {
      name: "ScanEra Digital",
      img: "/sponsors/scanera.png",
      link: "https://scanera.digital"
    },
    {
      name: "SolidWorks",
      img: "/sponsors/solidworks.jpg",
      link: "https://www.solidworks.com"
    },
    {
      name: "The Riders Syndicate",
      img: "/sponsors/riders.png",
      link: "https://theriderssyndicate.com"
    }
  ]

  return (
    <section style={{
      padding: "100px 0",
      background: "black",
      overflow: "hidden",
      position: "relative"
    }}>

      <h2 style={{
        textAlign: "center",
        marginBottom: "50px",
        color: "white"
      }}>
        Our Sponsors
      </h2>

      {/* EDGE FADE */}
      <div className="fade-left"></div>
      <div className="fade-right"></div>

      <div className="carousel">
        <div className="track">

          {[...sponsors, ...sponsors, ...sponsors].map((s, i) => (
            <div
              key={i}
              className="card"

              /* 🔥 CLICK */
              onClick={() => window.open(s.link, "_blank")}

              /* 🔥 3D TILT */
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                const centerX = rect.width / 2
                const centerY = rect.height / 2

                const rotateX = -(y - centerY) / 15
                const rotateY = (x - centerX) / 15

                e.currentTarget.style.transform =
                  `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(0deg) rotateY(0deg) scale(1)"
              }}
            >

              <img src={s.img} alt={s.name} />

              <p>{s.name}</p>

            </div>
          ))}

        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
        .carousel {
          overflow: hidden;
        }

        .track {
          display: flex;
          gap: 40px;
          width: max-content;
          animation: scroll 18s linear infinite;
        }

        /* PAUSE ON HOVER */
        .carousel:hover .track {
          animation-play-state: paused;
        }

        /* CARD */
        .card {
          min-width: 220px;
          background: linear-gradient(145deg, #0a0a0a, #050505);
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
          transition: 0.3s;
          cursor: pointer;

          transform-style: preserve-3d;
          perspective: 1000px;
        }

        /* HOVER GLOW */
        .card:hover {
          box-shadow: 0 0 25px rgba(0,191,255,0.4);
        }

        /* IMAGE */
        .card img {
          height: 80px;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.8);
          transition: 0.4s;
        }

        /* COLOR ON HOVER */
        .card:hover img {
          filter: grayscale(0%) brightness(1);
        }

        /* TEXT */
        .card p {
          color: white;
          margin-top: 12px;
          font-size: 14px;
          opacity: 0.8;
        }

        /* SCROLL */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* EDGE FADE */
        .fade-left, .fade-right {
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, black, transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, black, transparent);
        }
        `}
      </style>

    </section>
  )
}