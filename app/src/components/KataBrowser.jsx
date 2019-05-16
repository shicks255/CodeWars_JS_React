import React from 'react';
import KataStub from './KataStub';

export default function KataBrowser(props)
{
    const stubs = props.katas.map((value, index) =>
    {
        return (
            <KataStub selected={props.selected} onclick={(kataId) => props.onclick(kataId)} key={value.id} kata={value} />
        );
    });

    const header = props.difficulty === 10 ? "Showing all Katas" : "Showing Katas with difficulty " + props.difficulty;

    return(
        <div className="kataBrowser">
            <div className="kataBrowserTitle"><b>{header}</b></div>
            {stubs}
        </div>
    );
}