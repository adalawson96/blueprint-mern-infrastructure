import{ useState } from 'react';
import * as reviewsMaker from '../../utilities/reviews-maker';

export default function NewReviewPage({ product }){
    const [review, setReview] = useState({
        text:'',
        product: product._id
    })

    function handleChange(evt) {
        setReview({...review, [evt.target.name] : evt.target.value})
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const createdReview = await reviewsMaker.createdReview(review);
        setReview('');
        console.log(createdReview)
    }

    return(
        <>
            <h1>New Review</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Text:
                    <input type="text" name="text" id="text" onChange={handleChange} value={ review.text } />
                </label>
                <input type="submit" value="Add Review" />
            </form>
        </>
    );
}
