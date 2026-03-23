import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Lenis from 'lenis'
import { useEffect } from 'react'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08   // 🔥 smoothness control
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScroll />
    <App />
  </React.StrictMode>,
)