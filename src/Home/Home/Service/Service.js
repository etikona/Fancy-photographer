import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service, handleCart}) => {
    const {name, img, price, description} = service;
    return (
        <div className='cart '>
    <img src={img} alt="" className='w-20' />
    <h4>{name}</h4>
    <p>price:{price}</p>
    <p><small>{description}</small></p>
    <button onClick={()=> handleCart(service)} className='btn btn-info mb-0 text-dark'><Link to="/checkout">Check Out</Link></button>
        </div>
    );
};

export default Service;