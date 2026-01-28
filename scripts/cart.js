export const cart=[{
  productId: '57ccaabdb8e0bd729525c6ed86da63ce',
  quantity: 2
},{
  productId: '3adedaafd92197a9528496e2bb7bb33b',
  quantity:2
},{ productId: '401a0a5f6001abec394b8a0d70f226a9',
  quantity: 2
}
];
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
}