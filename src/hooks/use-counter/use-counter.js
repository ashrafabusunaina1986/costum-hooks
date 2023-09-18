'use client'
import React, { useEffect, useState } from 'react'


const useCounter=(forward=true)=>{
    const[counter,setCounter]=useState(0)
    useEffect(()=>{
        const Inteval=setInterval(() => {
            if(forward) setCounter(prev=>prev+1)
            else setCounter(prev=>prev-1)
        }, 1000);
        
        return()=>{
            clearInteval(Inteval)
        }
    },[forward])
    return counter
}

export { useCounter}