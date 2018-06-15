import mobiscroll from '@mobiscroll/react-lite';
import React from 'react';
import ReactDOM from 'react-dom';

export default class ScrollBar extends React.Component{
    constructor(props)
    {
        super(props);

        this.state ={
            difficulties: [4,5,6,7,8,9,0],
            difficulty: 5,
        }
    }

    render()
    {
        return (
            <mobiscroll.Form theme="windows">
                <div className="mbsc-form-group">
                        <mobiscroll.Slider
                            theme="windows"
                            value={this.state.difficulties}
                            step={this.state.difficulty}
                            min={4}
                            max={9}
                            data-step-labels="[4,5,6,7,8,9]">
                        </mobiscroll.Slider>

                </div>
            </mobiscroll.Form>
        )
    }

}