import React from 'react';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

function Product() {
  return (
          <div className="product">
              <div className="product__info">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nam!</p>
                  <p className="prodect__price">
                      <small>$</small>
                      <strong>30</strong>
                  </p>
                  <div className="product__rating"><StarIcon /><StarIcon /><StarIcon /></div>
              </div>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

              <button>Add To Basket</button>
          </div>
  )
}

export default Product