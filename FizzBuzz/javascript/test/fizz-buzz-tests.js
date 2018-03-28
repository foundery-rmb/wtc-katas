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
            var { error } = fizzBuzz("blah");

            if (error){

            }

        }
        catch (e){
            if (e === "Invalid input."){
                errorThrown = true;
            }
        }

        expect(errorThrown).to.be.true;
    });

    it("if it's not divisable by three or five, return the same number", function(){
        const result = fizzBuzz(4);

        expect(result).to.eql("4");
    });

    it("should return Fizz if divisable by three", function(){
        const result = fizzBuzz(3);

        expect("Fizz").to.eql(result);
    });

    it("should return Buzz if divisable by five", function(){
        const result = fizzBuzz(5);

        expect("Buzz").to.eql(result);
    });
    
    it("should return FizzBuzz if divisable by three and five", function(){
        const result = fizzBuzz(15);

        expect("FizzBuzz").to.eql(result);
    });
});