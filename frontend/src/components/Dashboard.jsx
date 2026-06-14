import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="note-banner">
        📌 <strong>Prototype Note:</strong> Client-side interactive mockup framework. Routes handle target visualization natively without backend mutation.
      </div>

      <div className="bg-white flex-hero">
        <div>
          <h1>San Joaquin Kit Fox Tracker</h1>
          <p>
            A community-driven platform for recording and monitoring kit fox sightings across Kern County. 
            Submit observations, explore the map, and help researchers track local fox activity.
          </p>
        </div>
        <button onClick={() => navigate('/submit')}>+ Submit Sighting</button>
      </div>

      <div className="grid-stats">
        <div className="stat-card"><div className="stat-val">47</div><div className="stat-lbl">Total Sightings</div></div>
        <div className="stat-card"><div className="stat-val">12</div><div className="stat-lbl">This Month</div></div>
        <div className="stat-card"><div className="stat-val">8</div><div className="stat-lbl">Active Zones</div></div>
        <div className="stat-card"><div className="stat-val">19</div><div className="stat-lbl">Contributors</div></div>
      </div>

      <div className="bg-white">
        <h2>Sighting Locations</h2>
        <div className="placeholder-box">
          <p style={{fontSize: '24px', margin: '0 0 8px 0'}}>🗺️</p>
          <p>Map view is a planned feature. In a future sprint this area will render a Leaflet or Mapbox map with interactive geographic markers.</p>
        </div>
      </div>
    </div>
  );
}