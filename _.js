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
    }
};



// Do not write or modify code below this line.
module.exports = _;