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
            prettyKata: '<PRE>function equalSidesOfArray(array)\n' +
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
            prettyKata: '<PRE>function shortestWord(word)\n' +
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
            prettyKata: '<PRE>function smallestInteger(array)\n' +
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
            prettyKata: '<PRE>function sumOfPositive(array)\n' +
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
            prettyKata: '<pre>function diagonal(input)' +
                '\n{' +
                '\n  let principal = 0;\n' +
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
                '        return "Draw!";' +
                '\n}' +
                '</pre>'
        },
        {
            id: 7,
            name: "Containers",
            difficulty: 5,
            url: 'https://www.codewars.com/kata/5b80dea49895f71f3e00002d',
            description: 'A seaport container terminal stores large containers that are eventually loaded on seagoing ships for transport abroad. Containers coming to the terminal by road and rail are stacked at the terminal as they arrive. Seagoing ships carry large numbers of containers. The time to load a ship depends in part on the locations of its containers. The loading time increases when the containers are not on the top of the stacks, but can be fetched only after removing other containers that are on top of them. The container terminal needs a plan for stacking containers in order to decrease loading time. The plan must allow each ship to be loaded by accessing only topmost containers on the stacks, and minimizing the total number of stacks needed. For this problem, we know the order in which ships must be loaded and the order in which containers arrive. Each ship is represented by a capital letter between A and Z (inclusive), and the ships will be loaded in alphabetical order. Each container is labeled with a capital letter representing the ship onto which it needs to be loaded. There is no limit on the number of containers that can be placed in a single stack.\n' +
                '\n' +
                'Input\n' +
                'Each test case consists of a single string containing from 1 to 1000 capital letters representing the order of arrival of a set of containers. For example, the string ABAC means consecutive containers arrive to be loaded onto ships A, B, A, and C, respectively. When all containers have arrived, the ships are loaded in strictly increasing order: first ship A, then ship B, and so on.\n' +
                '\n' +
                'Output\n' +
                'For each input case, return the minimum number of stacks needed to store the containers before loading starts.',
            testData: [
                "A", "CBACBACBACBACBA", "CCCCBBBBAAAA", "CODEWARS"
            ],
            kata: functions.containers,
            prettyKata: '<pre>function(input)\n' +
                '    {\n' +
                '        let containers = [];\n' +
                '\n' +
                '        input.split(\'\').map(x => x.charCodeAt(0)).forEach((v) => {\n' +
                '            if (containers.length === 0)\n' +
                '                containers.push([v]);\n' +
                '            else\n' +
                '            {\n' +
                '                let added = false;\n' +
                '                let containerToAdd = containers.find((v2) => {\n' +
                '                    if (v2[v2.length-1] >= v )\n' +
                '                        return true;\n' +
                '                    return false;\n' +
                '                });\n' +
                '                if (containerToAdd)\n' +
                '                {\n' +
                '                    containerToAdd.push(v);\n' +
                '                    added = true;\n' +
                '                }\n' +
                '\n' +
                '                if(!added)\n' +
                '                    containers.push([v]);\n' +
                '            }\n' +
                '        });\n' +
                '        return containers.length;\n' +
                '    },</pre>'
        },
        {
            id: 8,
            name: "Functional Addition",
            difficulty: 7,
            url: 'https://www.codewars.com/kata/538835ae443aae6e03000547',
            description: 'Create a function add(n)/Add(n) which returns a function that always adds n to any number\n' +
                '\n' +
                'var addOne = add(1);\n' +
                'addOne(3); // 4\n' +
                '\n' +
                'var addThree = add(3);\n' +
                'addThree(3); // 6',
            testData: [],
            kata: functions.functionalAddition,
            prettyKata: '<pre>function(n)\n' +
                '    {\n' +
                '        return (y) => {\n' +
                '            return y + n;\n' +
                '        }\n' +
                '    }</pre>'
        },
        {
            id: 9,
            name: 'Vowel Recognition',
            difficulty: 6,
            url: 'https://www.codewars.com/kata/vowel-recognition/javascript',
            description: '{a, e, i, o, u, A, E, I, O, U}\n' +
                '\n' +
                'Natural Language Understanding is the subdomain of Natural Language Processing where people used to design AI based applications have ability to understand the human languages. HashInclude Speech Processing team has a project named Virtual Assistant. For this project they appointed you as a data engineer (who has good knowledge of creating clean datasets by writing efficient code). As a data engineer your first task is to make vowel recognition dataset. In this task you have to find the presence of vowels in all possible substrings of the given string. For each given string you have to return the total number of vowels.\n' +
                '\n' +
                'Example\n' +
                'Given a string "baceb" you can split it into substrings: b, ba, bac, bace, baceb, a, ac, ace, aceb, c, ce, ceb, e, eb, b. The number of vowels in each of these substrings is 0, 1, 1, 2, 2, 1, 1, 2, 2, 0, 1, 1, 1, 1, 0; if you sum up these number, you get 16 - the expected output.\n' +
                '\n' +
                'Note: your solution should have linear time complexity.',
            testData: ['aba', 'bab', 'abcd', 'aeiouAEIOU'],
            kata: functions.vowelRecognition,
            prettyKata: '<pre>function vowelRecognition2(input)\n' +
                '{\n' +
                '    let vowels = [\'a\',\'e\',\'i\',\'o\',\'u\',\'A\',\'E\',\'I\',\'O\',\'U\'];\n' +
                '    let appearanceCount = [];\n' +
                '    for (let i = 0; i < input.length; i++){\n' +
                '        let adder = input.length + appearanceCount[appearanceCount.length-1]-((i)*2);\n' +
                '        if (i === 0)\n' +
                '            adder = input.length;\n' +
                '        appearanceCount.push(adder);\n' +
                '    }\n' +
                '    let answer = 0;\n' +
                '    input.split(\'\').forEach((v,i) => {\n' +
                '        if (vowels.includes(v)){\n' +
                '            answer += appearanceCount[i];\n' +
                '        }\n' +
                '    });\n' +
                '\n' +
                '    return answer;\n' +
                '}</pre>'
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