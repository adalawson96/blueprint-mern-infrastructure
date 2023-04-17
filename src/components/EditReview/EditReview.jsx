import { useState, useEffect } from 'react';
import * as reviewsMaker from '../../utilities/reviews-maker';
import { useParams } from 'react-router-dom';

export default function EditReview({ user }){
    const [reviewOwner, setReviewOwner] = useState('')
    const [formData, setFormData] = useState({
        text: '',
    });
    let {id} = useParams();
    function handleChange(evt) {
        setFormData({...formData, [evt.target.name] : evt.target.value})
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedReview = await reviewsMaker.updateReview(id, formData);
        console.log(updatedReview)
        setFormData('');
    }

    useEffect(function() {
        async function getReview(){
            const review = await reviewsMaker.findOneReview(id)
            setReviewOwner(review[0].user)
            console.log(user)
        }
        getReview();
    }, []);

    let disable = reviewOwner  === user._id ? false : true

    return(
        <>
        <h1>Edit Review</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Text:
                    <input type="text" name="text" id="text" onChange={handleChange} value={ formData.text } />
                </label>
                <input type="submit" value="Edit Review" disabled={disable} />
            </form>
        </>
    )
}