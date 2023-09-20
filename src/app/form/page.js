'use client'
import Card from '@/components/card/Card'
import classes from './page.module.css'
import React, { useCallback, useEffect, useState } from 'react'
import useForm from '@/hooks/use-form'

const elements = [
  {
    id: 'username',
    type: 'text',
    name: 'input'
  },
  {
    id: 'password',
    type: 'password',
    name: 'input'
  },
  {
    id: 'email',
    type: 'email',
    name: 'input'
  },
  {
    id: 'name',
    type: 'text',
    name: 'input'
  },
  {
    id: 'message',
    name: 'textarea'
  }
]

const classSyles = {
  form: classes.form,
  input: classes.input,
  textarea: classes.textarea,
  span: classes.span,
  btn: classes.button
}
const classSyles1 = {
  form: classes.form1,
  input: classes.input1,
  textarea: classes.textarea1,
  span: classes.span1,
  btn: classes.button1
}
export {classSyles1}
const Form = () => {
  
 

  const { formElement: form1, out: entry ,isActive} = useForm(classSyles1,null,'+',null)
  return (
    <div>
      <Card>
        <Card>
          { form1 }
        </Card>
        {isActive && <Card> {Object.keys(entry).map((item,ind)=>{
          return <div key={ind}>
            <div>
              <h4>{item}:{entry[`${item}`]}</h4>
            </div>
          </div>
        })}</Card>}
        <div>
          <Card>
            <span>Length of input:
              {
                 Object.keys(entry).length
              }
            </span>
          </Card>


        </div>
      </Card>

    </div>
  )
}

export default Form