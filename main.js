

let shoppingCart = [];
let totalPrice = 0;
let products =[
  {
    name: "ShowerGel",
    Price: 49.99
  },
  {
    name: "Deodorant",
    Price: 99.99
  }
];
//###########################################
const calcTotalPrice = function(){
let lastItem = shoppingCart.length;
let selectedProduct=shoppingCart[lastItem-1];
let selectedProductPrice = selectedProduct[0].Price;
totalPrice += selectedProductPrice;
}

function addToCart(item , number){
  let selectedProduct = products.filter(product => product.name === item);
    for (var i = 0; i < number; i++)
       {
         shoppingCart.push(selectedProduct);
         calcTotalPrice();
       }

let shoppingCartItemCounts = shoppingCart.length;
let totalPriceRounded = Math.ceil(totalPrice*100)/100;
console.log(`shopping cart contains ${shoppingCartItemCounts}items`);
console.log(`total price is: ${totalPriceRounded}`);
return (shoppingCartItemCounts,totalPriceRounded);
}

//##############################################
module.exports = {
    addToCart
}
