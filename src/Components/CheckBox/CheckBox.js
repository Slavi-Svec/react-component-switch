import React, { useState } from 'react'
import Switch from 'react-switch'
import RenderState from '../RenderState/RenderState'
import './Style.css'

const CheckBox = () => {
  const [checked, handelChange] = useState(false)
    return (
        <>
          <div style={{ border: '3px solid green', width: '120px' }}>
          <h1 style={{backgroundColor: 'pink', border: '2px solid red' }}>IOS Switch</h1>
          <Switch onChange={() => handelChange(!checked)} checked={checked} />
          <RenderState text="The switch is" checked={checked} />
          </div>
        </>

    )
}

export default CheckBox