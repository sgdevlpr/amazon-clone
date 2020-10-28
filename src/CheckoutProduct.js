import React from 'react'
import { useStateValue } from './StateProvider';
import './checkoutProduct.css'

function CheckoutProduct({ id, title, imgURL, price, ratings }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img
                class='checkoutProduct_image'
                src={imgURL}
                alt=''
            />

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(ratings)
                        .fill()
                        .map((_) => (
                            <p>&#x2B50;</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
