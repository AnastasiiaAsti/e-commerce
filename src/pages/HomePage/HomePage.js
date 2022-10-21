import React from 'react';
import "./HomePage.css";
import Product from "../../components/Product/Product";

export default function HomePage(props) {
  return (
    <div><div>
    <div className="home">
        <div className="home__container">
            <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" className="home__image" />
            <h1 className="home__h1">Find anything that you desire..</h1>
                  <div className="home__row">
                      {props.products.map((product)=> {
                          return <Product key={product.id} product={product}/>
                      })}
                
            </div>

        </div>
    </div>
</div></div>
  )
}
