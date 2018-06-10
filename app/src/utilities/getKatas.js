//listing all the katas i've done

import {functions} from '../katas/kataFunctions';

export const getKatas = function()
{
    var katas = [
        {
            id: 1,
            name: "Equal Sides of an Array",
            difficulty: 7,
            url: '',
            description: 'You are going to be given an array of integers.' +
            '\n\t\nYour job is to take that array and find an index N where the sum of the integer to the ' +
            'left of n is equal to the sum of the integers to the right of n.',
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