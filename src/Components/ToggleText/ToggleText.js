import React from 'react'

const ToggleText = ({ text, checked }) => <p>{text} {checked ? 'on' : 'off' }</p>


export default ToggleText