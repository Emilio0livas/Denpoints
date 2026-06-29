import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SightingsList() {
  const navigate = useNavigate();
  
  const [sightings, setSightings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://bender.cs.csubak.edu/emilio/sightings')
      .then((res) => res.json())
      .then((data) => {
        const records = Array.isArray(data) ? data : (data.sightings || data.data || []);
        setSightings(records);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching live sightings:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="flex-hero" style={{ marginBottom: '24px' }}>
        <h1>Sightings Ledger</h1>
        <button onClick={() => navigate('/submit')}>+ Submit Sighting</button>
      </div>

      {loading ? (
        <p style={{ color: '#9ca3af' }}>Loading live sightings from database...</p>
      ) : sightings.length === 0 ? (
        <p style={{ color: '#9ca3af' }}>No sightings found in the database.</p>
      ) : (
        <div>
          {sightings.map((item, index) => (
            <div key={item.id || index} className="flex-sighting" style={{ borderBottom: '1px solid #f3f4f6', padding: '12px 0' }}>
              <div>
                <div style={{ marginBottom: '4px' }}>
                  {/* 🎯 Using your exact column strings: */}
                  <h3 style={{ display: 'inline', marginRight: '8px' }}>{item.location_name || "Unknown Location"}</h3>
                  <span className="badge" style={{ backgroundColor: '#eff6ff', color: '#1e40af' }}>
                    Observed by: {item.observer_name || "Anonymous"}
                  </span>
                  <span className="badge" style={{ backgroundColor: '#f0fdf4', color: '#166534', marginLeft: '6px' }}>
                    Condition: {item.health_status || "Unknown"}
                  </span>
                </div>
                <p style={{ margin: '4px 0 0 0', color: '#4b5563' }}>
                  {item.notes || "No additional observational notes provided."}
                </p>
              </div>
              <div style={{ fontSize: '12px', color: '#9ca3af', textAlign: 'right', whiteSpace: 'nowrap' }}>
                {item.sighting_date ? item.sighting_date.substring(0, 10) : "Recent"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}