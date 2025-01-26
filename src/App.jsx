import Home from './personal/Home.jsx';
import About from './personal/About.jsx';
import Professional from './personal/Professional.jsx';
import Blog from './personal/Blog.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import FrenchToast from './frenchtoast/FrenchToast'
import Chapbook from './chapbook/World.jsx'
import Portfolio from './personal/Portfolio.jsx';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/aboutme' exact element={<About />} />
                    <Route path='/professional' exact element={<Professional />} />
                    <Route path='/portfolio' exact element={<Portfolio />} />
                    <Route path='/frenchtoast' exact element={<FrenchToast />} />
                    <Route path='/chapbook' exact element={<Chapbook />} />
                    <Route path='/blog' exact element={<Blog />} />
                </Routes>
            </Router>

            <h3 id='tiny'>What is this 2004 get off your fucking flip phone grandpa and get a wider screen</h3>
        </>
    );
}

export default App;