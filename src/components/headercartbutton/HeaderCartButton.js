'use client'
import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../cart/CartIcon'
import styles from './headercartbutton.module.css'
import { Cart_Context } from '@/context/cartContext/CartContex'

const HeaderCartButton = (props) => {
  const co = useContext(Cart_Context)
  const [isBtnHightlight, setIsBtnHightLight] = useState(false)
  useEffect(() => {
    if (co.items.length === 0) return
    setIsBtnHightLight(true)
    const hightlight = setTimeout(() => {
      setIsBtnHightLight(false)
    }, 300);
    return () => {
      clearTimeout(hightlight)
    }
  },[co.items])
  const numberCart = co.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  return (
    <button className={`${styles.container} ${isBtnHightlight?styles.bump:''}`} onClick={props.onClick}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your carts</span>
      <span className={styles.badge}>{numberCart}</span>
    </button>
  )
}

export default HeaderCartButton