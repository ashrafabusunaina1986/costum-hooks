'use client'
import Card from '@/components/card/Card'
import {useCounter} from '@/hooks/use-counter/use-counter'


const ForwardCounter = () => {
  const counter=useCounter()
  return (
   <Card>{counter}</Card>
  )
}

export default ForwardCounter