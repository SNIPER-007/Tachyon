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
    <section className="sponsorSection">

      <h2 className="title">Our Sponsors</h2>

      {/* EDGE FADE */}
      <div className="fade-left"></div>
      <div className="fade-right"></div>

      <div className="carousel">
        <div className="track">

          {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((s, i) => (
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

                const rotateX = -(y - centerY) / 25
                const rotateY = (x - centerX) / 25

                e.currentTarget.style.transform =
                  `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
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
          background: #000;
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

        /* 🔥 PERFECT LOOP */
        .track {
          display: flex;
          gap: 50px;
          width: max-content;
          animation: scroll 28s linear infinite;
        }

        .carousel:hover .track {
          animation-play-state: paused;
        }

        /* CARD */
        .card {
          min-width: 220px;

          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);

          padding: 28px;
          border-radius: 14px;

          text-align: center;
          border: 1px solid rgba(255,255,255,0.08);

          cursor: pointer;
          transition: 0.3s;

          transform-style: preserve-3d;
          perspective: 1000px;
        }

        /* PREMIUM HOVER */
        .card:hover {
          box-shadow:
            0 0 25px rgba(0,191,255,0.4),
            0 0 60px rgba(0,191,255,0.15);
        }

        /* IMAGE */
        .card img {
          height: 80px;
          object-fit: contain;

          filter: grayscale(100%) brightness(0.7);
          transition: 0.4s;
        }

        .card:hover img {
          filter: grayscale(0%) brightness(1);
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
          100% { transform: translateX(-25%); }
        }

        /* EDGE FADE STRONGER */
        .fade-left, .fade-right {
          position: absolute;
          top: 0;
          width: 140px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, #000, transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, #000, transparent);
        }

        `}
      </style>

    </section>
  )
}