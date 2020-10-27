const lib = require('./lib');

//test numbers
describe('absolute',() =>{
    it('Always return positive number if input is positive',() =>{
        let result = lib.absolute(1);
        expect(result).toBe(1);
    });
    it('Always return positive number if input is negative',() =>{
        let result = lib.absolute(-1);
        expect(result).toBe(1);
    });
});

// test string
describe('greet',() => {
    it('should return greeting function',() =>{
        let result = lib.greet('Welcome Puneet');
        expect(result).toMatch(/Puneet/); // or use toContain
    });
});

//test Arrays
describe('getCurrencies',() => {
    it('should return supporting currencies',() =>{
        let result = lib.getCurrencies();
        // too general expect(result).toBeDefined();
        // too specific expect(result[0]).toBe('USD');
       // expect(result).toContain('USD');
        expect(result).toEqual(expect.arrayContaining(['USD','AUD','EUR']));
    });
});

// test Objects
describe('getProduct',() => {
    it('should return product with given id ',() =>{
        let result = lib.getProduct(1);
        expect(result).toEqual({id: 1, price:10});

        // not exact match, validate only properties interested in
        expect(result).toMatchObject({id: 1, price:10});

        expect(result).toHaveProperty('id',1);
    });
});

/**
test exceptions
*/

