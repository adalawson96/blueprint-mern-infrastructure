import { useState } from 'react';
import * as reviewsMaker from '../../utilities/reviews-maker';
import { useParams } from 'react-router-dom';

export default function EditReview(){
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

    return(
        <>
        <h1>Edit Review</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Text:
                    <input type="text" name="text" id="text" onChange={handleChange} value={ formData.text } />
                </label>
                <input type="submit" value="Add Review" />
            </form>
        </>
    )
}