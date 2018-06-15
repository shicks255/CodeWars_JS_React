import mobiscroll from '@mobiscroll/react-lite';
import React from 'react';
import ReactDOM from 'react-dom';

export default class ScrollBar extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="scroll">
                <mobiscroll.Form theme="windows">
                    <div className="mbsc-form-group">
                        <mobiscroll.Slider
                            theme="windows"
                            value={this.props.difficulty}
                            step={1}
                            min={4}
                            max={10}
                            data-step-labels="[4,5,6,7,8,9,10]"
                            onChange={this.setDifficulty}>
                            Difficulty <i>(10 == All Katas)</i>
                            <br/>

                        </mobiscroll.Slider>

                    </div>
                </mobiscroll.Form>
            </div>
        )
    }

    setDifficulty = (value) =>
    {
        this.setState({difficulty:value});
        this.props.setDifficulty(this.state.difficulty);
    }

}