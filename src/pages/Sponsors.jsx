import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Sponsors() {

  const sponsors = [
    { name: "ScanEra Digital", img: "/sponsors/scanera.png" },
    { name: "SolidWorks", img: "/sponsors/solidworks.jpg" },
    { name: "The Riders Syndicate", img: "/sponsors/riders.png" }
  ]

  return (
    <>
      <Navbar />

      <section style={{
        padding: "120px 40px",
        textAlign: "center",
        background: "#0b0b0b",
        minHeight: "100vh"
      }}>

        <h1 style={{ color: "white" }}>Our Sponsors</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          marginTop: "50px"
        }}>

          {sponsors.map((s, i) => (
            <div key={i}
              data-aos="fade-up"
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "12px"
              }}
            >

              <img
                src={s.img}
                style={{
                  height: "100px",
                  objectFit: "contain"
                }}
              />

              <h3 style={{
                marginTop: "15px",
                color: "black"
              }}>
                {s.name}
              </h3>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  )
}