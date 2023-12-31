import React, { forwardRef } from 'react'
import styles from './input.module.css'

const Input =forwardRef((props,ref)=> {
  return (
    <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} onChange={props.onChange} {...props.input} />
    </div>
  )
})

export default Input