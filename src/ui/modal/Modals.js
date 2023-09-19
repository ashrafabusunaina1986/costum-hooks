import b from './backdrop.module.css'
import o from './overlay.module.css'
import React from 'react'



const Modals = (props) => {
  return (
    <div>
        <BackDrop/>
        <Overlay>{props.children}</Overlay>
    </div>
  )
}

export default Modals

const BackDrop=props=>{
    return <div className={b.backdrop} />
}
export {BackDrop}

const Overlay=({children})=>{
    return <div className={o.overlay}>
        {children}
    </div>
}
export {Overlay}