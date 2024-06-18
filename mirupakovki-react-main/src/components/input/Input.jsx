import React from 'react';
import './input.css';

const Input = ({value, inputSize}) => {
    return (
        <input className={`input ${inputSize}`} type='text' value={value}/>
    );
};

export default Input;