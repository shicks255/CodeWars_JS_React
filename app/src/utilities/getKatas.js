//listing all the katas i've done

import {functions} from '../katas/kataFunctions';

export const getKatas = function(difficulty)
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
            description: 'Given an array of integers your solution should find the smallest integer.  ' +
                'For example: ' +
                'Given [34, 15, 88, 2] your solution will return 2.  ' +
                'Given [34, -345, -1, 100] your solution will return -345.  ' +
                'You can assume that the supplied array will not be empty.  ',
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
            description: 'You are given an array of numbers.  Return the sum of all the positive ones.  ' +
                'Example: [1,-4,7,12] should return 20.\r\n' +
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
        },
        {
            id: 5,
            name: "Filter Out the Geese",
            difficulty: 8,
            url: 'https://www.codewars.com/kata/filter-out-the-geese',
            description: 'Write a function that takes an array of strings as an argument and returns a filtered array containing ' +
                'the same elements but with the \'geese\' removed.\r\n\r\n' +
                'The geese are any strings in the following array:  \r\n' +
                'geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]',
            testData: [
                ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"],
                ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"],
                ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
            ],
            kata: functions.filterGeese,
            prettyKata: '<pre>const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]\n' +
                '\n' +
                'function removeGeese(arg){\n' +
                '    return arg.filter((val, indx) => {\n' +
                '        return geese.includes(val) === false;\n' +
                '    });\n' +
                '}</pre>'
        },
        {
            id: 6,
            name: "Principal Diagonal vs Seconday Diagonal",
            difficulty: 7,
            url: 'https://www.codewars.com/kata/principal-diagonal-vs-secondary-diagonal/train/javascript',
            description: 'Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.\r\n' +
                'Secondary Diagonal -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.\r\n' +
                'Find which diagonal is larger.\r\n' +
                'If the principal diagonal is larger, return "Principal Diagonal win!"\r\n' +
                'If the secondary diagonal is larger, return "Secondary Diagonal win!"\r\n' +
                'If they are equal, return "Draw!"',
            testData: [
                [
                    [2,2,2],[4,2,6],[1,8,2]
                ],
                [
                    [1, 2, 2, 5, 1],
                    [4, 1, 6, 1, 1],
                    [1, 8, 5, 6 ,2],
                    [1, 5, 2, 1, 2],
                    [1, 8, 2, 6, 1]
                ],
            ],
            kata: functions.diagonal,
            prettyKata: '<pre>    let principal = 0;\n' +
                '    let secondary = 0;\n' +
                '\n' +
                '    let secondaryCounter = matrix[0].length-1;\n' +
                '    matrix.forEach((val,idx) => {\n' +
                '        principal += matrix[idx][idx]\n' +
                '        secondary += matrix[idx][secondaryCounter];\n' +
                '        secondaryCounter--;\n' +
                '    });\n' +
                '\n' +
                '    if (principal > secondary)\n' +
                '        return "Principal Diagonal win!"\n' +
                '    else if (secondary > principal)\n' +
                '        return "Secondary Diagonal win!";\n' +
                '    else\n' +
                '        return "Draw!";</pre>'
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