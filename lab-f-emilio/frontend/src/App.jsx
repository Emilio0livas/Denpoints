import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'; // Notice: BrowserRouter/Router is removed from here
import Dashboard from './components/Dashboard';
import SubmitSighting from './pages/SubmitSighting';
import SightingsList from './components/SightingsList';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Global Navigation Header */}
      <header className="bg-[#0b0f19] text-white px-8 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight flex items-center">
            🦊 Denpoints
          </span>
        </div>
        <nav className="flex space-x-1 sm:space-x-4 text-sm font-medium">
          <NavLink 
            to="/" 
            className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#1e293b] text-white' : 'text-gray-300 hover:text-white'}`}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/submit" 
            className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#1e293b] text-white' : 'text-gray-300 hover:text-white'}`}
          >
            Submit Sighting
          </NavLink>
          <NavLink 
            to="/sightings" 
            className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#1e293b] text-white' : 'text-gray-300 hover:text-white'}`}
          >
            Sightings
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#1e293b] text-white' : 'text-gray-300 hover:text-white'}`}
          >
            About
          </NavLink>
        </nav>
      </header>

      {/* Main Workspace Viewport */}
      <main className="max-w-7xl mx-auto p-4 sm:p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/submit" element={<SubmitSighting />} />
          <Route path="/sightings" element={<SightingsList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;