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
import PlayButton from './Components/PlayButton/PlayButton'
import SurveyButton from './Components/SurveyButton/SurveyButton'
import CodeSnippet from './Components/CodeSnippet/CodeSnippet'
import BoldHeading from './Components/BoldHeading/BoldHeading'
// import OrderList from './Components/OrderList/OrderList'
import List from './Components/List/List'
import Table from './Components/Table/Table'
import students from './students'
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
            <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>
            <CheckBox onChange={onChange} checked={checked} />
            <ToggleText checked={checked} />
            <Title title={`The checkbox is ${isChecked}`} />
            <Title title="its friday" />
            <Heading heading="it is the weekend!" />
            <HeadingV2 headingV2="it is the Weekend of Easter!" />
            <Table data={students} />
            <Text variant="h1">Everyone loves Easter time!</Text>
            <BoldHeading boldHeading="Learn React, and this code over the long weekend" />
            <List Tag="ul" items={['JSX', 'SASS', 'Javascript']} />
            <CodeSnippet codeSnippet="ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));" />
            <StartButton title="enter the button"/>
            <Image image={PlaceholderImage} alt="thisistheimagealttext"/>
            <PlayButton title="press the button to play the music"  />
            <SurveyButton heading="Enter the survey"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))