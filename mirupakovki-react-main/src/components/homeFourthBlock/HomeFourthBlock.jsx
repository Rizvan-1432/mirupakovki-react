import React from "react";
import feature from '../../assets/img/FeatureFourth.jpg';
import HomeBlock from '../../components/homeBlock/HomeBlock';
import './homeFourthBlock.css';

const HomeFourthBlock = () => {
  return (
    <div className="home-fourth-block">
      <HomeBlock feature={feature} textSpan={'MACC'} textH2={'TOP SELLINGS'} classHome={'fourth-block'} left={'left'}/>
    </div>
  );
};

export default HomeFourthBlock;
