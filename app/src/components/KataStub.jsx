import React from 'react';

export default function KataStub(props)
{
    const kata = props.kata;
    const selectedClass = props.selected === kata.id ? 'selected' : null;
    return(
        <div className={selectedClass}>
            <a onClick={() => props.onclick(kata.id)}>
                {kata.name}
            </a>
        </div>
    );
}
