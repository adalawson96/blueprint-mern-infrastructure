import * as itemsAPI from '../../utilities/items-api';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import NewReview from '../../components/NewReview/NewReview';
import Reviews from '../../components/Reviews/Reviews';

export default function DetailPage ({ productItem }) {
    const [ product, setProduct] = useState ( '')
    let { itemsId } = useParams()
    useEffect(() => {
        async function getItem(){
            const item = await itemsAPI.getById( itemsId )
            setProduct( item )
        }
        getItem()
     }, [])

    return(
        <>
        <img classNmae='image' src={product.image} alt=""/>
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
        <h3>{product.detail}</h3>
        <br />
        <Reviews
        product={product}
        user={ user } />
        <NewReview />
        </>
    );
}