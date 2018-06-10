import React from 'react';

export default class KataStub extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const kata = this.props.kata;
        const selectedClass = this.props.selected === kata.id ? 'selected' : null;
        return(
            <div className={selectedClass}>
                <a onClick={() => this.props.onclick(kata.id)}>
                    {kata.name}
                </a>
            </div>
        );
    }

}