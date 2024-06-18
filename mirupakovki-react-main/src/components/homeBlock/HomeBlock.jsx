import React from "react";
import "./homeBlock.css";
import ProductCard from "../product-card/ProductCard";
import Button from "../button/Button";
import arrowScroll from '../../assets/icon/arrow-scroll.svg';

const HomeBlock = ({feature, textSpan, textH2, classHome, left}) => {
  return (
    <div className={`home-block ${classHome}`}>
      <div className="home-block-img">
        <img src={feature} alt="" />
      </div>
      <div className="home-block-descr">
        <div className="home-block-text">
          <h2>
            <span>{textSpan}</span> {textH2}
          </h2>
          <Button classHome={"home-third-button"} text={"VIEW ALL"} />
        </div>
        <div className="home-block-cards">
          <ProductCard
            oldPrice={"₹ 500"}
            newPrice={"₹ 400"}
            classHome={"home-third-class"}
            promotion={"20% OFF"}
          />
          <ProductCard
            oldPrice={"₹ 500"}
            newPrice={"₹ 400"}
            classHome={"home-third-class"}
            promotion={"40% OFF"}
          />
          <div className={`arrow-scroll ${left}`}>
            <img src={arrowScroll} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlock;
