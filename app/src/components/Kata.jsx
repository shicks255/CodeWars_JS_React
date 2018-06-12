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

        const showSolution = this.props.solutionsShown[kata.id];

        const solution = showSolution ?
            <div>{kata.kata.toString()}</div>: '';

        return(
            <div className="col">
                <h4>{kata.name}</h4>
                <a onClick={() => this.handleClick(kata.url)}>Link</a>
                <p>{kata.description}</p>
                <a onClick={() => this.props.toggleSolution(kata.id)}>Solution</a>
                {solution}
            </div>
        );

    }

    handleClick(url)
    {
        window.open(url, '_blank');
    }


}