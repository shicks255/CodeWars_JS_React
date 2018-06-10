import React from 'react';

export default class Kata extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const kata = this.props.selectedKata;
        return(
            <div className="col">
                <p>{kata.description}</p>
            </div>
        );

    }


}