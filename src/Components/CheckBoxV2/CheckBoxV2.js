import React from 'react';
import Switch from 'react-switch'

class CheckBoxV2 extends React.Component {
    constructor () {
        super ()
        this.state = {
            checked: false
        }
    }

    handleChange = (checked) => {
        this.setState({checked})
    }

    render () {
        return (
            <div class="wrapper">
                <h2>IOS Switch</h2>
                <Switch
                    className="react-switch"
                    onChange={this.handleChange}
                    checked={this.state.checked}
                />
                <p>the switch is <b>{this.state.checked ? 'on' : 'off' }</b></p>
            </div>
        )
    }
}

export default CheckBoxV2









