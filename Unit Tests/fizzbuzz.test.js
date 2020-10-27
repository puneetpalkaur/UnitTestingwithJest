const lib = require('./fizzbuzz');

describe('fizzbuzz',() =>{
    it('should throw an exception if input is not a number',() =>{
       expect(()=>{lib.fizzBuzz('a')}).toThrow();
       expect(()=>{lib.fizzBuzz(null)}).toThrow();
    });

    it('should return FizzBuzz if input is divisible by 3 or 5', () =>{
       const result =  lib.fizzBuzz(15);
       expect(result).toBe('FizzBuzz');
    });
    it('should return FizzBuzz if input is divisible by 3', () =>{
        const result =  lib.fizzBuzz(6);
        expect(result).toBe('Fizz');
    });
    it('should return FizzBuzz if input is divisible by 5', () =>{
        const result =  lib.fizzBuzz(5);
        expect(result).toBe('Buzz');
    });
});