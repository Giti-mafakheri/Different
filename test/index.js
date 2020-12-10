const expect = require('chai').expect;
const {addToCart} = require('../main');



// Step 1: Add products to the shopping cart.
// Given :
// An empty shopping cart
// And a product, Shower Gel with a unit price of 49.99
// When :
// The user adds 5 Shower Gels to the shopping cart
// Then :
// The shopping cart should contain 5 Shower Gels each with a unit price of 49.99
// And the shopping cart’s total price should equal 249.95

describe('addToCart', ()=>{
  it('The shopping cart should contain 5 shower gels',()=>{
   expect(addToCart("ShowerGel" , 5),6);
  //  expect(addToCart("ShowerGel" , 5)).to.have.lengthOf(5);
  });
  it('the shopping carts total price should equal 249.95',()=>{
    expect(addToCart("ShowerGel" , 5),249.95);
  });

})

// Step 2: Add additional products of the same type to the shopping cart.
// Given :
// An empty shopping cart
// And a product, Shower Gel with a unit price of 49.99
// When :
// The user adds 5 Shower Gel to the shopping cart
// And then adds another 3 Shower Gel to the shopping cart
// Then :
// The shopping cart should contain 8 Shower Gels each with a unit price of 49.99
// And the shopping cart’s total price should equal 399.92

describe('addToCart', ()=>{

  it('The shopping cart shoul contain 8 shower gels',()=>{
    expect(addToCart("ShowerGel" , 5),addToCart("ShowerGel" , 5),8);
  });
  it('the shopping carts total price should equal 249.95',()=>{
    expect(addToCart("ShowerGel" , 5),addToCart("ShowerGel" , 5),249.95);
  });

})
// Step 3: Calculate the tax rate of the shopping cart with multiple items
// Given :
// An empty shopping cart
// And a product, Shower Gel with a unit price of 49.99
// And another product, Deodorant with a unit price of 99.99
// And a sales tax rate of 12.5%
// When :
// The user adds 2 Shower Gels to the shopping cart
// And then adds 2 Deodorant to the shopping cart
// Then :
// The shopping cart should contain 2 Shower Gels each with a unit price of 49.99
// And the shopping cart should contain 2 Deodorant each with a unit price of 99.99
// And the total sales tax amount for the shopping cart should equal 37.50
// And the shopping cart’s total price should equal 337.46
