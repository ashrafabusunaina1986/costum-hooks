'use client'
import CartContex from '@/context/cartContext/CartContex'
import AddMeal from '@/components/meals/addmael/AddMeal'
import Header from '@/layout/heders/Header'
import React, { Fragment ,useContext,useState} from 'react'
import Cart from '@/components/cart/Cart'
import { Add_Context } from '@/context/addmeal/Addm'

const Layout = (props) => {
  const [isShowCart, setIsShowCart] = useState(false)

  const showCart = () => {
    setIsShowCart(true)
  }
  const hideCart = () => {
    setIsShowCart(false)
  }

  const {isActive}=useContext(Add_Context)
  return (
    <Fragment>
      <CartContex>
        {isActive && <AddMeal />}
        {isShowCart ? <Cart onHideCart={hideCart} /> : ''}
        <Header onShowCart={showCart}/>
        {props.children}
      </CartContex>
    </Fragment>
  )
}

export default Layout