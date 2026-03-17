import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Bikes() {

  const bikes = [
    {
      name: "Tachyon X1",
      desc: "High performance racing motorcycle",
      img: "/bikes/x1.jpg"
    },
    {
      name: "Tachyon X2",
      desc: "Advanced aerodynamics and speed",
      img: "/bikes/x2.jpeg"
    }
  ]

  return (
    <>
      <Navbar />

      <section style={{
        width: "100%",
        minHeight: "100vh",
        padding: "120px 40px", // top padding avoids navbar overlap
        textAlign: "center",
        background: "#0b0b0b",
        boxSizing: "border-box"
      }}>

        <h1 style={{ color: "white" }}>Our Motorcycles</h1>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}>

          {bikes.map((bike, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              style={{
                background: "#111",
                padding: "20px",
                width: "300px",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
              }}
            >

              <img
                src={bike.img}
                alt={bike.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />

              <h3 style={{ color: "white" }}>{bike.name}</h3>
              <p style={{ color: "#ccc" }}>{bike.desc}</p>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  )
}