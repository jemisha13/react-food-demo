import React from 'react'
import PropTypes from 'prop-types'
import classes from './Cart.module.css';
import Modal from '../UI/Modal'
const Cart = props => {
    const cartItems = <ul className={classes['cart-items']}>
        {[
            {
            id:'C1',
            name:'sushi',
            amount:2,
            price:12
            }
        ].map((item)=><li>{item.name}</li>)}
    </ul>;
    return (
        <Modal onClose={props.onClose} >
            {cartItems}
            <div className={classes.total}>
                <span>Total Amont</span>
                <span>35.23</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>

            </div>
        </Modal>
    )
}

export default Cart
