import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubmitSighting() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prototype Submission Triggered! Routing directly to listing view.");
    navigate('/sightings');
  };

  return (
    <div style={{maxWidth: '768px', margin: '0 auto'}}>
      <p style={{cursor: 'pointer', marginBottom: '16px'}} onClick={() => navigate('/')}>← Back to Dashboard</p>
      
      <div className="bg-white">
        <h2>Report a Sighting</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div><label>Date *</label><input type="date" required /></div>
            <div><label>Time *</label><input type="time" required /></div>
          </div>
          <div style={{marginBottom: '16px'}}>
            <label>Location *</label>
            <input type="text" required placeholder="Place name or address (e.g. Kern River Parkway)" />
          </div>
          <div className="form-grid">
            <div><label>Latitude (Optional)</label><input type="text" placeholder="35.3733" /></div>
            <div><label>Longitude (Optional)</label><input type="text" placeholder="-119.0187" /></div>
          </div>
          <div style={{marginBottom: '16px'}}>
            <label>Number of Foxes Observed *</label>
            <input type="number" min="1" defaultValue="1" required />
          </div>
          <div style={{marginBottom: '24px'}}>
            <label>Photo (Optional)</label>
            <div className="placeholder-box" style={{padding: '16px'}}>Click to upload files (Mock Framework)</div>
          </div>
          <button type="submit" style={{width: '100%'}}>Submit Record</button>
        </form>
      </div>
    </div>
  );
}