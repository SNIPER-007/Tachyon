import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Bikes() {

  const [active, setActive] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const navigate = useNavigate()

  /* 🔥 RESPONSIVE DETECTION */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const bikes = [
    {
      name: "Tachyon X1",
      desc: "High performance racing machine",
      img: "/bikes/x1.jpg",
      id: "x1"
    },
    {
      name: "Tachyon X2",
      desc: "Advanced aerodynamics and speed",
      img: "/bikes/x2.jpeg",
      id: "x2"
    }
  ]

  const handleClick = (i) => {
    if (isMobile) {
      setActive(active === i ? null : i)
    }
  }

  return (
    <>
      <Navbar />

      <section className="bikesPage page">

        <div className="container">

          <h1 className="title">Our Motorcycles</h1>

          <div className="bikeContainer">

            {bikes.map((bike, i) => (
              <div
                key={i}
                className={`bikeCard ${active === i ? "active" : ""}`}
                onMouseEnter={!isMobile ? () => setActive(i) : undefined}
                onMouseLeave={!isMobile ? () => setActive(null) : undefined}
                onClick={() => handleClick(i)}
              >

                {!isMobile && (
                  <div className="rotatedText">
                    {bike.name}
                  </div>
                )}

                <div className="content">

                  <img src={bike.img} alt={bike.name} />

                  <h2>{bike.name}</h2>
                  <p>{bike.desc}</p>

                  <button onClick={() => navigate(`/bikes/${bike.id}`)}>
                    Explore Machine
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

        <style>
{`
.bikesPage {
  min-height: 100vh;
  padding: 120px 20px 100px;

  background:
    radial-gradient(circle at 30% 20%, rgba(0,191,255,0.08), transparent),
    radial-gradient(circle at 80% 80%, rgba(255,0,0,0.06), transparent),
    #000;
}

.title {
  text-align: center;
  margin-bottom: 70px;
}

.bikeContainer {
  display: flex;
  gap: 20px;
  height: 420px;
}

/* CARD */
.bikeCard {
  flex: 1;
  position: relative;
  border-radius: 18px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.5s ease;

  background: linear-gradient(145deg, #0a0a0a, #050505);
  border: 1px solid rgba(255,255,255,0.1);

  filter: brightness(0.7);
}

.bikeCard:hover {
  filter: brightness(1);
}

.bikeCard.active {
  flex: 4;
  background: linear-gradient(135deg, #0a1f2c, #000);

  box-shadow:
    0 0 40px rgba(0,191,255,0.25),
    0 0 80px rgba(0,191,255,0.1);
}

/* SIDE TEXT */
.rotatedText {
  transform: rotate(-90deg);
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 0.8;
}

.bikeCard.active .rotatedText {
  opacity: 0;
}

/* CONTENT */
.content {
  position: absolute;
  inset: 0;
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  text-align: center;

  transition: 0.5s;
}

.bikeCard.active .content {
  opacity: 1;
}

/* IMAGE */
.content img {
  width: 100%;
  height: 220px;
  object-fit: contain;
  margin-top: 10px;
}

/* TEXT */
.content h2 {
  margin-top: 10px;
}

.content p {
  font-size: 14px;
  opacity: 0.8;
}

/* BUTTON */
.content button {
  margin-bottom: 10px;
  padding: 12px 24px;
  background: linear-gradient(45deg, #ff0000, #ff4d4d);
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

/* 📱 MOBILE (FINAL FIX) */
@media (max-width: 768px) {

  .bikeContainer {
    flex-direction: column;
    height: auto;
    gap: 25px;
  }

  .bikeCard {
    height: auto;
    padding: 20px;
    filter: brightness(1);
  }

  .content {
    position: relative;
    opacity: 1; /* 🔥 ALWAYS VISIBLE */
  }

  .content img {
    height: 180px;
  }

}
`}
</style>

      </section>

      <Footer />
    </>
  )
}