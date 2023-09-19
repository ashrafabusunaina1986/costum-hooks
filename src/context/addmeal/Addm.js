'use client'
import React, { createContext, useState } from 'react'

export const Add_Context = createContext({
    meals:{},
    isActive:false
})



const Addm = ({ children }) => {
    const [meals,setMeals]=useState([])
    const [isActive,setIsActive]=useState(false)
    const toggle=()=>{
        setIsActive(!isActive )
    }
    return (
        <Add_Context.Provider value={{toggle,isActive,setMeals,meals}}>
            {children}
        </Add_Context.Provider>
    )
}

export default Addm