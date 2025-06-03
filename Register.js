import React, { useState } from 'react'
import axios from 'axios'
import '../styles.css'

const Register = () => {
  const [user, setUser] = useState({ name: '', walletAddress: '' })
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')
    try {
      const response = await axios.post(
        'http://localhost:8086/api/register',
        user,
      )
      setSuccessMessage(response.data)
      setUser({ name: '', walletAddress: '' })

      setTimeout(() => setSuccessMessage(''), 5000)
    } catch (error) {
      if (error.response && error.response.data) {
        // Show validation or backend error message
        setErrorMessage(error.response.data)
      } else {
        setErrorMessage('Registration failed. Please try again.')
      }
      console.error('Registration error:', error)
    }
  }

  return (
    <div className="container">
      <h2 className="page-title">Register Your Blockchain Credentials</h2>
      <p className="page-subtitle">
        Provide your name and wallet address to complete your registration on
        the blockchain network.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Wallet Address"
          value={user.walletAddress}
          onChange={e => setUser({ ...user, walletAddress: e.target.value })}
          required
        />
        <button type="submit">Register</button>
      </form>

      {successMessage && (
        <p className="success-message" role="alert" aria-live="polite">
          {successMessage}
        </p>
      )}

      {errorMessage && (
        <p className="error-message" role="alert" aria-live="polite">
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export default Register
