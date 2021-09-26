import React, { useEffect, useState } from 'react';
import Actor from '../Actor-cart/Actor';
import Cart from '../Cart/Cart';
import './Body.css'

// Data from JSON is fetched and used in this section 
const Body = () => {
    const [actor, setActor] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./people.JSON')
            .then(res => res.json())
            .then(data => setActor(data))
    }, [])
    const handleAddToCart = (actor) => {
        const newCart = [...cart, actor];
        setCart(newCart);

    }
    return (
        // Contents of main container
        <div className="row g-0">
            {/* Section for selecting individual actor */}
            <div className="col-sm-6 col-md-9 actors-container">
                {
                    actor.map(actor => <Actor
                        key={actor.id}
                        actor={actor}
                        handleAddToCart={handleAddToCart} />)
                }
            </div>
            {/* cart section  column wise*/}
            <div className="col-6 col-md-3 cart-section">
                <Cart cart={cart} />
            </div>
        </div>

    );
};

export default Body;