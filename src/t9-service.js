const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: [ 'w', 'x', 'y', 'z'],
};

const reverseMap = {
    'a': 2, 'b': 2, 'c': 2,
    'd': 3, 'e': 3, 'f': 3,
    'g': 4, 'h': 4, 'i': 4,
    'j': 5, 'k': 5, 'l': 5,
    'm': 6, 'n': 6, 'o': 6,
    'p': 7, 'q': 7, 'r': 7, 's': 7,
    't': 8, 'u': 8, 'v': 8,
    'w': 9, 'x': 9, 'y': 9, 'z': 9
};

function validateInput(input) {
    let number = parseInt(input);
    if(!number) {
        return false;
    }
    return true;
}

function getExpansions(input, limit = 20) {
    if(!validateInput(input)) {
        throw new Error('Invalid input');
    }

    let expansions = [];
    Array.from(input).forEach((char, i) => {
        let num = parseInt(char);
        if(num < 2 || num > 9) {
            throw new Error('Invalid number in the numeric string');
        }
        
        let letters = map[num];
        if(expansions.length == 0) {
            // set initial expansions as the letters corresponding with the first number
            expansions = [...letters];
        } else {
            // do expand with the current letter
            let newExpansions = [];
            expansions.forEach((expansion) => {
                letters.forEach((letter) => {
                    newExpansions.push(expansion + letter);
                });
            });
            expansions = newExpansions;
        }
    });
    return expansions.slice(0, limit);
}

function getTextonyms(input, dictionary, limit = 20) {
    if(!validateInput(input)) {
        throw new Error('Invalid input');
    }

    let textonyms = dictionary[input] || [];
    if(!textonyms.length) {
        return getExpansions(input, limit);
    }

    return textonyms;
}

function expansionToNumbericString(input) {
    let str = '';
    Array.from(input).forEach((char, i) => {
        let num = reverseMap[char];
        str += num;
    });
    return str;
}

module.exports = {
    getExpansions: getExpansions,
    getTextonyms: getTextonyms,
    expansionToNumbericString: expansionToNumbericString
}