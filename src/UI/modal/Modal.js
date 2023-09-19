import React, { Fragment } from 'react'
import styles from './modal.module.css'

const BackDrop=()=>{
    return <div className={styles.backdrop} />
}
const ModalOverlay=(props)=>{
    return(
        <div className={styles.modal} >
            <div className={styles.content} >
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
  return (
    <Fragment>
        <BackDrop/>
        <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  )
}

export default Modal