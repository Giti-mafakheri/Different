
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
function EmptyShoppingCard(){
  shoppingCart = [];
  totalPrice = 0;
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
let totalTax = totalPrice*0.125;
let finalPriceWithTax =totalPrice+totalTax;
let totalPriceRoundedWithTax = Math.ceil(finalPriceWithTax*100)/100;
let totalTaxRounded = Math.ceil(totalTax*100)/100;

return [totalPriceRounded,shoppingCartItemCounts,totalTaxRounded,totalPriceRoundedWithTax];
}

//##############################################
module.exports = {
    addToCart,
    EmptyShoppingCard
}
