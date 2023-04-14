import {useState, useEffect } from 'react';
import * as reviewsMaker from '../../utilities/reviews-maker';

export default function NotesPage() {
    const [reviews, setReviews] = useState([]);

    useEffect(function(){
        async function getReveiwsRequest(){
            const reviews = await reviewsMaker.getAllReviews(product._id);
            setReviews(reviews);
        }
        getReveiwsRequest();

    }, []);
}

return(
    <>
        <h1>NotesPage</h1>
        
        {reviews ?
        reviews.map(review => <h3>{review.text}</h3> )
        :
        <h3>No Notes Yet</h3>
            
        }
    </>
)

