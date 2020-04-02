import React, { useState } from 'react'
import Switch from 'react-switch'
import RenderState from '../RenderState/RenderState'
import './Style.css'

const CheckBox = () => {
  const [checked, handelChange] = useState(false)
    return (
        <>
          <div>
          <h1 style={{backgroundColor: 'pink'}}>hello</h1>
          <Switch onChange={() => handelChange(!checked)} checked={checked} />
          <RenderState text="The switch is" checked={checked} />
          </div>
        </>

    )
}

export default CheckBox