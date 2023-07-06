$('.carousel').carousel({
  interval: 2000
})






// Each card
`
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
`

let cardImage = document.querySelector('.card-img-top')
let shop1 = document.getElementById("shop-1").addEventListener("click", function(){ console.log("clicked")})
// cardImage.src = `${}`










































// // Mpesa intergration


// function calculateTotal() {
//   var total = 0;
//   var items = document.querySelectorAll('input[name="item"]:checked');
//   for (var i = 0; i < items.length; i++) {
//     var item = items[i].value;
//     var amount = parseInt(item);
//     total += amount;
//   }
//   return total;
// }

// function fetchData() {
//   var total = calculateTotal();
//   var url = 'https://tinypesa.com/api/v1/express/initialize';
//   var data = {
//       amount: total,
//       msisdn: document.getElementById('phoneNumber').value
//   };
//   var headers = {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'Apikey': 'Me3s8tLM8vW' // Replace with your API key
//   };
//   var info = new URLSearchParams(data).toString();

//   fetch(url, {
//       method: 'POST',
//       headers: headers,
//       body: info
//   })
//   .then(function(response) {
//       return response.json();
//   })
//   .then(function(data) {
//       if (data.success === 'true') {
//           console.log('ERROR: ' + JSON.stringify(data));
//       } else {
//           window.alert("Transaction successfully initiated");
//       }
//   })
//   .catch(function(error) {
//       console.log('FETCH ERROR: ' + error);
//   });
// }



//   document.getElementById('submitButton').addEventListener('click', fetchData) 




































// // ______________________________________________________________________________________________________










// // Paypal 



// // window.addEventListener("load", function () {
// //   var cartItems = [{
// //       name: "Product 1",
// //       description: "Description of product 1",
// //       quantity: 1,
// //       price: 50,
// //       sku: "prod1",
// //       currency: "USD"
// //   }, {
// //       name: "Product 2",
// //       description: "Description of product 2",
// //       quantity: 3,
// //       price: 20,
// //       sku: "prod2",
// //       currency: "USD"
// //   }, {
// //       name: "Product 3",
// //       description: "Description of product 3",
// //       quantity: 4,
// //       price: 10,
// //       sku: "prod3",
// //       currency: "USD"
// //   }];

// //   var total = 0;
// //   for (var a = 0; a < cartItems.length; a++) {
// //       total += (cartItems[a].price * cartItems[a].quantity);
// //   }

// //   // Render the PayPal button
// //   paypal.Button.render({

// //       // Set your environment
// //       env: 'sandbox', // sandbox | production

// //       // Specify the style of the button
// //       style: {
// //           label: 'checkout',
// //           size: 'medium', // small | medium | large | responsive
// //           shape: 'pill', // pill | rect
// //           color: 'gold', // gold | blue | silver | black,
// //           layout: 'vertical'
// //       },

// //       // PayPal Client IDs - replace with your own
// //       // Create a PayPal app: https://developer.paypal.com/developer/applications/create

// //       client: {
// //           sandbox: '',
// //           production: ''
// //       },

// //       funding: {
// //           allowed: [
// //               paypal.FUNDING.CARD,
// //               paypal.FUNDING.ELV
// //           ]
// //       },

// //       payment: function(data, actions) {
// //           return actions.payment.create({
// //               payment: {
// //                   transactions: [{
// //                       amount: {
// //                           total: total,
// //                           currency: 'USD'
// //                       },
// //                       item_list: {
// //                           // custom cartItems array created specifically for PayPal
// //                           items: cartItems
// //                       }
// //                   }]
// //               }
// //           });
// //       },

// //       onAuthorize: function(data, actions) {
// //           return actions.payment.execute().then(function() {
// //               // you can use all the values received from PayPal as you want
// //               console.log({
// //                   "intent": data.intent,
// //                   "orderID": data.orderID,
// //                   "payerID": data.payerID,
// //                   "paymentID": data.paymentID,
// //                   "paymentToken": data.paymentToken
// //               });

// //               // [call AJAX here]
// //           });
// //       },
       
// //       onCancel: function (data, actions) {
// //           console.log(data);
// //       }

// //   }, '#btn-paypal-checkout');
// // });