import React from 'react';

export default function About() {
  return (
    <div className="bg-white">
      <h1>About Denpoints</h1>
      <p style={{fontSize: '16px', marginBottom: '24px'}}>CSUB Software Engineering — Summer 2026</p>
      
      <p style={{marginBottom: '32px'}}>
        Denpoints is a community-driven sighting tracker built to help researchers, students, and conservation groups document San Joaquin Kit Fox activity across Kern County. 
        Kit fox sightings are often never formally recorded, leaving researchers without the data needed to understand population distribution, movement patterns, and habitat use. 
        Denpoints makes it easy for anyone to contribute a sighting in under a minute.
      </p>

      <h2>Project Blueprint Scope</h2>
      <div className="grid-stats" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        <div className="stat-card" style={{textAlign: 'left'}}>
          <h3 style={{marginBottom: '8px'}}>📋 Submit Sightings</h3>
          <p>Log a sighting with date, time, location, fox count, photo, and notes. Validation prevents incomplete records.</p>
        </div>
        <div className="stat-card" style={{textAlign: 'left'}}>
          <h3 style={{marginBottom: '8px'}}>📄 Sightings List</h3>
          <p>Browse all reported sightings, sort by date or fox count, filter by photo, and view full details in a side panel.</p>
        </div>
        <div className="stat-card" style={{textAlign: 'left'}}>
          <h3 style={{marginBottom: '8px'}}>🗺️ Map View</h3>
          <p>Visualize sighting locations as pins on an interactive map — planned for a future sprint once geolocation data is structured.</p>
        </div>
      </div>
    </div>
  );
}