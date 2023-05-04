
import {capitalize} from './capitalize.js'
test('capitalize first letter',()=>{
    const word = 'abandon';
    expect(capitalize(word)).toBe('Abandon');
});
