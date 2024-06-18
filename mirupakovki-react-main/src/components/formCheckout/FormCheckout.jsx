import React from 'react';
import Input from '../input/Input';
import './formCheckout.css';

const FormCheckout = () => {
    return (
        <form className='form-checkout'>
            <Input value={'John'} inputSize={'small'} />
            <Input value={'Wick'} inputSize={'small'} />
            <Input value={'Street 32, Pasror road, Daska'} inputSize={'big'} />
            <Input value={'N/A'} inputSize={'big'} />
            <Input value={'51010'} inputSize={'small'} />
            <Input value={'Sialkot'} inputSize={'small'} />
            <Input value={'+923445676890'} inputSize={'big'} />
        </form>
    );
};

export default FormCheckout;