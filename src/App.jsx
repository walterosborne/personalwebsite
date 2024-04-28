import Home from './personal/Home.jsx';
import About from './personal/About.jsx';
import Professional from './personal/Professional.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import FrenchToast from './frenchtoast/FrenchToast'
import Chapbook from './chapbook/World.jsx'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/aboutme' exact element={<About />} />
                    <Route path='/professional' exact element={<Professional />}></Route>
                    <Route path='/frenchtoast' exact element={<FrenchToast />}></Route>
                    <Route path='/chapbook' exact element={<Chapbook />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App