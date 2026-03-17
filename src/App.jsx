import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Team from "./pages/Team.jsx"
import Bikes from "./pages/Bikes.jsx"
import About from "./pages/About.jsx"
import Sponsors from "./pages/Sponsors.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App