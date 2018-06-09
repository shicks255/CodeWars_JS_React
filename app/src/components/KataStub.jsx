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
        return(
            <div>
                {kata.name}
            </div>
        );
    }

}