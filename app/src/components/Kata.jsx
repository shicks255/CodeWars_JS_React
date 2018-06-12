import React from 'react';

export default class Kata extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showSolution: false,
        }
    }

    render()
    {
        const kata = this.props.selectedKata;

        const solution = this.state.showSolution ?
            <div>{kata.kata.toString()}</div>: '';


        return(
            <div className="col">
                <h4>{kata.name}</h4>
                <a onClick={() => this.handleClick(kata.url)}>Link</a>
                <p>{kata.description}</p>
                <a onClick={() => this.toggleSolution()}>Solution</a>
                {solution}
            </div>
        );

    }

    toggleSolution()
    {
        this.setState({
                showSolution: !this.state.showSolution,
            })
    }

    handleClick(url)
    {
        window.open(url, '_blank');
    }


}