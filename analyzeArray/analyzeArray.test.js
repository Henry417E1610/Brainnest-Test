const analyzeArray = require('./analyzeArray')

test('I can get avarage number from an array of numbers',()=>{
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});
test('I can get min from an array of numbers',()=>{
    expect(analyzeArray([12,8,3,4,2,6]).min).toBe(2);
});
test('I can get max from an array of numbers',()=>{
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});
test('I can get length from an array of numbers',()=>{
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
test('I can get avarage number as decimal',()=>{
    expect(analyzeArray([2,3]).average).toBe(2.5);
});