import React from "react";
import './homeFirstBlock.css';
import Button from "../button/Button";
import cover from '../../assets/img/cover_img.jpg';

const HomeFirstBlock = () => {
  return (
    <div className="home-first-block">
      <div className="home-first-left">
        <h1>PROVIDING SERVICES AT YOUR DOOR</h1>
        <p>
          <span>MACC Essentials</span> has an important role in making supplies and services
          available to customers and their patients during this critical time.
          This includes services from various domains. Our aim is to aid you. As
          much we can.
        </p>
        <Button classHome={'home-first-button'} text={'LEARN MORE'}/>
      </div>
      <div className="home-first-rigth">
        <img src={cover} alt="" />
      </div>
    </div>
  );
};

export default HomeFirstBlock;
