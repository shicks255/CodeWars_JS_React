
var functions = {

    equalSidesOfAnArray: function(array)
    {
        let length = array.length;
        var middle = Math.floor(array.length / 2) - 1;

        for (let i = middle; i > 0; i--)
        {
            const firstHalfSum = array.slice(0, i).reduce( (a, b) => a+b);
            const secondHalf = array.slice(i+1, length).reduce( (a,b) => a+b);

            if (firstHalfSum === secondHalf)
                return i;
        }

        middle = Math.ceil(array.length / 2) - 1;

        for (let i = middle; i < length-1; i++)
        {
            const firstHalfSum = array.slice(0,i).reduce( (a,b) => a+b);
            const secondHalf = array.slice(i+1,length).reduce( (a,b) => a+b);

            if (firstHalfSum === secondHalf)
                return i;
        }

        return -1;
    },

    shortestWord: function(word)
    {
        let chunks = word.split(' ').map((value, index) => value.length);
        return Math.min(...chunks);
    },

    smallestIntegerInArray: function(array)
    {
        let smallest = NaN;
        array.forEach((value, index) =>
        {
            if (!smallest || smallest > value)
                smallest = value;
        });

        return smallest;
    },

    sumOfPositive: function(array)
    {
        let sum = 0;

        sum = array.reduce((prev, cur) =>
        {
            if (cur > 0)
                prev += cur;

            return prev;
        }, 0);

        return sum;
    },

    filterGeese: function(array)
    {
        const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

        return array.filter((val, indx) => {
            return geese.includes(val) === false;
        });
    },

    diagonal: function(matrix)
    {
        let principal = 0;
        let secondary = 0;

        let secondaryCounter = matrix[0].length-1;
        matrix.forEach((val,idx) => {
            principal += matrix[idx][idx]
            secondary += matrix[idx][secondaryCounter];
            secondaryCounter--;
        });

        if (principal > secondary)
            return "Principal Diagonal win!"
        else if (secondary > principal)
            return "Secondary Diagonal win!";
        else
            return "Draw!";
    },

    containers: function(input)
    {
        let containers = [];

        input.split('').map(x => x.charCodeAt(0)).forEach((v) => {
            if (containers.length === 0)
                containers.push([v]);
            else
            {
                let added = false;
                let containerToAdd = containers.find((v2) => {
                    if (v2[v2.length-1] >= v )
                        return true;
                    return false;
                });
                if (containerToAdd)
                {
                    containerToAdd.push(v);
                    added = true;
                }

                if(!added)
                    containers.push([v]);
            }
        });
        return containers.length;
    },

    functionalAddition: function(n)
    {
        return (y) => {
            return y + n;
        }
    },

    vowelRecognition: function(input) {
        let vowels = ['a','e','i','o','u','A','E','I','O','U'];
        let appearanceCount = [];
        for (let i = 0; i < input.length; i++){
            let adder = input.length + appearanceCount[appearanceCount.length-1]-((i)*2);
            if (i === 0)
                adder = input.length;
            appearanceCount.push(adder);
        }

        let answer = 0;
        input.split('').forEach((v,i) => {
            if (vowels.includes(v)){
                answer += appearanceCount[i];
            }
        });

        return answer;
    },

    sumOfLargestContiguousSubsequence: function(arr){
        let highestHere = arr[0];
        let highestSoFar = arr[0];

        for (let i = 1; i < arr.length; i++){
            highestHere = Math.max(arr[i], highestHere + arr[i]);
            highestSoFar = Math.max(highestHere, highestSoFar);
        }

        return highestSoFar > 0 ? highestSoFar : 0;
    },

    unluckyDays: function(year){
        let counts = 0;
        for (let i = 0; i < 12; i++){
            let date = new Date(year, i, 13);
            if (date.getDay() === 5)
                counts += 1;
        }

        return counts;
    },
    spinningRings: function([innerMax, outerMax]) {
        let moves = 0;
        let inner = 0, outer = 0

        do{
            inner--;
            outer ++;
            if (inner < 0) inner = innerMax;
            if (outer > outerMax) outer = 0;
            moves++;
        } while (inner !== outer)

        return moves;
    },
    primeStrings: function(s){
        let length = s.length;
        if (length === 1)
            return true;

        let chunkSize = Math.floor(length/2);
        while (chunkSize > 0)
        {
            let startIndex = 0;
            let chunks = [];
            for (let i = 0; i < length/chunkSize; i++)
            {
                chunks.push(s.substr(startIndex, chunkSize));
                startIndex += chunkSize;
            }
            chunkSize--;

            let answer = chunks.every(v => v === chunks[0]);
            if (answer === true)
                return false;
        }

        return true;
    }


}

export {functions};
