import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// removeItem (props.id) {
    
// }

function Cart(props) {
    return (
        <div className="cart-body">
            <div className="icon-area">
                <img src="/images/bag-icon.png" alt="shopping bag" className="icon" />
            </div>
            <div className="row">

                <div className="col-lg-10 product-area">
                    <div className="col">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ITEM NAME</th>
                                    <th scope="col">PRICE</th>
                                    <th scope="col">QTY</th>
                                    <th scope="col">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><img src="./images/table.jpg" alt="table" className="cart-item" />
                                        <span onClick={() => props.removeItem(props.id)} className="remove">
                                            𝘅
                                        </span>

                                    </th>

                                    <td className="cart-data">250</td>
                                    <td className="cart-data">1</td>
                                    <td className="cart-data">250</td>
                                </tr>
                                <tr>  </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div className="cart-button-area">
                <Link to="/checkout"><button type="submit" className="button-cart">CHECKOUT</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
