
import React, { Fragment } from 'react'
import ForwardCounter from './ForwardCounter/ForwardCounter'
import BackwardCounter from './BackwardCounter/BackwardCounter'

const C_Counter = () => {
  return (
    <Fragment>
        <ForwardCounter/>
        <BackwardCounter/>
    </Fragment>
  )
}

export default C_Counter