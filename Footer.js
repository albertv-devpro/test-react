import React from 'react'
import '../styles.css'
import logo from '../assets/mastercard-logo.png' // Make sure this path is correct

const Footer = () => {
  const startYear = 2023
  const currentYear = new Date().getFullYear()
  const displayYear =
    startYear === currentYear ? currentYear : `${startYear}-${currentYear}`

  return (
    <footer className="site-footer">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={logo}
          alt="Mastercard Logo"
          className="logo"
          style={{ width: '80px' }}
        />
        <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
          &copy; {displayYear} CloudPro Blockchain Engineering
        </p>
      </div>
    </footer>
  )
}

export default Footer
