import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Actor.css';
const Actor = (props) => {
    const { id, name, img, address, salary, } = props.actor;
    // icon section 
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (

        <div className="card">
            <img src={img} alt="..." />
            <h3>Name:{name}</h3>
            <h3> id:{id}</h3>
            <h5> Address:{address}</h5>
            <h5>Salary:{salary}</h5>
            <button
                onClick={() => props.handleAddToCart(props.actor)}
                className="bg-warning btn-regular">
                {element}
                add to cart
            </button>
        </div>
    );
};

export default Actor;