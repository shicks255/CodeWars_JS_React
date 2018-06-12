//listing all the katas i've done

import {functions} from '../katas/kataFunctions';

export const getKatas = function()
{
    var katas = [
        {
            id: 1,
            name: "Equal Sides of an Array",
            difficulty: 6,
            url: 'https://www.codewars.com/kata/equal-sides-of-an-array',
            description: 'You are going to be given an array of integers.' +
            '\n\t\nYour job is to take that array and find an index N where the sum of the integer to the ' +
            'left of n is equal to the sum of the integers to the right of n.',
            testData: [[1,2,3,4,3,2,1], [1,100,50,-51,1,1], [1,2,3,4,5,6], [20,10,30,10,10,15,35]],
            kata: functions.equalSidesOfAnArray
        },
        {
            id: 2,
            name: "Sortest Word",
            difficulty: 7,
            url: 'https://www.codewars.com/kata/shortest-word',
            description: 'Simple, given a string of words, return the length of the shortest word.' +
                'String will never be empty and you do not need to account for different data types',
            testData: ['bitcoin take over the world maybe who knows perhaps', 'turns out random test cases are easier than writing out basic ones'],
            kata: functions.shortestWord
        },
        {
            id: 3,
            name: "Smallest Integer In Array",
            difficulty: 8,
            url: 'https://www.codewars.com/kata/find-the-smallest-integer-in-the-array',
            description: 'Given an array of integers your solution should find the smallest integer.' +
                'For example: ' +
                'Given [34, 15, 88, 2] your solution will return 2.' +
                'Given [34, -345, -1, 100] your solution will return -345.' +
                'You can assume that the supplied array will not be empty.',
            testData: [[78,56,232,12,8],[78,56,232,12,18],[78,56,232,412,228],[78,56,232,12,0],[1,56,232,12,8]],
            kata: functions.smallestIntegerInArray
        },
        {
            id: 4,
            name: "Sum of Positive",
            difficulty: 8,
            url: 'https://www.codewars.com/kata/sum-of-positive',
            description: 'You are given an array of numbers.  Return the sum of all the positive ones.' +
                'Eample: [1,-4,7,12] should return 20' +
                'If there is nothing to sum, the sum is default to 0.',
            testData: [[1,2,3,4,5],[1,-2,3,4,5],[],[-1,-2,-3,-4,-5],[-1,2,3,4,-5]],
            kata: functions.sumOfPositive
        }
    ];
    return katas;
}