// src/pages/Success.js
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

const Success = () => {
  return (
    <div className="container">
      <div className="success-box">
        <h2 className="page-title">🎉 Registration Successful!</h2>
        <p className="page-subtitle">
          You're now part of CloudPro’s crypto ecosystem.
        </p>
        <p>Check your inbox for further details.</p>
        <Link to="/" className="btn-link">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default Success
