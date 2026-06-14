import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SightingsList() {
  const navigate = useNavigate();

  const staticSightings = [
    { loc: "Kern River Parkway", count: 2, img: "📷 Photo", date: "Jun 9, 2026 19:42", note: "Two juveniles near the dry creek bed, possibly siblings. No adults visible." },
    { loc: "CSUB North Campus", count: 1, img: null, date: "Jun 8, 2026 20:15", note: "Single adult observed at dusk near parking lot C. Appeared healthy." },
    { loc: "Panorama Bluffs", count: 3, img: "📷 Photo", date: "Jun 6, 2026 06:30", note: "Family group — one adult, two pups. Observed for ~10 minutes." },
    { loc: "Alfred Harrell Hwy", count: 1, img: null, date: "Jun 4, 2026 21:00", note: "Fox crossed the road heading east. Brief sighting from vehicle." },
    { loc: "Hart Memorial Park", count: 2, img: "📷 Photo", date: "Jun 2, 2026 07:10", note: "Pair foraging near the ball fields at dawn." }
  ];

  return (
    <div className="bg-white">
      <div className="flex-hero" style={{marginBottom: '24px'}}>
        <h1>Sightings Ledger</h1>
        <button onClick={() => navigate('/submit')}>+ Submit Sighting</button>
      </div>

      <div>
        {staticSightings.map((item, index) => (
          <div key={index} className="flex-sighting">
            <div>
              <div style={{marginBottom: '4px'}}>
                <h3>{item.loc}</h3>
                <span className="badge">{item.count} Fox(es)</span>
                {item.img && <span className="badge" style={{backgroundColor: '#f9fafb', border: '1px solid #e5e7eb'}}>{item.img}</span>}
              </div>
              <p>{item.note}</p>
            </div>
            <div style={{fontSize: '12px', color: '#9ca3af', textAlign: 'right', whiteSpace: 'nowrap'}}>
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}