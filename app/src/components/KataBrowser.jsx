import React from 'react';
import KataStub from './KataStub';

export default class KataBrowser extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        console.log(this.props);
        const stubs = this.props.katas.map((value, index) =>
        {
            return (
                <KataStub selected={this.props.selected} onclick={(kataId) => this.props.onclick(kataId)} key={value.id} kata={value} />
            );

        });


        return(
            <div>
                {stubs}
            </div>

            );
    }


}