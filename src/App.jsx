import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Home from "./pages/Home.jsx"
import Team from "./pages/Team.jsx"
import Bikes from "./pages/Bikes.jsx"
import About from "./pages/About.jsx"
import Sponsors from "./pages/Sponsors.jsx"
import BikeDetails from "./pages/BikeDetails"
import ScrollToTop from "./components/ScrollToTop"

/* 🔥 CURSOR GLOW */
function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div")
    glow.className = "cursor-glow"
    document.body.appendChild(glow)

    const move = (e) => {
      glow.style.left = e.clientX + "px"
      glow.style.top = e.clientY + "px"
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return null
}

/* 🔥 PAGE WRAPPER (TRANSITIONS) */
function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/bikes/:id" element={<BikeDetails />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

/* 🔥 MAIN APP */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CursorGlow />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App