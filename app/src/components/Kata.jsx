import React from 'react';

export default function(props)
{
    const kata = props.selectedKata;

    const pretty = function(){
        return {__html: kata.prettyKata}
    }

    const questionAnswerArray = kata.testData.map((value, index) =>
    {
        const answer = kata.kata(value);
        return (<p key={index}>{value + " = " + answer}</p>);
    });

    const showSolution = props.solutionsShown[kata.id];
    const solution = showSolution ?
        <div dangerouslySetInnerHTML={pretty()}></div>: '';

    const style = {whiteSpace: 'pre-wrap'};

    return(
        <div className="col">
            <h4>{kata.name} - difficulty {kata.difficulty}</h4>
            <a onClick={() => handleClick(kata.url)}>Link</a>
            <p><b>Description:</b></p>
            <div style={style}>{kata.description}</div>
            <br/>
            <p><b>Tests:</b></p>
            {questionAnswerArray}
            <a onClick={() => props.toggleSolution(kata.id)}>Solution</a>
            {solution}
        </div>
    );
}

function handleClick(url)
{
    window.open(url, '_blank');
}