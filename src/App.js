import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/zzu-china">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;