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
      name: "The Race Syndicate",
      img: "/sponsors/race.jpg",
      link: "https://theracersyndicate.com"
    },
    {
      name: "Torque Block",
      img: "/sponsors/torqueblock.png",
      link: "https://torqueblock.com"
    }
  ]

  return (
    <section className="sponsorSection">

      <h2 className="title">Our Sponsors</h2>

      {/* EDGE FADE */}
      <div className="fade-left"></div>
      <div className="fade-right"></div>

      <div className="carousel">
        <div className="track">

          {[...sponsors, ...sponsors, ...sponsors].map((s, i) => (
            <div
              key={i}
              className="card"
              onClick={() => window.open(s.link, "_blank")}

              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top

                const centerX = rect.width / 2
                const centerY = rect.height / 2

                const rotateX = -(y - centerY) / 30
                const rotateY = (x - centerX) / 30

                e.currentTarget.style.transform =
                  `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
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

      <style>
        {`

        .sponsorSection {
          padding: 110px 0;
          background:
            radial-gradient(circle at center, rgba(255,0,0,0.05), transparent),
            #000;

          overflow: hidden;
          position: relative;
        }

        .title {
          text-align: center;
          margin-bottom: 60px;
        }

        .carousel {
          overflow: hidden;
        }

        /* 🔥 SMOOTHER LOOP */
        .track {
          display: flex;
          gap: 50px;
          width: max-content;
          animation: scroll 32s linear infinite;
        }

        .carousel:hover .track {
          animation-play-state: paused;
        }

        /* 🔥 CARD */
        .card {
          min-width: 220px;

          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);

          padding: 28px;
          border-radius: 14px;

          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);

          cursor: pointer;
          transition: 0.3s ease;

          transform-style: preserve-3d;
          perspective: 1000px;
        }

        /* 🔥 HOVER (FERRARI RED) */
        .card:hover {
          box-shadow:
            0 0 25px rgba(255,0,0,0.35),
            0 0 60px rgba(255,0,0,0.08);
        }

        /* IMAGE */
        .card img {
          height: 80px;
          object-fit: contain;

          filter: grayscale(100%) brightness(0.7);
          transition: 0.4s;
        }

        .card:hover img {
          filter: grayscale(0%) brightness(1.1);
        }

        /* TEXT */
        .card p {
          margin-top: 14px;
          font-size: 14px;
          opacity: 0.85;
        }

        /* 🔥 TRUE INFINITE */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        /* 🔥 EDGE FADE (STRONGER + CLEAN) */
        .fade-left, .fade-right {
          position: absolute;
          top: 0;
          width: 160px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, #000 40%, transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, #000 40%, transparent);
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {

          .track {
            gap: 30px;
            animation: scroll 22s linear infinite;
          }

          .card {
            min-width: 180px;
            padding: 20px;
          }

          .card img {
            height: 60px;
          }

        }

        `}
      </style>

    </section>
  )
}