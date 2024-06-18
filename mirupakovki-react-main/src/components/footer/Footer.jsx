import React from "react";
import "./footer.css";
import mail_outline from '../../assets/icon/mail_outline.svg';
import Twitter from '../../assets/icon/Twitter.svg';
import LinkedIn from '../../assets/icon/LinkedIn.svg';
import Facebook from '../../assets/icon/Facebook.svg';
import Insta from '../../assets/icon/Insta.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="macc">
          <p>Macc</p>
        </div>
        <div className="essent">
          <p>Essentials</p>
        </div>
      </div>
      <div className="links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Products</a></li>
        </ul>  
      </div>
      <div className="links_1">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>    
      </div>
      <div className="block_text">
        <div className="text">
            <p>Be the first to know about our biggest and best sales. We'll never send more than one email a month.</p>
        </div>
      <div className="mail">
            <input type="email" placeholder="ENTER YOUR EMAIL" list="mailList" />
            <img className="img" src={mail_outline} alt="" />
            <hr />
            <div className="footer-social">
            <img className="social-icons" src={Twitter} alt="иконки соцсетей" />
            <img className="social-icons" src={LinkedIn} alt="иконки соцсетей" />
            <img className="social-icons" src={Facebook} alt="иконки соцсетей" />
            <img className="social-icons" src={Insta} alt="иконки соцсетей" />
            </div>
      </div>

      </div>
    </footer>
  );
};

export default Footer;