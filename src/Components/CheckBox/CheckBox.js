import React from 'react'
import Switch from 'react-switch'

const CheckBox = ({ onChange, checked }) => (
  <Switch onChange={onChange} checked={checked} />
)

export default CheckBox