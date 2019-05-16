import mobiscroll from '@mobiscroll/react-lite';
import React from 'react';

export default class ScrollBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            difficulty: '10'
        }
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
                            data-live={true}
                            data-step-labels="[4,5,6,7,8,9,10]"
                            data-tooltip={true}
                            onChange={this.setDifficulty}>
                            <div className="row justify-content-center">
                                Difficulty
                                <br/>
                                (10 = All Katas)
                            </div>
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