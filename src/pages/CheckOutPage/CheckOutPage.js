import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal.js';
import "./CheckOutPage.css"

import React from 'react'

export default function CheckOutPagePage() {
  return (
    <div className="checkout">
          <div className="checkout__left">
              <img src="https://myairforcelife.com/wp-content/uploads/2021/07/add-img-1.jpg" alt="" className="checkout__ad" />
              <div>
                  <h2 className="checkout__title">Your Shopping Cart</h2>
                  <CheckoutProduct />
              </div>
          </div>
      <div className="checkout__right">
        <Subtotal/>
          </div>
    </div>
  )
}