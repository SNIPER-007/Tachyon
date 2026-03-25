import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Loader from './components/Loader.jsx'   // 🔥 ADD THIS

import Lenis from 'lenis'
import { useEffect } from 'react'
import './index.css'

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08
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
    <Loader> {/* 🔥 WRAP APP */}
      <SmoothScroll />
      <App />
    </Loader>
  </React.StrictMode>,
)