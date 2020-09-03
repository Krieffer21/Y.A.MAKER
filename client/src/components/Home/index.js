import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
    return (

        <div className="main-img-home">

            <div className="hero-text-home">
                <h1 className="bespoke">BESPOKE</h1>
                <h2 className="hand-crafted">Hand Crafted</h2>
                <h1 className="goods">GOODS</h1>
                <h4 className="by">By</h4>
                <img src="/images/Logo-white.svg" alt="logo for HandCrafted Heirloom LLC" className="logo-white" />
            </div>

        </div>


    );
}

export default Home;