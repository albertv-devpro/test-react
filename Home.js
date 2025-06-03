// src/pages/Home.js
import React, { useState } from 'react'
import InviteForm from '../components/InviteForm'
import '../styles.css'

const Home = () => {
  const [successMessage, setSuccessMessage] = useState('')

  const handleInvite = email => {
    setSuccessMessage(`Invite sent successfully to ${email}! 🎉`)
    // Clear the success message after 5 seconds
    setTimeout(() => setSuccessMessage(''), 5000)
  }

  return (
    <div className="container">
      <h2 className="page-title">Welcome to CloudPro’s Crypto Onboarding</h2>
      <p className="page-subtitle">
        Join the ecosystem by signing up below and be part of the blockchain
        revolution.
      </p>

      <InviteForm onSubmit={handleInvite} />

      {successMessage && (
        <p className="success-message" role="alert" aria-live="polite">
          {successMessage}
        </p>
      )}
    </div>
  )
}

export default Home
