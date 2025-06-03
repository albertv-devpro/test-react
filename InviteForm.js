// src/components/InviteForm.js
import React, { useState } from 'react'
import '../styles.css'

const InviteForm = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // success or error message
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      console.log('Sending invite for email:', email)

      const response = await fetch('http://localhost:8086/api/invites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      console.log('Response status:', response.status)

      if (response.ok) {
        setStatus({ type: 'success', message: `Invite sent to ${email}!` })
        setEmail('')
      } else {
        const errorData = await response.json()
        console.error('Error response from server:', errorData)
        setStatus({
          type: 'error',
          message: errorData.message || 'Failed to send invite.',
        })
      }
    } catch (error) {
      console.error('Network error:', error)
      setStatus({
        type: 'error',
        message: 'Network error. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="email">Enter your email to receive an invite:</label>
      <input
        id="email"
        type="email"
        value={email}
        placeholder="you@example.com"
        onChange={e => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Request Invite'}
      </button>

      {status && (
        <p
          className={
            status.type === 'success' ? 'success-message' : 'error-message'
          }
        >
          {status.message}
        </p>
      )}
    </form>
  )
}

export default InviteForm
