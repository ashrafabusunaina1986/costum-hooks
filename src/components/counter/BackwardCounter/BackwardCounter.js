'use client'
import Card from '@/components/card/Card'
import {useCounter} from '@/hooks/use-counter/use-counter'

const BackwardCounter = () => {
  const counter=useCounter(false)    
  return (
    <Card>{counter}</Card>
  )
}

export default BackwardCounter