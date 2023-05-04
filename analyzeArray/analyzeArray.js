const analyzeArray = function(arr){
  
    return {
        average:getAverage(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }

},
getAverage = function(arr) {
    let sum = 0
arr.map(i=>{sum+=i})
return sum/arr.length
}


module.exports = analyzeArray;

