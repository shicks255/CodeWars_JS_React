
var functions = {

    equalSidesOfAnArray: function(array)
    {
        let length = array.length;
        //find mid point of array, rounded down.
        //subtract 1 for 0 based to make it easier
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
    }

}

export {functions};
