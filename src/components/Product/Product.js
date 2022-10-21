import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from "../../StateProvider";

function Product(props) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
    };

  return (
          <div className="product">
              <div className="product__info">
              <p>{props.product.title}</p>
                  <p className="prodect__price">
                      <small>$</small>
                  <strong>{props.product.price}</strong>
                  </p>
              <div className="product__rating">
                  {Array(props.product.rating)
                      .fill()
                      .map((_, i) => (
                        <StarIcon />
                  ))}
                  </div>
              </div>
              <img src={props.product.image} alt="" />

              <button onClick={addToBasket}>Add To Basket</button>
          </div>
  )
}

export default Product