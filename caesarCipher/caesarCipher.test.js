const caesarCipher = require("./caesarCipher");


test('caesarCipher function encodes first argument at shift of second argument',()=>{
    expect(caesarCipher('welivehere',2)).toBe('ygnkxgjgtg')
});
test('output of a function wrapps from z to a',()=>{
    expect(caesarCipher('welivehere',10)).toBe('govsforobo')
});
test('output of a function keeps the cases',()=>{
    expect(caesarCipher('Ilivehere',3)).toBe('Lolyhkhuh');
});
test('punctuation is not shifted',()=>{
  expect(caesarCipher('Ilivehere!',3)).toBe('Lolyhkhuh!');
});
test('spaces are not shifted',()=>{
    expect(caesarCipher('I live here',3)).toBe('L olyh khuh');
});
test('caesarCipher can encode backward',()=>{
    expect(caesarCipher('I live here',-2)).toBe('G jgtc fcpc');
})