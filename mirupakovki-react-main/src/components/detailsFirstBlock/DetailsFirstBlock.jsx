import React from "react";
import "./detailsFirstBlock.css";
import Product_img from "../../assets/img/Product_img.png";
import Big_product_img from "../../assets/img/Big_product_img.png";
import like_img from "../../assets/icon/like_img.svg";
import Button from "../button/Button";

const DetailsFirstBlock = () => {
  return (
    <div className="details-first-block">
      <div className="details-first-left">
        <img src={Product_img} alt="" />
        <img src={Product_img} alt="" />
        <img src={Product_img} alt="" />
        <img src={Product_img} alt="" />
      </div>
      <div className="details-big-img">
        <div className="details-big-img1">
          <img src={Big_product_img} alt="" />
        </div>
        <div className="header-second">
          <div className="sub-header-second">
            <h2>COLOROX WIPES</h2>
            <img className="like-img" src={like_img} alt="" />
          </div>
          <div className="price-second-header">
            <h2>₹ 40.00</h2>
          </div>
          <div className="black-gold-apollo">
            <div className="black">
              <p>BLACK</p>
            </div>
            <div className="gold">
              <p>GOLD</p>
            </div>
            <div className="apollo">
              <p>APOLLO</p>
            </div>
          </div>

          <div className="btn-add-cart">
            <Button classHome={"details-btn-add"} text={"ADD TO CART"} />
          </div>
          <div className="wrapp-text">
            <p>
              Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
              dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,
              condimentum est. Mauris arcu odio, vestibulum quis dapibus sit
              amet,
            </p>
          </div>
          <div className="tab">
            <input type="checkbox" id="tab1" name="tab-group" />
            <label for="tab1" class="tab-title">
            DESCRIPTION
            </label>
            <section class="tab-content">
              <p>DESCRIPTION</p>
            </section>
          </div>
          <div className="tab">
            <input type="checkbox" id="tab1" name="tab-group" />
            <label for="tab1" class="tab-title">
            RETURN POLICY
            </label>
            <section class="tab-content">
              <p>DESCRIPTION</p>
            </section>
          </div>
          <div className="tab">
            <input type="checkbox" id="tab1" name="tab-group" />
            <label for="tab1" class="tab-title">
            CITIZEN POLICY
            </label>
            <section class="tab-content">
              <p>DESCRIPTION</p>
            </section>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default DetailsFirstBlock;
