import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

function Product(props) {
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

              <button>Add To Basket</button>
          </div>
  )
}

export default Product