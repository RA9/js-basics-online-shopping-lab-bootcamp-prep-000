var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const price = Math.floor(Math.random() * 100)
 cart.push({itemName: item, itemPrice: price})

 return `${item} has been added to your cart.`

return cart
}

function viewCart() {
  // write your code here
  if(!cart.length) {
    return "Your shopping cart is empty."
  }

  const itemAndPrices = []


  let intro = "In your cart, you have"

 for (let i in cart ) {
    itemAndPrices.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }

  if (cart.length == 1)
  {
        return `${intro} ${itemAndPrices}.`
   } else if (cart.length > 1)
   {
       let lastItem = itemAndPrices.splice(cart.length -1, 1)
       let end = itemAndPrices.join(', ')
       return `${intro} ${end}, and ${lastItem}.`
   }
}


function total() {
  // write your code here
  let result = 0
  for(let i in cart) {
    result += cart[i].itemPrice
  }
  return result
}

function removeFromCart(item) {
  // write your code here
  if(cart[item]) {
    cart[item].splice()
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
