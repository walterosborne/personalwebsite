import Home from './Home.js';
import About from './About.js';
import Professional from './Professional.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/aboutme' exact element={<About />} />
          <Route path='/professional' exact element={<Professional />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
