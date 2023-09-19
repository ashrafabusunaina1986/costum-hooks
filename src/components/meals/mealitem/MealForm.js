import React, { useRef, useState } from 'react'
import styles from './mealform.module.css'
import Input from '@/UI/input/Input'
import Button from '@/UI/button/Button'
const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const [amount,setAmount]=useState(1)
  const aref=useRef()
  const change=(e)=>{setAmount(e.target.value)}
  const submit = e => {
    e.preventDefault()
    const amountf=aref.current.value
    const amount=+amountf
    
    if(amountf.trim().length===0 || amount>5 || amount<1){
      setAmountIsValid(false)
      return
    }
    props.onAddToCart(amount)
  }
  return (
    <form className={styles.form} onSubmit={submit}>
      <Input label="Amount" ref={aref} input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <Button>+ Add</Button>
      {!amountIsValid && <p>Please enter your amount (1-5)</p>}
    </form>
  )
}

export default MealForm