import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function PayConfrim() {
  return (
    <section className="container">
      <div className="row">
        <div className="mx-auto mt-5">
          <h2 className="payment">
            Thank You For Your Order
      </h2>
          <div className="payIcon">
            <img className="checkMark" src="/images/check.svg" alt="check mark" />
          </div>
          <h4 className="payment">
            We've sent you an email with all the details of your order.
      </h4>
      <div className="payIcon">
          <Link to="/">
            <button className="payment-button btn-dark">Return to Home</button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PayConfrim;