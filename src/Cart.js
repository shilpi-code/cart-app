import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    render(){
        return(
            <div className="cart">
                <CartItem qty={1} price={9999} title={"Watch"} img={''} />
            </div>
        );
    }
}
export default Cart;