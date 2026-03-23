import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Team from "./pages/Team.jsx"
import Bikes from "./pages/Bikes.jsx"
import About from "./pages/About.jsx"
import Sponsors from "./pages/Sponsors.jsx"
import BikeDetails from "./pages/BikeDetails"
import ScrollToTop from "./components/ScrollToTop"
  
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/bikes/:id" element={<BikeDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
import { useEffect } from "react"

function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div")
    glow.className = "cursor-glow"
    document.body.appendChild(glow)

    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px"
      glow.style.top = e.clientY + "px"
    })
  }, [])

  return null
}
export default App