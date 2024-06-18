import React from "react";
import FormCheckout from "../components/formCheckout/FormCheckout";
import "./checkout.css";
import feature from "../assets/img/feature2.jpg";
import Button from "../components/button/Button";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-wrapper">
        <div className="checkout-forms">
          <h2>CHECKOUT</h2>
          <div className="delevery-address">
            <h3>Delivery Address</h3>
            <FormCheckout />
            <div className="button-check">
              <Button
                arrowOn={"on"}
                classHome={"button-checkout-back"}
                text={"Go back to cart"}
              />
              <Button
                classHome={"button-checkout"}
                text={"Save And Continue"}
              />
            </div>
          </div>
        </div>
        <img src={feature} alt="" />
      </div>
    </div>
  );
};

export default Checkout;
