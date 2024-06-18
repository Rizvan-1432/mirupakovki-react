import React from "react";
import search from "../../assets/icon/search.svg";
import "./header.css";
import profile from '../../assets/icon/profile.svg';
import like from '../../assets/icon/like.svg';
import shopping from '../../assets/icon/shopping.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper-header">
        <div className="logo">
          <img src={search} alt="" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">ESSENTIALS</a>
            </li>
            <li>
              <a href="#">
                <h2>Macc<br/> <span>Essentials</span></h2>
              </a>
            </li>
            <li>
              <a href="#">BEST SELLERS</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
          </ul>
        </nav>
        <div className="avatar">
            <div className="profile"><img src={profile} alt="" /></div>
            <div className="like"><img src={like} alt="" /></div>
            <div className="shopping"><img src={shopping} alt="" /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;