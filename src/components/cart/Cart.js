import React, { useContext } from 'react'
import styles from './cart.module.css'
import Button from '@/UI/button/Button'
import Modal from '@/UI/modal/Modal'
import { Cart_Context } from '@/context/cartContext/CartContex'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartctx = useContext(Cart_Context)
    const TotalAmount = `$${cartctx.totalAmount}`
    const cartItemRemoveHandler=(id)=>{
        cartctx.removeItem(id)
    }
    const cartItemAddHandler=(item)=>{
        cartctx.addItem(item)
    }
    const hasItems = cartctx.items.length > 0
    const cartItem = <ul className={styles['cart-itemss']}>{cartctx.items
        .map(meal => {
            return <CartItem key={meal.id} name={meal.name}
                price={meal.price} amount={meal.amount}
                onRemove={cartItemRemoveHandler.bind(null,meal.id)}
                onAdd={cartItemAddHandler.bind(null,meal)}
            />
        })}</ul>
    return (

        <Modal>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{TotalAmount}</span>
            </div>
            <div className={styles.action}>
                {hasItems && <Button >Order</Button>}
                <Button onClick={props.onHideCart} className={styles['button--alt']}>Close</Button>
            </div>
        </Modal>
    )
}

export default Cart