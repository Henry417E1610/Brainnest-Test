const calculator = require('./calculator.js');

test('I can add two nubers',()=>{
    expect(calculator.add(1,1)).toBe(2);
});
test('I can subtract  two nubers',()=>{
    expect(calculator.subtract(5,1)).toBe(4);
});
test('I can divide two nubers',()=>{
    expect(calculator.divide(2,2)).toBe(1);
});
test('I can multiply two nubers',()=>{
    expect(calculator.multiply(10,5)).toBe(50);
});