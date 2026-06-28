import { useState } from 'react'
import { API_BASE_URL } from '../api.js'

function SubmitSighting() {
  const [observerName, setObserverName] = useState('')
  const [sightingDate, setSightingDate] = useState('')
  const [locationName, setLocationName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
    setError('')
    setSubmitting(true)

    const newSighting = {
      observer_name: observerName,
      sighting_date: sightingDate,
      location_name: locationName
    }

    try {
      const response = await fetch(`${API_BASE_URL}/sightings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSighting)
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const result = await response.json()
      setMessage(`Sighting created with ID ${result.id}. Check the Sightings page to see the new record.`)
      setObserverName('')
      setSightingDate('')
      setLocationName('')
    } catch (err) {
      console.error(err)
      setError('Could not create the sighting. Check your API URL and backend.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section style={{ padding: '20px' }}>
      <h2>Submit Sighting</h2>
      <p>This form sends a POST request to the Express/MySQL API.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Observer name
          <input
            type="text"
            value={observerName}
            onChange={(event) => setObserverName(event.target.value)}
            required
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Sighting date
          <input
            type="date"
            value={sightingDate}
            onChange={(event) => setSightingDate(event.target.value)}
            required
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Location name
          <input
            type="text"
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
            placeholder="Example: CSUB campus"
            required
          />
        </label>

        <button type="submit" disabled={submitting} style={{ padding: '8px', cursor: 'pointer', width: '150px' }}>
          {submitting ? 'Submitting...' : 'Submit Sighting'}
        </button>
      </form>

      {message && <p style={{ color: 'green', marginTop: '15px' }}>{message}</p>}
      {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
    </section>
  )
}

export default SubmitSighting