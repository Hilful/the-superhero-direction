import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const actor of cart) {
        total = total + actor.salary;
    }
    let name = []
    for (const actor of cart) {
        name = name + " " + actor.name;
    }
    return (
        <div>
            <h2>Details</h2>
            <h3>Actors selected :{props.cart.length}</h3>
            <h4>total salary:${total}</h4>


            Name of Selected Actor :  {name}


        </div>
    );
};

export default Cart;