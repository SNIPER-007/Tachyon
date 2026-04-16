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

  const bike = {
    name: "TBD",
    img: "/bikes/tbd.jpg",
    id: "tbd"
  }

  /* 🔥 MOBILE TAP TO EXPAND */
  const handleClick = () => {
    if (isMobile) {
      setActive(active === 0 ? null : 0)
    }
  }

  return (
    <>
      <Navbar />

      <section className="bikesPage page">

        <div className="container">

          <h1 className="title">Our Machine</h1>

          <div className="bikeContainer">

            <div
              className={`bikeCard ${active === 0 ? "active" : ""}`}
              onMouseEnter={!isMobile ? () => setActive(0) : undefined}
              onMouseLeave={!isMobile ? () => setActive(null) : undefined}
              onClick={handleClick}
            >

              {/* 🔥 SIDE TEXT */}
              {!isMobile && (
                <div className="rotatedText">
                  {bike.name}
                </div>
              )}

              {/* 🔥 CONTENT */}
              <div className="content">

                <img src={bike.img} alt="Bike" />

                <button
                  onClick={(e) => {
                    e.stopPropagation() // 🔥 prevent card toggle conflict
                    navigate(`/bikes/${bike.id}`)
                  }}
                >
                  More Details
                </button>

              </div>

            </div>

          </div>

        </div>

        <style>
{`
.bikesPage {
  min-height: 100vh;
  padding: 120px 20px 100px;

  background:
    radial-gradient(circle at 30% 20%, rgba(255,0,0,0.08), transparent),
    radial-gradient(circle at 80% 80%, rgba(255,0,0,0.05), transparent),
    #000;
}

.title {
  text-align: center;
  margin-bottom: 70px;
}

/* 🔥 CONTAINER */
.bikeContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
}

/* 🔥 CARD */
.bikeCard {
  width: 120px;
  height: 100%;

  position: relative;
  border-radius: 18px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.5s ease;

  background: linear-gradient(145deg, #0a0a0a, #050505);
  border: 1px solid rgba(255,255,255,0.08);

  filter: brightness(0.7);
}

.bikeCard:hover {
  filter: brightness(1);
}

/* 🔥 EXPAND */
.bikeCard.active {
  width: 700px;

  background: linear-gradient(135deg, #140000, #000);

  box-shadow:
    0 0 40px rgba(255,0,0,0.25),
    0 0 80px rgba(255,0,0,0.1);
}

/* 🔥 SIDE TEXT */
.rotatedText {
  transform: rotate(-90deg);
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 0.8;
}

.bikeCard.active .rotatedText {
  opacity: 0;
}

/* 🔥 CONTENT */
.content {
  position: absolute;
  inset: 0;
  opacity: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
  padding: 20px;

  transition: 0.4s;
}

.bikeCard.active .content {
  opacity: 1;
}

/* 🔥 IMAGE */
.content img {
  width: 100%;
  max-height: 260px;
  object-fit: contain;
}

/* 🔥 BUTTON */
button {
  padding: 12px 26px;

  background: linear-gradient(45deg, #ff0000, #ff4d4d);
  border: none;
  border-radius: 6px;
  color: white;

  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.08);
  box-shadow: 0 0 25px rgba(255,0,0,0.7);
}

/* 📱 MOBILE */
@media (max-width: 768px) {

  .bikeContainer {
    height: auto;
  }

  .bikeCard {
    width: 100%;
    height: auto;
    padding: 20px;
    filter: brightness(1);
  }

  .content {
    position: relative;
    opacity: 1;
  }

  .content img {
    max-height: 200px;
  }

}
`}
</style>

      </section>

      <Footer />
    </>
  )
}