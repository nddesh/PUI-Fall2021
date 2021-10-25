document.getElementById('cartItems').innerHTML = localStorage.getItem("cartCounter");

window.onload = function() {
  init();
}

const items = document.getElementById('details').children;
const itemNames = document.getElementById('names').children;

//storage elements
var name = 'Original';
var price = '2.99';

//on page load
function init() {
  selection(items);
  items[0].setAttribute("class", "visible");
  itemNames[0].style.borderRight = "thick solid #AB785B";
}

function selection(e) {
  for (i=0; i<e.length; i++) {
      e[i].setAttribute("class", "invisible");
  }
}

// Item Selection

document.getElementById('og').addEventListener('click', function(e) { 
  selection(items);
  items[0].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[0].style.borderRight = "thick solid #AB785B";
  name = itemNames[0].textContent;
}, false);

document.getElementById('bl').addEventListener('click', function(e) { 
  selection(items);
  items[1].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[1].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('wl').addEventListener('click', function(e) { 
  selection(items);
  items[2].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[2].style.borderRight = "thick solid #AB785B";
  name = 'Original';
}, false);

document.getElementById('ogV').addEventListener('click', function(e) { 
  selection(items);
  items[3].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[3].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('ps').addEventListener('click', function(e) { 
  selection(items);
  items[4].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[4].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('cp').addEventListener('click', function(e) { 
  selection(items);
  items[5].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[5].style.borderRight = "thick solid #AB785B";
}, false);


//dropdown selections

function dropdown1(glaze) {
  localStorage.setItem("glaze", glaze);
}

function dropdown2(quant) {
  localStorage.setItem("quant", quant);
}

document.getElementById('ogAdd').addEventListener('click', function(e) {
  //increase counter
  var count = Number(localStorage.getItem("quant"));
  cartCounter = Number(localStorage.getItem("cartCounter"));
  var tempCounter = Number(cartCounter + count);
  cartCounter = tempCounter;
  localStorage.setItem("cartCounter", cartCounter);
  document.getElementById('cartItems').innerHTML = cartCounter;
  location.href = 'cart.html';
});

document.getElementById('blAdd').addEventListener('click', function(e) {
  //increase counter
  var count = Number(localStorage.getItem("quant"));
  cartCounter = Number(localStorage.getItem("cartCounter"));
  var tempCounter = Number(cartCounter + count);
  cartCounter = tempCounter;
  localStorage.setItem("cartCounter", cartCounter);
  document.getElementById('cartItems').innerHTML = cartCounter;
  location.href = 'cart.html';
});

document.getElementById('wlAdd').addEventListener('click', function(e) {
  //increase counter
  var count = Number(localStorage.getItem("quant"));
  cartCounter = Number(localStorage.getItem("cartCounter"));
  var tempCounter = Number(cartCounter + count);
  cartCounter = tempCounter;
  localStorage.setItem("cartCounter", cartCounter);
  document.getElementById('cartItems').innerHTML = cartCounter;
  location.href = 'cart.html';
});

document.getElementById('ogVAdd').addEventListener('click', function(e) {
  //increase counter
  var count = Number(localStorage.getItem("quant"));
  cartCounter = Number(localStorage.getItem("cartCounter"));
  var tempCounter = Number(cartCounter + count);
  cartCounter = tempCounter;
  localStorage.setItem("cartCounter", cartCounter);
  document.getElementById('cartItems').innerHTML = cartCounter;
  location.href = 'cart.html';
});

document.getElementById('psAdd').addEventListener('click', function(e) {
  //increase counter
  var count = Number(localStorage.getItem("quant"));
  cartCounter = Number(localStorage.getItem("cartCounter"));
  var tempCounter = Number(cartCounter + count);
  cartCounter = tempCounter;
  localStorage.setItem("cartCounter", cartCounter);
  document.getElementById('cartItems').innerHTML = cartCounter;
  location.href = 'cart.html';
});

document.getElementById('cpAdd').addEventListener('click', function(e) {
  //increase counter
  var count = Number(localStorage.getItem("quant"));
  cartCounter = Number(localStorage.getItem("cartCounter"));
  var tempCounter = Number(cartCounter + count);
  cartCounter = tempCounter;
  localStorage.setItem("cartCounter", cartCounter);
  document.getElementById('cartItems').innerHTML = cartCounter;
  location.href = 'cart.html';
});