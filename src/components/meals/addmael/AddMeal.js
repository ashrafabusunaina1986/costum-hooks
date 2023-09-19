'use client'
import {classSyles1} from '@/app/form/page'
import React, { useContext, useEffect, useState } from 'react'
import Modals from '@/ui/modal/Modals'
import useForm from '@/hooks/use-form'
import { Add_Context } from '@/context/addmeal/Addm'
import DUMMY_MEALS from '../../../../public/data.json'
const elements=[
  {
    id:'name',
    type:'text',
    name:'input'
  },
  {
    id:'description',
    type:'text',
    name:'input'
  },
  {
    id:'price',
    type:'number',
    name:'input'
  }
]
const AddMeal = (props) => {
  const {setMeals}=useContext(Add_Context)
  
  const {formElement :f ,out:o,isActive,display}=useForm(classSyles1,elements,'add',DUMMY_MEALS)
 useEffect(()=>{
  if(o.name)return
  setMeals(o)
 },[o])
  return (
    display && <Modals>
      {f}
    </Modals>

  )
}

export default AddMeal