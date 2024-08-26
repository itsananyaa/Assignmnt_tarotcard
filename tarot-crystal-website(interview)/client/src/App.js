// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Bookings from './components/Bookings';
import Shop from './components/Shop';
import Newsletter from './components/Newsletter';
import NotFound from './components/NotFound';
import './App.css'; // Import CSS file for App component styling if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
