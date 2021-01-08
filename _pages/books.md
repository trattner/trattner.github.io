---
layout: books
title: Books by Andy
permalink: /books/
date: 2021-1-8
---

_25% off everything here during January (book launch + my birthday month)! Book and shipping details: [YourMovePublishing.com](https://yourmovepublishing.com)._

**How To Teach Your Child Chess**: buy <select name="teach-copies" id="teach-copies" onchange="updatePrices()">
  <option value="0">0</option>
  <option value="1" selected="selected">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="5">8</option>
  <option value="6">9</option>
  <option value="7">10</option>
</select>

**How To Enjoy Chess for Adult Beginners**: pre-order <select name="enjoy-copies" id="enjoy-copies" onchange="updatePrices()">
  <option value="0">0</option>
  <option value="1" selected="selected">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="5">8</option>
  <option value="6">9</option>
  <option value="7">10</option>
</select>

Sticker Price Total: <strike>$<span id="orig-price"></span><br></strike>
Discounted Price Total: $<span id="discount-price"></span><br>
<button id="checkout-btn" onclick="checkout()">CHECKOUT</button> <span id="redirect" style="display:none;">redirecting</span>
<!--<div style="text-align:right;"><button style="text-align:right;">checkout</button></div>-->

<script>
  function updatePrices(){
    var n_teach = document.getElementById("teach-copies").value;
    var n_enjoy = document.getElementById("enjoy-copies").value;
    var shipping = 0;
    if (n_teach >=1){
      shipping = 6.04;
    }
    var orig_total = n_teach * 18.95  + shipping + n_enjoy * 19.99;
    document.getElementById("orig-price").innerHTML = orig_total.toFixed(2);
    document.getElementById("discount-price").innerHTML = (orig_total * 0.75).toFixed(2);
    return;
  }

  function redirectDots() {
    var max_dots = 15;

    var cta_button = document.getElementById('checkout-btn');
    var cta_replace = document.getElementById('redirect');

    cta_button.style.display = "none";
    cta_replace.style.display = "inline-block";

    var dot_count = 0;
    var dotTrigger = setInterval(loadDots, 333);
    function loadDots() {
      if (dot_count >= max_dots){
        stopDots();
        return;
      }
      cta_replace.innerHTML += ' .';
      dot_count += 1;
      return;
    }
    function stopDots(){
      clearInterval(dotTrigger);
      cta_replace.innerHTML = 'Redirecting';
      cta_button.style.display = "inline-block";
      cta_replace.style.display = "none";
      return;
    }
    return;
  }

  function checkout(){
    redirectDots();
    var stripe = Stripe('pk_live_51I4z07DmqJwbTDJD2MyELRnWhxe0lFQnO9wyCAdAq0OfTXiKqHkj8e5j98AezGqPX9r2NSUWzNfQG7lUEdp9cmu400kpwTjeAs');
    var n_teach = parseInt(document.getElementById("teach-copies").value);
    var n_enjoy = parseInt(document.getElementById("enjoy-copies").value);
    var n_shipping = 0;
    if (n_teach >=1){
      n_shipping = 1;
      if (n_enjoy >=1){
        // all items
        stripe.redirectToCheckout({
          lineItems: [{price: 'price_1I7A1YDmqJwbTDJDI0zmuBO5', quantity: n_teach}, {price: 'price_1I7A38DmqJwbTDJDpGNR3TD2', quantity: n_shipping}, {price: 'price_1I79xDDmqJwbTDJD6WBJcO8T', quantity: n_enjoy}],
          mode: 'payment',
          successUrl: 'https://yourmovepublishing.com/success.html',
          cancelUrl: 'https://andytrattner.com/books',
          shippingAddressCollection: {
            allowedCountries: ['US'],
          },
          billingAddressCollection: 'auto'
        }).then(function (result) {
          if (result.error) {
            alert('Error: ' + `result.error.message`);
          }
        });
      } else {
        // just teach book
        stripe.redirectToCheckout({
          lineItems: [{price: 'price_1I7A1YDmqJwbTDJDI0zmuBO5', quantity: n_teach}, {price: 'price_1I7A38DmqJwbTDJDpGNR3TD2', quantity: n_shipping}],
          mode: 'payment',
          successUrl: 'https://yourmovepublishing.com/success.html',
          cancelUrl: 'https://andytrattner.com/books',
          shippingAddressCollection: {
            allowedCountries: ['US'],
          },
          billingAddressCollection: 'auto'
        }).then(function (result) {
          if (result.error) {
            alert('Error: ' + `result.error.message`);
          }
        });
      }
    } else {
      if (n_enjoy >=1){
        // just n_enjoy book
        stripe.redirectToCheckout({
          lineItems: [{price: 'price_1I79xDDmqJwbTDJD6WBJcO8T', quantity: n_enjoy}],
          mode: 'payment',
          successUrl: 'https://yourmovepublishing.com/success.html',
          cancelUrl: 'https://andytrattner.com/books',
          shippingAddressCollection: {
            allowedCountries: ['US'],
          },
          billingAddressCollection: 'auto'
        }).then(function (result) {
          if (result.error) {
            alert('Error: ' + `result.error.message`);
          }
        });
      } else {
        alert('no items selected');
      }
    }

    return;
  }

  $( document ).ready(function() {
    updatePrices();
  });


</script>
