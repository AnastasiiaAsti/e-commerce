import React from 'react'
import "./CheckoutProduct.css";
import StarIcon from '@mui/icons-material/Star';

export default function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
      <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60" alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">Suede green boots that would break hearts and wallets</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>500</strong>
        </p>
        <div className="checkoutProduct__rating"><StarIcon /><StarIcon /><StarIcon /></div>
        <button>Remove Item</button>
      </div>
    </div>
  )
}
