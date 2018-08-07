/**
 * Script for generating the T9 dictionary file.
 */

const fs = require('fs');
const readline = require('readline')
const t9 = require('../t9-service');

const file = 'words-en.txt';
const destJson = 'words-en-t9.json';

// init destination file
if(fs.existsSync(destJson)) {
    fs.unlinkSync(destJson);
}

let dictionary = {};

console.log('Generating dictionary...');

let lr = readline.createInterface({
    input: fs.createReadStream(file),
});

lr.on('line', (word) => {
    console.log('Processing word:', word);
    // get the numeric string corresponding to the word
    let numStr = t9.expansionToNumbericString(word);
    // add the word into the textonyms of the numeric string
    let words = dictionary[numStr];
    if(!words) {
        words = [];
    }
    words.push(word);
    // update the dictionary
    dictionary[numStr] = words;
});

lr.on('close', () => {
    // write the generated dictionary into the json file
    console.log('Saving dictionary...');
    fs.writeFile(destJson, JSON.stringify(dictionary));
    console.log('done!');
});

