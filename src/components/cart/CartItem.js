import React from 'react'
import styles from './cartItem.module.css'
import Button from '@/UI/button/Button'

const CartItem = (props) => {
    const price=`$${props.price}`
  return (
    <li className={styles['cart-items']}>
        <div >
            <h3>{props.name}</h3>
            <div className={styles.summary}>
                <span className={styles.price}>{price}</span>
                <span className={styles.amount}>{props.amount}</span>
            </div>
        </div>
        <div className={styles.action}>
            <Button onClick={props.onRemove}>-</Button>
            <Button onClick={props.onAdd}>+</Button>
        </div>
    </li>
  )
}

export default CartItem