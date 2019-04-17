
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
    }

}

export {functions};
