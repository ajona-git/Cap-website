let productsHTML = '';

products.forEach((product)=>{
  productsHTML += `
      <div class="product-container">
      <div class="product-image-container"><img src=${product.image} alt="" class="product-image"></div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">NGN ${product.priceCents}</div>
            <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button class="add-to-cart js-add-to-cart" data-product-id=${product.id}>Add to Cart</button>
    </div>
  `
});
document.querySelector('.product-page-grid').innerHTML = productsHTML;


document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId = button.dataset.productId;

    let matchingItem ;
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity+=1
    }else{
       cart.push({
      productId : productId,
      quantity: 1
    });
    }
    let cartQuantity=0;
    cart.forEach((cartItem)=>{
      cartQuantity += cartItem.quantity
    });
    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
  });
});


