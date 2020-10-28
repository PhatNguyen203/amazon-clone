import React from 'react';
import './payment.css';

import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue() 
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout: {basket?.length} items</h1>
                <div className='payment__Section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Houston, TX</p>
                    </div>
                </div>
                <div className='payment__Section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                image={item.image}
                                title= {item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__Section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment