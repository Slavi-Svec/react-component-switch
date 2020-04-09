import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import CheckBox from './Components/CheckBox/CheckBox'
import ToggleText from './Components/ToggleText/ToggleText'
import Title from './Components/Title/Title'
import './styles.css'


const App = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked)
    }
    const isChecked = checked ?  'on' : 'off'

    return (
        <div className="app">
            <CheckBox onChange={onChange} checked={checked} />
            <ToggleText checked={checked} />
            <Title title={`The checkbox is ${isChecked}`} />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))