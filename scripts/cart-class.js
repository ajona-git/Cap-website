class Cart {
  cartItems;
  localStorageKey;

  constructor(localStorageKey){
  this.localStorageKey = localStorageKey;
  this.loadFromLocalStorage();
  }

  loadFromLocalStorage(){
  this.cartItems =JSON.parse(localStorage.getItem(this.localStorageKey));

  if(!this.cartItems){
    this.cartItems=
        [{
        productId: '57ccaabdb8e0bd729525c6ed86da63ce', 
        quantity: 2,
        deliveryOptionId: '1'
      },{
        productId: '3adedaafd92197a9528496e2bb7bb33b',
        quantity:2,
        deliveryOptionId: '2'
      },{ 
        productId: '401a0a5f6001abec394b8a0d70f226a9',
        quantity: 2,
        deliveryOptionId: '3'
      }];
    }
  };

  saveToLocalStorage(){
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
  };

  addToCart(productId){
   let matchingItem;
    this.cartItems.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity+=1
    }else{
       this.cartItems.push({
        productId: productId, 
        quantity:1,
        deliveryOptionId:'1'});
    };
    this.saveToLocalStorage();
  };

  removeFromCart(productId){
    const newCart =[];
    this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        };
    });
    this.cartItems = newCart;
    this.saveToLocalStorage();
  };

  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    this.cartItems.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId
    this.saveToLocalStorage();
  };


}

const cart= new Cart('cart-oop');
const businessCart = new Cart('cart-business');
const schoolCart= new Cart('cart-school');
const groceries = new Cart('cart-groceries')

 

businessCart.addToCart('00e11d179c66f614d63ca78c96880524');
schoolCart.addToCart('6c001568865e1bcf6f367aa82178c7bd');


console.log(cart);
console.log(businessCart);
console.log(schoolCart);
console.log(groceries)

 