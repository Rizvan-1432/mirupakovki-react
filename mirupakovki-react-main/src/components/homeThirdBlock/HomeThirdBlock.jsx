import React from "react";
import "./homeThirdBlock.css";
import feature from '../../assets/img/Feature.jpg';
import HomeBlock from "../homeBlock/HomeBlock";

const HomeThirdBlock = () => {
  return (
    <div className="home-third-block">
      <HomeBlock feature={feature} textSpan={'MACC'} textH2={'WEEKLY DISCOUNT'} classHome={'third-block'} />
    </div>
  );
};

export default HomeThirdBlock;
