import React from "react";
import ProductCard from "../product-card/ProductCard";
import "./homeSecondBlock.css";
import arrowScroll from "../../assets/icon/arrow-scroll.svg";

const HomeSecondBlock = () => {
  return (
    <div className="home-second-block">
      <div className="second-block-title">
        <h2>
          <span>NEW</span> PRODUCTS
        </h2>
      </div>
      <div className="second-block-footer">
        <div className="second-left-scroll">
          <img src={arrowScroll} alt="" />
        </div>
        <div className="second-block-cards">
          <ProductCard
            classHome={"home-second-class"}
            promotion={"TOP SELLER"}
          />
          <ProductCard classHome={"home-second-class"} />
          <ProductCard classHome={"home-second-class"} />
          <ProductCard classHome={"home-second-class"} />
        </div>
        <div className="second-right-scroll">
          <img src={arrowScroll} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSecondBlock;
