import Home from './personal/Home.jsx';
import About from './personal/About.jsx';
import Professional from './personal/Professional.jsx';
import Blog from './personal/Blog.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import FrenchToast from './frenchtoast/FrenchToast'
import Chapbook from './chapbook/World.jsx'
import Portfolio from './personal/Portfolio.jsx';
import Default from './personal/Default.jsx';
import Reviews from './personal/Reviews.jsx';
import ReviewPage from './personal/ReviewPage.jsx';
import FinanceHandbook from './personal/FinanceHandbook.jsx';
import Future from './personal/Future.jsx';
import Finance from './personal/Finance.jsx';
import Reference from './personal/Reference.jsx';

function App() {
    const handleReload = () => {
        window.location.reload(true); // 'true' forces a reload from the server
    };

    return (
        <>

            <Router>
                <Routes>
                    <Route path='/*' exact element={<Default />} />
                    <Route path='/' exact element={<Home />} />
                    <Route path='/aboutme' exact element={<About />} />
                    <Route path='/professional' exact element={<Professional />} />
                    <Route path='/portfolio' exact element={<Portfolio />} />
                    <Route path='/frenchtoast' exact element={<FrenchToast />} />
                    <Route path='/chapbook' exact element={<Chapbook />} />
                    <Route path='/blog' exact element={<Blog />} />
                    <Route path='/reference' exact element={<Reference />} />
                    <Route path='/reference/finance/financehandbook' exact element={<FinanceHandbook />} />
                    <Route path='/reference/finance/future' exact element={<Future />} />
                    <Route path='/reference/finance' exact element={<Finance />} />
                    <Route path='/reviews' exact element={<Reviews />} />
                    <Route path="/review/:title" element={<ReviewPage />} />
                </Routes>
            </Router>

            <h3 id='tiny'>What is this 2004 get off your fucking flip phone grandpa and get a wider screen</h3>
        </>
    );
}

export default App;