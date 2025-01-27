import React, { useEffect, useState } from "react"; // Import React and hooks for state and side effects

// Component to render the individual review page
const ReviewPage = ({ }) => {
    const [review, setReview] = useState(null);
    const reviewId = window.location.pathname.split("/")[2]; // Extract the review ID from the URL

    useEffect(() => {
        fetch("/reviews.json") // Fetch the reviews.json file
            .then((response) => response.json()) // Convert the response to JSON
            .then((data) => {
                // Find the review that matches the ID from the URL parameter
                const foundReview = data.find((r) => r.id === parseInt(reviewId));
                setReview(foundReview); // Set the review state with the found review
            });
    }, [reviewId]); // Depend on reviewId so the effect reruns when the ID changes

    return (
        <div>
            {/* If the review has been fetched, display its title */}
            {review ? (
                <h2>{review.title}</h2>
            ) : (
                // If the review hasn't been fetched yet, show a loading message
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ReviewPage;