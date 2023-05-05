const reverseString = require('./reverseString.js');

test('reverseString function returns string reversed',()=>{
    const string = 'bahaduur';
    const reversed = reverseString(string);
    const stringAgain = reverseString(reversed);
    expect(reversed).toBe('ruudahab');
    expect(string).not.toBe(reversed);
    expect(stringAgain).toBe(string);

});