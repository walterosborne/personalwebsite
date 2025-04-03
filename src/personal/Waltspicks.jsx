import React, { useEffect, useState } from "react"
import Navbar from './Navbar.jsx';
import './Styles/styles.css'
import './Styles/box.css'
import { Link } from 'react-router-dom';

const Reviews = () => {

    /*Creates reviews variable and setter*/
    const [allreviews, setAllReviews] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [mediums, setMediums] = useState([]);
    const [medium, setMedium] = useState('All');
    const [types, setTypes] = useState([]);
    const [type, setType] = useState('All');
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
        fetch("Data/Reviews.json")
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
                const mediums = ['All'].concat([...new Set(data.map(item => item.medium))])
                setMediums(mediums)
                const types = ['All'].concat([...new Set(data.map(item => item.reviewtype))])
                setTypes(types)
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
        if (medium != 'All') {
            filteredreviews = filteredreviews.filter(review => review.medium == medium)
        }
        if (type != 'All') {
            filteredreviews = filteredreviews.filter(review => review.reviewtype == type)
        }
        if (favorite != 'All') {
            if (favorite == 'Only Favorites') {
                filteredreviews = filteredreviews.filter(review => { return review.gold })
            }
            else {
                filteredreviews = filteredreviews.filter(review => { return !review.gold })
            }
        }
        setReviews(pair(filteredreviews))
    }, [medium, type, favorite]/*Runs on change in medium,type,or favorites variable*/);


    const MediumChange = (event) => {
        setMedium(event.target.value)
    };
    const TypeChange = (event) => {
        setType(event.target.value)
    };
    const FavoriteSelect = (event) => {
        setFavorite(event.target.value)
    };

    return (
        <>
            <Navbar />
            <img className='bg' src='Images/grass.jpeg' alt="Background" />
            <div className="scrollable">
                <ul className="col" style={{ marginLeft: "-40px" }}>
                    <div className="colbox">
                        <h2>Filters</h2>
                        <div className="row">
                            <div className="col">
                                <h4>Medium</h4>
                                <select name="Medium" id="medium" onChange={MediumChange}>
                                    {mediums.map((medium) => {
                                        return <option value={medium}>{medium}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col">
                                <h4>Type</h4>
                                <select name="Type" id="type" onChange={TypeChange}>
                                    {types.map((type) => {
                                        return <option value={type}>{type}</option>
                                    })}
                                </select>
                            </div>
                            <div className="col">
                                <h4>Favorite</h4>
                                <select name="Type" id="type" onChange={FavoriteSelect}>
                                    <option value="All">All</option>
                                    <option value="Only Favorites">Only Favorites</option>
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
                                                <img src={`Images/${review.img}`} alt={review.img} />
                                                <Link id={review.id} className="innercolbox" to={{ pathname: `/review/${review.id}`, state: { review } }} >
                                                    <div className="row">{review.gold && <img src="Images/crown.png" className="crown" />}<h4>{review.medium}</h4></div>

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
                                            <img src={`Images/${review.img}`} alt={review.img} />
                                            <Link id={review.id} className="innercolbox" to={{ pathname: `/review/${review.id}`, state: { review } }} >
                                                <div className="row">{review.gold && <img src="Images/crown.png" className="crown" />}<h4>{review.medium}</h4></div>

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
