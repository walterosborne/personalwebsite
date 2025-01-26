import Home from './Images/Home.js';
import About from './Images/About.js';
import Professional from './Professional.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/aboutme' exact element={<About />} />
          <Route path='/portfolio' exact element={<Professional />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
