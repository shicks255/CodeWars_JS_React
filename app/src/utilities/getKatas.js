//listing all the katas i've done

import {functions} from '../katas/kataFunctions';

export const getKatas = function(difficulty)
{
    console.log(difficulty);
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
            kata: functions.equalSidesOfAnArray,
            prettyKata: '<PRE>equalSidesOfAnArray: function(array)\n' +
            '    {\n' +
            '        let length = array.length;\n' +
            '        var middle = Math.floor(array.length / 2) - 1;\n' +
            '\n' +
            '        for (let i = middle; i > 0; i--)\n' +
            '        {\n' +
            '            const firstHalfSum = array.slice(0, i).reduce( (a, b) => a+b);\n' +
            '            const secondHalf = array.slice(i+1, length).reduce( (a,b) => a+b);\n' +
            '\n' +
            '            if (firstHalfSum === secondHalf)\n' +
            '                return i;\n' +
            '        }\n' +
            '\n' +
            '        middle = Math.ceil(array.length / 2) - 1;\n' +
            '\n' +
            '        for (let i = middle; i < length-1; i++)\n' +
            '        {\n' +
            '            const firstHalfSum = array.slice(0,i).reduce( (a,b) => a+b);\n' +
            '            const secondHalf = array.slice(i+1,length).reduce( (a,b) => a+b);\n' +
            '\n' +
            '            if (firstHalfSum === secondHalf)\n' +
            '                return i;\n' +
            '        }\n' +
            '\n' +
            '        return -1;\n' +
            '    }</PRE>'
        },
        {
            id: 2,
            name: "Shortest Word",
            difficulty: 7,
            url: 'https://www.codewars.com/kata/shortest-word',
            description: 'Simple, given a string of words, return the length of the shortest word.' +
                'String will never be empty and you do not need to account for different data types',
            testData: ['bitcoin take over the world maybe who knows perhaps', 'turns out random test cases are easier than writing out basic ones'],
            kata: functions.shortestWord,
            prettyKata: '<PRE>shortestWord: function(word)\n' +
            '    {\n' +
            '        let chunks = word.split(\' \').map((value, index) => value.length);\n' +
            '        return Math.min(...chunks);\n' +
            '    }</PRE>'
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
            kata: functions.smallestIntegerInArray,
            prettyKata: '<PRE>    smallestIntegerInArray: function(array)\n' +
            '    {\n' +
            '        let smallest = NaN;\n' +
            '        array.forEach((value, index) =>\n' +
            '        {\n' +
            '            if (!smallest || smallest > value)\n' +
            '                smallest = value;\n' +
            '        });\n' +
            '\n' +
            '        return smallest;\n' +
            '    }</PRE>'
        },
        {
            id: 4,
            name: "Sum of Positive",
            difficulty: 8,
            url: 'https://www.codewars.com/kata/sum-of-positive',
            description: 'You are given an array of numbers.  Return the sum of all the positive ones.' +
                'Example: [1,-4,7,12] should return 20' +
                'If there is nothing to sum, the sum is default to 0.',
            testData: [[1,2,3,4,5],[1,-2,3,4,5],[],[-1,-2,-3,-4,-5],[-1,2,3,4,-5]],
            kata: functions.sumOfPositive,
            prettyKata: '<PRE>sumOfPositive: function(array)\n' +
            '    {\n' +
            '        let sum = 0;\n' +
            '\n' +
            '        sum = array.reduce((prev, cur) =>\n' +
            '        {\n' +
            '            if (cur > 0)\n' +
            '                prev += cur;\n' +
            '\n' +
            '            return prev;\n' +
            '        }, 0);\n' +
            '\n' +
            '        return sum;\n' +
            '    }</PRE>'
        }
    ];

    katas = katas.filter( (value, index) =>
    {
        if (difficulty === 10)
            return value;

        if (difficulty === value.difficulty)
            return value;
    });

    return katas;
}