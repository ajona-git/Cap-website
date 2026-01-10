let productsHTML = '';

console.log(products[0].id)

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
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `
});
document.querySelector('.product-page-grid').innerHTML = productsHTML;
console.log(products.name)
console.log(products.priceCents)