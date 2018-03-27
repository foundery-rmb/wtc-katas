var expect = require('chai').expect;

var fizzBuzz = require('../fizz-buzz');
//"Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples 
//of five print “Buzz”.
 //For numbers which are multiples of both three and five print “FizzBuzz”.

describe('FizzBuzz Kata', function(){
    it('Should not throw an error if it is a number',function(){
        fizzBuzz(100);
    });

    it('should throw an error if not a integer', function(){
        var errorThrown = false

        try {
            fizzBuzz("blah");
        }
        catch (e){
            if (e === "Invalid input."){
                errorThrown = true;
            }
        }

        expect(errorThrown).to.be.true;
    });
});



