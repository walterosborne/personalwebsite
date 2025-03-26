import React from 'react';
import './Styles/box.css';
import Navbar from './Navbar.jsx';

function Future() {
    return (
        <>
            <Navbar />
            <img className='bg' src='/Images/Graf.jpg' alt="Background" />
            <div className='outerbox'>
                <div className='colbox'>
                    <div className='innercolbox'>
                        <h2>Future Card Project Earnings</h2>
                        <p>
                            1. Future card is free, and you're spending money on the subway anyway.<br />
                            2. Let's say you hit the OMNY cap 10/12 months of the year:<br />
                            (44 * ((34 * 0.05) + 5)) = 29,480 points<br />
                            3. Additionally let's say you spend $104 at thrift stores per year (not actually necessary, just gets us to an even number):<br />
                            4. 104 * 0.05 = 520 points<br /></p>
                        <p style={{ fontWeight: 'bold' }}>=&gt;Thus the annual spend generates 30k points</p>
                        <p style={{ fontWeight: 'bold' }}>=&gt;Thus after 2 years, you will have 60k points</p>
                        <p>5. Then consider the "Real Real" luxury shopping redemption bonus:<br />
                            12,000 points &gt; $200<br /></p>
                        <p style={{ fontWeight: 'bold' }}>Thus, using the bonus, two years of subway fares would generate =&gt; 60k / 12k = 5 * $200 = $1000<br /></p>
                        <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>∴ FutureCard yields $500 luxury shopping credit per year for free, or $300 cash.</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Future;
