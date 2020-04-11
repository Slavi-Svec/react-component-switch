import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import CheckBox from './Components/CheckBox/CheckBox'
import ToggleText from './Components/ToggleText/ToggleText'
import Title from './Components/Title/Title'
import Heading from './Components/Heading/Heading'
import HeadingV2 from './Components/HeadingV2/HeadingV2'
import Text from './Components/Text/Text'
import StartButton from './Components/StartButton/StartButton'
import Image from './Components/Image /Image'


import PlaceholderImage from './assets/placeholder.png'
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
            <Title title={ "its friday" } />
            <Heading heading= { "it is the weekend!" } />
            <HeadingV2 headingV2= { "it is the Weekend of Easter!"} />
            <Text variant="h1">Everyone loves Easter time!</Text>
            <Image image={PlaceholderImage} alt="thisistheimagealttext"/>
            <StartButton />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))