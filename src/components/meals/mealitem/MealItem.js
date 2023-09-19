import React, { useContext } from 'react'
import styles from './mealitem.module.css'

import MealForm from './MealForm';
import { Cart_Context } from '@/context/cartContext/CartContex';

const MealItem = (props) => {
    const price= `$${props.price.toFixed(2)}`
    const carCtx=useContext(Cart_Context)
    const addCartHandler=(amount)=>{
      carCtx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }
  return (
    <li  className={styles.meal} key={props.key}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.desc}>{props.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
        <div>
            <MealForm onAddToCart={addCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem