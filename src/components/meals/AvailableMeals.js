'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Cards from '@/UI/card/Card'
import MealItem from './mealitem/MealItem';
import styles from './availabemeals.module.css'
import Button from '@/UI/button/Button'
import Addm, { Add_Context } from '@/context/addmeal/Addm';
import AddMeal from './addmael/AddMeal';
import DUMMY_MEALS from './../../../public/data.json'
import useHttp from '@/hooks/use-http/use-http';


const AvailableMeals = (props) => {
    const [meal, setMeal] = useState({})
    const [isActive, setIsActive] = useState(false)
    const [error,setError]=useState('')
    const {toggle,meals}=useContext(Add_Context)
    const [data,setData]=useState([])
    const ok = () => {
        setIsActive(true)
    }

    const {isLoading,sendRequest:getData}=useHttp()
    
    useEffect(()=>{
        getData({
            url:'/api/data'
        },setData)
    },[setData])        

    return (
        <section className={styles.meals}>
            <Cards>
                {!isActive && <Button onClick={toggle} >Add Meal</Button> }
                <ul>
                    {
                        isLoading?'Loading...':data.data  && data.data.map((meal) => {
                            return <MealItem key={meal.id} id={meal.id} name={meal.name}
                                price={meal.price} description={meal.description} />
                        })
                    }
                </ul>

            </Cards>

        </section>

    )
}

export default AvailableMeals