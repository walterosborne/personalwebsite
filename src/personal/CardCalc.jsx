import React from 'react';
import './Styles/box.css';
import Navbar from './Navbar.jsx';

function CardCalc() {
    return (
        <>
            <Navbar />
            <img className='bg' src='/Images/Graf.jpg' alt="Background" />
            <div className='outerbox'>
                <div className='colbox'>
                    <div className='innercolbox'>
                        <h2>Card Calculator Tool</h2>
                        <p>The card calculator is a great tool I made in google sheets that allows you to enter in your credit card and bank account info and keep track of whether you've received bonuses, and it automatically calculates your 5/24 status.</p>
                        <p>Obviously make your own copy so nobody sees your data, and I've made it view only to make sure nobody mistakes it</p>
                        <a href="https://docs.google.com/spreadsheets/d/1ZgSok0mn21qucH7w9bkBFirD3LJkHKbRjGlOFQgvSK4/edit?usp=sharing" style={{ color: 'blue', textDecoration: 'underline' }} target='_blank'>See it here!</a>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCalc;
