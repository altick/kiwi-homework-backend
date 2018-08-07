const t9 = require('./t9-service');

it('Should throw error for invalid input for expansion', () => {
    const input = 'abc';

    expect(() => t9.getExpansions(input)).toThrow('Invalid input');
});

it('Should return corresponding letters for the number when single number entered', () => {
    const expected = ['a', 'b', 'c'];
    const input = '2';
    let result = t9.getExpansions(input);
    expect(result).toEqual(expect.arrayContaining(expected));
});

it('Should return correct expansion for two numbers input', () => {
    const expected = [
        'ad', 'ae', 'af', 
        'bd', 'be', 'bf', 
        'cd', 'ce', 'cf'
    ];
    const input = '23';
    let result = t9.getExpansions(input);
    expect(result).toEqual(expect.arrayContaining(expected));
});

it('Should return correct expansion for three numbers input', () => {
    const expected = [
        'adg', 'adh', 'adi', 
        'aeg', 'aeh', 'aei', 
        'afg', 'afh', 'afi', 
        'bdg', 'bdh', 'bdi', 
        'beg', 'beh', 'bei', 
        'bfg', 'bfh', 'bfi', 
        'cdg', 'cdh', 'cdi', 
        'ceg', 'ceh', 'cei', 
        'cfg', 'cfh', 'cfi'
    ];
    const input = '234';
    let result = t9.getExpansions(input);
    expect(result).toEqual(expect.arrayContaining(expected));
});

it('Should throw error for invalid input for textonym', () => {
    const input = 'abc';

    expect(() => t9.getExpansions(input)).toThrow('Invalid input');
});

it('Should return empty array if there is no textonym for the given numeric string', () => {
    const dictionary = require('../words-en-t9.json');

    const expected = [];
    const input = '444444';
    let result = t9.getTextonyms(input, dictionary);
    expect(result).toEqual(expect.arrayContaining(expected));
});

it('Should return corresponding textonym for the given numeric string', () => {
    const dictionary = require('../words-en-t9.json');

    const expected = [
        'hello'
    ];
    const input = '43556';
    let result = t9.getTextonyms(input, dictionary);
    expect(result).toEqual(expect.arrayContaining(expected));
});

it('Should return corresponding textonyms for the given numeric string', () => {
    const dictionary = require('../words-en-t9.json');

    const expected = [
        'landscaper',
        'landscapes'
    ];
    const input = '5263722737';
    let result = t9.getTextonyms(input, dictionary);
    expect(result).toEqual(expect.arrayContaining(expected));
});


