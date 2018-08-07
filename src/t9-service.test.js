const t9 = require('./t9-service');

it('Should return corresponding letters for the number when single number entered', () => {
    let expected = ['a', 'b', 'c'];
    let input = '2';
    let result = t9.getExpansions(input);
    expect(result).toEqual(expect.arrayContaining(expected));
});

it('Should return correct expansion for two numbers input', () => {
    let expected = [
        'ad', 'ae', 'af', 
        'bd', 'be', 'bf', 
        'cd', 'ce', 'cf'
    ];
    let input = '23';
    let result = t9.getExpansions(input);
    expect(result).toEqual(expect.arrayContaining(expected));
});

it('Should return correct expansion for three numbers input', () => {
    let expected = [
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
    let input = '234';
    let result = t9.getExpansions(input);
    expect(result).toEqual(expect.arrayContaining(expected));
});