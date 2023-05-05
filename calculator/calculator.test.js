const calculator = require('./calculator.js');

test('I can add two numbers',()=>{
    expect(calculator.add(1,1)).toBe(2);
});
test('I can subtract  two numbers',()=>{
    expect(calculator.subtract(5,1)).toBe(4);
});
test('I can divide two numbers',()=>{
    expect(calculator.divide(2,2)).toBe(1);
});
test('I can multiply two numbers',()=>{
    expect(calculator.multiply(10,5)).toBe(50);
});
test('I may get decimals by division',()=>{
    expect(calculator.divide(3,2)).toBe(1.5);
});
test('I cannot get answer by dividing zero',()=>{
    expect(calculator.divide(3,0)).toBe(NaN);
});