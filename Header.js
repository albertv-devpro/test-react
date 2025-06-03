import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'
import logo from '../assets/mastercard-logo.png' // Make sure this path matches your logo location

const Header = () => {
  return (
    <header className="main-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={logo} alt="Mastercard Logo" className="logo" />
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>CloudPro Onboarding</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  )
}

export default Header
