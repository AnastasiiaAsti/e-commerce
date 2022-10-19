import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" className="home__image" />
                    <div className="home__row">
                        <Product />
                        <Product />
                    </div>
                    <div className="home__row">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="home__row">
                        <Product />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home