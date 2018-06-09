//listing all the katas i've done

import {functions} from '../katas/kataFunctions';

export const getKatas = function()
{
    var katas = [
        {
            id: 1,
            name: "Equal Sides of an Array",
            difficulty: 7,
            description: 'Test',
            kata: functions.equalSidesOfAnArray
        },
        {
            id: 2,
            name: "Sorted Word",
            difficulty: 7,
            description: '',
            kata: function ()
            {

            }
        },
            {
                id: 3,
                name: "Smallest Integer In Array",
                difficulty: 7,
                kata: function ()
                {

                }
            },
            {
                id: 4,
                name: "Sum of Positive",
                difficulty: 7,
                kata: function ()
                {

                }
            }
        ];
        return katas;
}