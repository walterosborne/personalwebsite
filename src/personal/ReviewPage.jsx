import React, { useEffect, useState } from "react"; // Import React and hooks for state and side effects
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

// Component to render the individual review page
const ReviewPage = ({ }) => {
    const [review, setReview] = useState(null);
    const [clipIndex, setClip] = useState(0);
    const [autoplay, setAutoplay] = useState('');
    const reviewId = window.location.pathname.split("/")[2]; // Extract the review ID from the URL

    useEffect(() => {
        // Opens reviews file; requires going back one further because its in 'review'
        fetch("../Data/Reviews.json")
            // Reads response as json
            .then((response) => response.json())
            //Sets reviews to the resulting data
            .then((data) => {
                const foundReview = data.find((r) => r.id === parseInt(reviewId));
                setReview(foundReview); // Set the review state with the found review
            });
    }, [reviewId]);

    if (!review) {
        return (<h2>Loading...</h2>)
    }
    else {

        return (
            <>
                <Navbar />
                <img className='bg' src={`/Images/${review.img}`} alt="Background" />
                <Link to={"/waltspicks"} className="back">
                    <img src="/Images/back.webp" alt="Go Back" className="backbtn" />
                    <h5>Back to Walt's Picks</h5>
                </Link>
                <div className='scrollable'>
                    <div className="col" style={{ minHeight: '100%' }}>
                        <div className="colbox">
                            <div className="col">
                                <h2>{review.title}</h2>
                                {review.reviewlines.map((line) => (
                                    /*If line is just a string, renders a paragraph*/
                                    typeof line === "string" ? (
                                        <p>{line}</p>
                                    ) :
                                        /*If not a string and the dict has a url, renders line linked to url with an a tag*/
                                        (

                                            <p>
                                                <a href={line.url} target={line.newtab} rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>{line.text}</a>
                                            </p>
                                        )
                                ))}
                            </div>
                            {review.clips && <div className="innerrowbox">
                                <iframe key={clipIndex} src={review.clips[clipIndex]['link'] + autoplay} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                <div className="clipcontainer">
                                    <div className="col">
                                        {review.clips.map((clip) => (
                                            <div key={clip['clip']} className="clipper" onClick={() => { setClip(clip.clip); setAutoplay('&autoplay=1'); }}>
                                                <h3 >{clip['title']}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ReviewPage;