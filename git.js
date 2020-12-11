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
debugger;
let shoppingCartItemCounts = shoppingCart.length;
let totalPriceRounded = Math.ceil(totalPrice*100)/100;
let totalTax = totalPrice*0.125;
let finalPriceWithTax =totalPrice+totalTax;
let totalPriceRoundedWithTax = Math.ceil(finalPriceWithTax*100)/100;
let totalTaxRounded = Math.ceil(totalTax*100)/100;

return [totalPriceRounded,shoppingCartItemCounts,totalTaxRounded,totalPriceRoundedWithTax,shoppingCart];
}

addToCart("ShowerGel",5)




// class shopping {
//
// constructor(){
//   this.arr = [],
//   this.totalPrice = 0,
//   this.products = [
//     {
//       name: "ShowerGel",
//       Price: 49.99
//     },
//     {
//       name: "Deodorant",
//       Price: 99.99
//     }
//   ]
// }
//
//   addToCart(item , number){
//     for (var i = 0; i < number; i++)
//        {
//          this.arr.push(item);
//        }
//
//   }
// }
// let myshopping = new shopping();
// myshopping.addToCart("farid",2);
// console.log(myshopping.addToCart("milk",2));
//     console.log(this.arr);
