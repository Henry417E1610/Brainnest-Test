import {capitalize} from './capitalize.js'

function reverseString(str){
    const output = str.split("").reverse().join("");
    return output;
}
module.exports=capitalize;