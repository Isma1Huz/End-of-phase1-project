$('.carousel').carousel({
  interval: 3000
});

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [];
let selectedItems = [];

function initApp() {
  fetch('http://localhost:3000/products') 
    .then(response => response.json())
    .then(data => {
      products = data;
      generateProductList();
    })
    .catch(error => {
      console.log('Error fetching products:', error);
    });
}

function generateProductList() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="image/${value.image}">
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})" class="shop-now" >Add To Card</button>
      `;
    list.appendChild(newDiv);
  });
}

let listCards = [];

function addToCard(key) {
  if (listCards[key] == null) {
    // Copy product from list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
    selectedItems.push(listCards[key].price); // Add the item's price to selectedItems
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
        <div><img src="image/${value.image}"/></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>`;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
    selectedItems = selectedItems.filter((_, index) => index !== key); // Remove the item's price from selectedItems
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
    selectedItems[key] = listCards[key].price; // Update the item's price in selectedItems
  }

  reloadCard();
}

function calculateTotal() {
  var total = selectedItems.reduce((sum, price) => sum + price, 0);
  return total;
}

function fetchData() {
  var total = calculateTotal();
  var url = 'https://tinypesa.com/api/v1/express/initialize';
  var data = {
    amount: total,
    msisdn: document.getElementById('phoneNumber').value
  };
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Apikey': 'Me3s8tLM8vW' // Replace with your API key
  };
  var info = new URLSearchParams(data).toString();

  fetch(url, {
      method: 'POST',
      headers: headers,
      body: info
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success === 'true') {
        console.log('ERROR: ' + JSON.stringify(data));
      } else {
        window.alert("Transaction successfully initiated");
      }
    })
    .catch(function (error) {
      console.log('FETCH ERROR: ' + error);
    });
}

function saveAddress() {
  var city = document.querySelector('input[placeholder="City"]').value;
  var streetAddress = document.querySelector('input[placeholder="Street Address"]').value;
  var specialRequest = document.querySelector('input[placeholder="Special Request"]').value;

  var addressData = {
    city: city,
    streetAddress: streetAddress,
    specialRequest: specialRequest
  };

  fetch('http://localhost:3000/address', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(addressData)
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Address updated:', data);
    })
    .catch(function (error) {
      console.log('Error updating address:', error);
    });
}

document.getElementById('submitButton').addEventListener('click', fetchData);
document.querySelector('#save').addEventListener('click', saveAddress);

initApp();
