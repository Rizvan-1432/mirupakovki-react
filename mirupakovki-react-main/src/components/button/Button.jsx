import React from 'react';
import './Button.css';
import arrowBack from '../../assets/icon/arrow-scroll.svg';

const Button = ({text, classHome, arrowOn}) => {

    return (
        <button className={`button ${classHome}`}>
            {arrowOn ? <img src={arrowBack} alt="" /> : ''}
            {text}
        </button>
    );
};

export default Button;