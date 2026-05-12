import {addToCart, cart, loadFromLocalStorage} from '../scripts/cart.js'; 

describe('test suite: addToCart' , ()=>{
  it('adds an existing product to the cart', ()=>{
    
  });

  it('adds a new product to the cart', ()=>{
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify ([]);
    }); 
    loadFromLocalStorage();
    addToCart('00e11d179c66f614d63ca78c96880524');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(cart[0].productId).toEqual('00e11d179c66f614d63ca78c96880524');
  });
}) 