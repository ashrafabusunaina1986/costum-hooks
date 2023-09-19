import React from 'react'
import imgMeals from '@/assets/meals.jpg'
import Image from 'next/image'
import styles from './header.module.css'
import HeaderCartButton from '@/components/headercartbutton/HeaderCartButton'

const Header = (props) => {
  return (
    <div className={styles.container}>
        <header className={styles.header}> 
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <Image src={imgMeals} alt='A table of food'
            fill={true} className={styles.img} />
        </div>
    </div>
  )
}

export default Header