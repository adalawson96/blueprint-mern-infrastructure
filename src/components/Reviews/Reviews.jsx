import { useState, useEffect } from 'react';
import * as reviewsMaker from '../../utilities/reviews-maker';
import { Link } from 'react-router-dom';

export default function Reviews({ product, user }) {
    const [reviews, setReviews] = useState([]);

    useEffect(function () {
        async function getReviews() {
            const reviews = await reviewsMaker.getAllReviews(product._id);
            setReviews(reviews);
        }
        getReviews();
    }, [product._id]);

    async function deleteReview(id) {
        await reviewsMaker.deleteOneReview(id);
    }

    return (
        <>
            <h1>Reviews</h1>

            {reviews ?
                reviews.map(review =>
                    <div>
                        <h3>{review.text}</h3>
                        <Link to={`/items/reviews/${review._id}`}>
                            {review.user === user._id ? <div className='buttons'><button>Edit</button>
                                <button onClick={() => deleteReview(review._id)}>Delete </button> </div> : ''}
                        </Link>
                    </div>
                )
                :
                <h3>No reviews Yet</h3>
            }
        </>
    );
}
