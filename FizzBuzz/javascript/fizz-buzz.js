module.exports = function(intToConvert){
    if (intToConvert % 3 === 0 && intToConvert % 5 === 0) return "FizzBuzz"
    else if (intToConvert % 3 === 0) return "Fizz"
    else if (intToConvert % 5 === 0) return "Buzz"
    else return intToConvert.toString();
}