import { Button } from '@mui/material';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const sector of cart){
        total= total + sector.price;
    }
    return (
        <div className="cart">
            <h2>Cart</h2>
            <h3>Course Taken: {props.cart.length}</h3>
            <h2>Total Price : BDT{total}.</h2>
            <Button className="footer"
          onClick={()=>props.handleEvent(props.sector)} >Enroll</Button>
        </div>
    );
};

export default Cart;