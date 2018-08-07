const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: [ 'w', 'x', 'y', 'z'],
}

module.exports = {
    getExpansions(input) {

        let expansions = [];
        Array.from(input).forEach((char, i) => {
            let num = parseInt(char);
            
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

        return expansions;
    }
}