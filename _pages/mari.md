---
layout: about
title: Mari
permalink: /mari/
date: 2021-1-29
description: 'Who is this guy?'
searchable: false
---

<!-- Load Stripe.js on your website. -->
<script src="https://js.stripe.com/v3"></script>

<!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
<button
  style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em;cursor:pointer"
  id="checkout-button-price_1Jkat4DmqJwbTDJD6lYUgk07"
  role="link"
  type="button"
>
  Checkout
</button>

<div id="error-message"></div>

<script>
(function() {
  var stripe = Stripe('pk_live_51I4z07DmqJwbTDJD2MyELRnWhxe0lFQnO9wyCAdAq0OfTXiKqHkj8e5j98AezGqPX9r2NSUWzNfQG7lUEdp9cmu400kpwTjeAs');

  var checkoutButton = document.getElementById('checkout-button-price_1Jkat4DmqJwbTDJD6lYUgk07');
  checkoutButton.addEventListener('click', function () {
    /*
     * When the customer clicks on the button, redirect
     * them to Checkout.
     */
    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1Jkat4DmqJwbTDJD6lYUgk07', quantity: 1}],
      mode: 'payment',
      /*
       * Do not rely on the redirect to the successUrl for fulfilling
       * purchases, customers may not always reach the success_url after
       * a successful payment.
       * Instead use one of the strategies described in
       * https://stripe.com/docs/payments/checkout/fulfill-orders
       */
      successUrl: 'https://your-move-publishing.github.io/success',
      cancelUrl: 'https://your-move-publishing.github.io/canceled',
    })
    .then(function (result) {
      if (result.error) {
        /*
         * If `redirectToCheckout` fails due to a browser or network
         * error, display the localized error message to your customer.
         */
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();
</script>
