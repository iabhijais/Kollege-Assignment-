import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TechUniversity from './pages/TechUniversity';
import GlobalInstitute from './pages/GlobalInstitute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-university" element={<TechUniversity />} />
        <Route path="/global-institute" element={<GlobalInstitute />} />
      </Routes>
    </Router>
  );
}

export default App;
