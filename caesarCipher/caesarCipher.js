const caesarCipher = function (str,shift){
    const regex = /^[^\d#$%&'()*+,-./:;˛<=>˙´¨¸˝?! @[\]^_`{|}~]+$/;
    let result = '';
for (let i = 0; i < str.length; i++){
    let char;
    if (regex.test(str[i])){
       char = String.fromCharCode(shiftedNum(str[i],shift));
    } else {
       char = str[i]
    }
    result+= char;
}
return result;
},
getCharCode = function(val, shift){
return val + shift
},
isUpperCase = function(val){
if (val === val.toUpperCase()){
   return true
} else {
    return false
}
},
wrap = function(val){
return val - 26;
},
shiftedCharCode = function(val, shift, num){
    if (getCharCode(val.charCodeAt(), shift)> num){
             return   getCharCode(wrap(val.charCodeAt()),shift)
            } else {
                return getCharCode(val.charCodeAt(), shift)
            }
},
shiftedNum = function(val, shift) {
    if (isUpperCase(val)){
         return  shiftedCharCode(val, shift, 90);
        } else {
            return shiftedCharCode(val, shift, 122)
        }
};

module.exports = caesarCipher;