const expect = require('chai').expect;
const { findMax, sayHello} = require('../main');

describe('findMax', ()=>{
    it('should find the largest number in an array', ()=>{
        let testArray = [3,4,2,1,2];
        expect(findMax(testArray)).to.equal(4);
    });
    it('should work for negative numbers', ()=>{
        let testNegatives = [-1, -4, -2];
        expect(findMax(testNegatives)).to.equal(-1);
    });
})



describe('sayHello',()=>{
  it('this function should return hello',()=>{
    expect(sayHello(), 'Hello');
  })
})
