const t9 = require('./t9-service');

it('Should return correct textonyms', () => {
    let result = t9.getTextonyms('world');
    expect(result).toBe('hello world');
});