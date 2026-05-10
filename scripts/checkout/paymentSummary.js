import {cart} from '../cart.js'
import {getProduct} from '../product.js'
import {getDeliveryOption} from '../deliveryOptions.js'


export function renderPaymentSummary(){
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem)=>{
   const product = getProduct(cartItem.productId);
   productPriceCents+= product.priceCents * cartItem.quantity;

   const deliveryOption =  getDeliveryOption(cartItem.deliveryOptionId);
   shippingPriceCents+= deliveryOption.priceCents
  });

  const totalCentsBeforeTax = shippingPriceCents + productPriceCents;
  const taxCents = totalCentsBeforeTax * 0.1;
  const totalCents = totalCentsBeforeTax + taxCents;


   const paymentSummaryHTML =
   `
    <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">NGN ${productPriceCents.toLocaleString()}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">NGN ${shippingPriceCents.toLocaleString()}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">NGN ${totalCentsBeforeTax.toLocaleString()}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">NGN ${taxCents.toLocaleString()}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">NGN ${totalCents.toLocaleString()}</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
   `
   document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
};
