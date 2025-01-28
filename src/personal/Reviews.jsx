import React, { useEffect, useState } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'
import { Link } from 'react-router-dom';

const Reviews = () => {

    /*Creates reviews variable and setter*/
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Opens reviews file
        fetch("Data/Reviews.json")
            // Reads response as json
            .then((response) => response.json())
            //Sets reviews to the resulting data
            .then((data) => {
                setReviews(data);
            });


    }, []);

    useEffect(() => {
        reviews.forEach((review) => {
            if (review.gold) { //If marked as gold
                let reviewbox = document.getElementById(review.id) //Gets the innerbox
                reviewbox.style.backgroundColor = '#FFDF00'; //Makes it gold
            }
        });
    }, [reviews]/*Runs on change in reviews variable*/);

    return (
        <>
            <Navbar />
            <img className='bg' src='Images/grass.jpeg' alt="Background" />
            <div className='outerbox'>
                <ul className="colbox">
                    {/*This grabs the reviews and maps the following for each one*/}
                    {reviews.map((review) => (
                        <div className="rowbox" key={review.title}>
                            {/* Creates a rowbox that contains an image and an inner row box as a link to the review */}
                            <img src={`Images/${review.img}`} alt={review.img} />
                            <Link id={review.id} className="innercolbox" to={{ pathname: `/review/${review.id}`, state: { review } }} >
                                <h4>{review.group}</h4>
                                {review.gold && <img src="Images/crown.png" style={{ height: '20px', width: '20px', margin: 0 }} />}
                                <h2>{review.title}</h2>
                                <p>{review.desc}</p>
                                <p style={{ fontSize: 'small', fontStyle: 'italic' }}>Last Updated: {review.lastupdated}</p>
                            </Link>
                        </div>
                    ))}
                </ul>
            </div >
        </>
    )
}

export default Reviews
