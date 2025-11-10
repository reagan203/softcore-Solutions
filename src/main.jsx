import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// Initialize GSAP with defaults
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8
})

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh()
})
