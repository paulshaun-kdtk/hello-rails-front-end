import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';
import Trial from './components/Trial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/test" element={<Trial />} />
      </Routes>
    </Router>
  );
}

export default App;
