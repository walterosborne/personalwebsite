import React, { useEffect, useState } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'
import { Link } from 'react-router-dom';

const Reviews = () => {

    /*Creates reviews variable and setter*/
    const [allreviews, setAllReviews] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [favorite, setFavorite] = useState('All');

    const pair = (data) => {
        let paired = []
        // Loop through the array, incrementing by 2 each time
        for (let i = 0; i < data.length; i += 2) {
            // Slice the array into chunks of 2 (or less for the last group)
            paired.push(data.slice(i, i + 2));
        }
        return paired
    }

    useEffect(() => {
        // Opens reviews file
        fetch("/Data/Finance Pages.json")
            // Reads response as json
            .then((response) => response.json())
            //Sets reviews to the resulting data
            .then((data) => {
                data.sort((a, b) => {
                    const [monthA, dayA, yearA] = a.lastupdated.split("/").map(num => parseInt(num, 10));
                    const [monthB, dayB, yearB] = b.lastupdated.split("/").map(num => parseInt(num, 10));

                    const dateA = new Date(yearA, monthA - 1, dayA);
                    const dateB = new Date(yearB, monthB - 1, dayB);

                    return dateB - dateA;
                });
                setAllReviews(data)
                setReviews(pair(data));
            });
    }, []);

    useEffect(() => {
        reviews.forEach((review) => {
            if (review[0].gold) { //If marked as gold
                let reviewbox = document.getElementById(review[0].id) //Gets the innerbox
                reviewbox.style.backgroundColor = '#FFDF00'; //Makes it gold
            }
            if (review[1] && review[1].gold) { //If marked as gold
                let reviewbox = document.getElementById(review[1].id) //Gets the innerbox
                reviewbox.style.backgroundColor = '#FFDF00'; //Makes it gold
            }
        });
    }, [reviews]/*Runs on change in reviews variable*/);

    useEffect(() => {
        let filteredreviews = allreviews
        if (favorite != 'All') {
            if (favorite == 'Only Favorites') {
                filteredreviews = filteredreviews.filter(review => { return review.gold })
            }
            else {
                filteredreviews = filteredreviews.filter(review => { return !review.gold })
            }
        }
        setReviews(pair(filteredreviews))
    }, [favorite]/*Runs on change in favorites variable*/);

    const FavoriteSelect = (event) => {
        setFavorite(event.target.value)
    };

    return (
        <>
            <Navbar />
            <img className='bg' src='/Images/grass.jpeg' alt="Background" />
            <div className="scrollable">
                <ul className="col" style={{ marginLeft: "-40px" }}>
                    <div className="rowbox">
                        <h2 style={{ textAlign: 'center' }}>Filters</h2>
                        <div className="row">
                            <div className="col">
                                <h4>Key</h4>
                                <select name="Type" id="type" onChange={FavoriteSelect}>
                                    <option value="All">All</option>
                                    <option value="Only Favorites">Only Key Pieces</option>
                                    <option value="Only Other">Only Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*This grabs the reviews and maps the following for each one*/}
                    {reviews.map((reviewpair) => {
                        // Only map through if the pair has a length of 2
                        if (reviewpair.length === 2) {
                            return (
                                <div className="row">
                                    <div key={reviewpair[0].title + reviewpair[1].title} className="row"> {/* Make sure each pair has a unique key */}
                                        {reviewpair.map((review) => (
                                            <div className="rowbox" key={review.title}>
                                                {/* Creates a rowbox that contains an image and an inner row box as a link to the review */}
                                                <img src={`/Images/${review.img}`} alt={review.img} />
                                                <Link id={review.id} className="innercolbox" to={{ pathname: `/reference/finance/${review.link}`, state: { review } }} >
                                                    <div className="row">{review.gold && <img src="/Images/crown.png" className="crown" />}</div>

                                                    <h2>{review.title}</h2>
                                                    <p>{review.desc}</p>
                                                    <p style={{ fontSize: 'small', fontStyle: 'italic' }}>Last Updated: {review.lastupdated}</p>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                <div key={reviewpair[0].title} className="row"> {/* Make sure each pair has a unique key */}
                                    {reviewpair.map((review) => (
                                        <div className="rowbox" key={review.title}>
                                            {/* Creates a rowbox that contains an image and an inner row box as a link to the review */}
                                            <img src={`/Images/${review.img}`} alt={review.img} />
                                            <Link id={review.id} className="innercolbox" to={{ pathname: `/reference/finance/${review.link}`, state: { review } }} >
                                                <div className="row">{review.gold && <img src="/Images/crown.png" className="crown" />}</div>

                                                <h2>{review.title}</h2>
                                                <p>{review.desc}</p>
                                                <p style={{ fontSize: 'small', fontStyle: 'italic' }}>Last Updated: {review.lastupdated}</p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    })}
                </ul >
            </div >
        </>
    )
}

export default Reviews
