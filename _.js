const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end == null) {
            end = start;
            start = 0;
        }

        return number >= start && number < end || number > end && number <= start;
    },
    words(string) {
        return string.split(' ');
    }, 
    pad(string, length) {
        if (string.length >= length)
            return string;

        let startPaddingLength = Math.floor((length - string.length) / 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        let paddedString = ' ';

        return paddedString.repeat(startPaddingLength) + string + paddedString.repeat(endPaddingLength);
    },
    has(obj, key) {
        return obj[key] == null ? false : true;
    },
    invert(obj) {
        let invertedObj = {};

        for (let key in obj) {
            let originalValue = obj[key];
            invertedObj[originalValue] = key;
        }

        return invertedObj;
    },
    findKey(obj, predicate) {
        for (let key in obj) {
            if (predicate(obj[key]))
                return key;
        }

        return undefined;
    },
    drop(arr, nElements) {
        if (nElements == null)
            nElements = 1;

        return arr.slice(nElements);
    },
    dropWhile(arr, predicate) {
        let index = arr.findIndex((element, index) => !predicate(element, index, arr));
        return this.drop(arr, index);
    },
    chunk(arr, size) {
        if (size == null)
            size = 1;

        let newArr = [];
        for (let i = 0; i < arr.length; i+=size){
            newArr.push(arr.slice(i, i + size));
        }

        return newArr;
    }
};



// Do not write or modify code below this line.
module.exports = _;