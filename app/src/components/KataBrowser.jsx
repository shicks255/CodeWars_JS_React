import React from 'react';
import Katas from '../utilities/getKatas';
import KataStub from './KataStub';

export default class KataBrowser extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render()
    {
        const stubs = this.props.katas.map((value, index) =>
        {
            return (
                <KataStub kata={value} />
            );

        });


        return(
            <div>
                {stubs}
            </div>

            );
    }


}