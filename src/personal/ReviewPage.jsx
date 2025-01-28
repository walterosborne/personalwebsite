import React, { useEffect, useState } from "react"; // Import React and hooks for state and side effects
import Navbar from "./Navbar";

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
                <div className='outerbox'>
                    <div className="colbox">
                        <div className="col">
                            <h2>{review.title}</h2>
                            {review.reviewlines.map((line) => (
                                <p>{line}</p>
                            ))}
                        </div>
                        {review.clips && <div className="innerrowbox">
                            <iframe key={clipIndex} src={review.clips[clipIndex]['link'] + autoplay} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                            <div className="col">
                                {review.clips.map((clip) => (
                                    <div key={clip['clip']} className="clipper" onClick={() => { setClip(clip.clip); setAutoplay('&autoplay=1'); console.log(review.clips[clipIndex]['link'] + autoplay) }}>
                                        <h2 >{clip['title']}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>}
                    </div>
                </div>
            </>
        );
    }
};

export default ReviewPage;