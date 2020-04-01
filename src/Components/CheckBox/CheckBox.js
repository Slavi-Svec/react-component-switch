import React, { useState } from 'react'
import Switch from 'react-switch'
import RenderState from '../RenderState/RenderState'

const CheckBox = () => {
  const [checked, handelChange] = useState(false)
    return (
        <>
          <Switch onChange={() => handelChange(!checked)} checked={checked} />
          <RenderState text="The switch is" checked={checked} />
        </>

    )
}

export default CheckBox