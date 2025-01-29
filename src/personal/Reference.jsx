import React, { useEffect, useRef } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'
import { Link } from 'react-router-dom';

const Reference = () => {

    return (
        <>
            <Navbar></Navbar>
            <img className='bg' src='Images/meandmike.png' alt="Background" />
            <div className="outerbox">
                <div className="row">
                    <div className="colbox">
                        <img src="/Images/money.jpg" alt="" />
                        <Link className='innercolbox' to="/reference/finance">
                            <h2>Finance</h2>
                            <p>My opinions on the best ways I've found to stretch a dollar</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reference
