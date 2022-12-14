import React from 'react'
import "./CheckoutProduct.css";
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../../StateProvider';


export default function CheckoutProduct({ id, image, title, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }


  return (
    <div className='checkoutProduct'>
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <StarIcon />
                  ))}</div>
        <button onClick={removeFromBasket}>Remove Item</button>
      </div>
    </div>
  )
}
