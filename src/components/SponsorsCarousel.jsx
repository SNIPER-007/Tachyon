export default function SponsorsCarousel() {

  const sponsors = [
    { name: "ScanEra Digital", img: "/sponsors/scanera.png" },
    { name: "SolidWorks", img: "/sponsors/solidworks.jpg" },
    { name: "The Riders Syndicate", img: "/sponsors/riders.png" }
  ]

  return (
    <section style={{
      padding: "80px 0",
      background: "black",
      overflow: "hidden"
    }}>

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Sponsors
      </h2>

      <div style={{
        display: "flex",
        gap: "30px",
        width: "fit-content",
        animation: "scroll 15s linear infinite"
      }}>

        {[...sponsors, ...sponsors].map((s, i) => (
          <div key={i} style={{
            minWidth: "220px",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center"
          }}>

            <img
              src={s.img}
              style={{
                height: "80px",
                objectFit: "contain"
              }}
            />

            <p style={{
              color: "black",
              marginTop: "10px",
              fontWeight: "500"
            }}>
              {s.name}
            </p>

          </div>
        ))}

      </div>

      <style>
        {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>

    </section>
  )
}