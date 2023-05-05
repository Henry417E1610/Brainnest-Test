
import {capitalize} from './capitalize.js'
test('capitalize first letter of the word',()=>{
    const word = 'abandon';
    expect(capitalize(word)).toBe('Abandon');
});

test('capitalize first letter of the sentence',()=>{
    const word = 'this is me';
    expect(capitalize(word)).toBe('This is me');
});
