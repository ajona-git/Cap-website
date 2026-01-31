export let cart =JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=
  [{
  productId: '57ccaabdb8e0bd729525c6ed86da63ce',
  quantity: 2
},{
  productId: '3adedaafd92197a9528496e2bb7bb33b',
  quantity:2
},{ productId: '401a0a5f6001abec394b8a0d70f226a9',
  quantity: 2
}
];
}

function saveToLocalStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
   let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity+=1
    }else{
       cart.push({productId: productId, quantity:1 });
    };
    saveToLocalStorage();
}
export function removeFromCart(productId){
  const newCart =[];
  cart.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      };
  });
  cart = newCart;
  saveToLocalStorage();
};