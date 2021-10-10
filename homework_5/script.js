window.onload = function() {
  init();
}

const items = document.getElementById('details').children;
const itemNames = document.getElementById('names').children;

//on page load
function init() {
  itemSelection(items);
  items[0].setAttribute("class", "visible");
  itemNames[0].style.borderRight = "thick solid #AB785B";
}

function itemSelection(e) {
  for (i=0; i<e.length; i++) {
      e[i].setAttribute("class", "invisible");
  }
}

// Item Selection

document.getElementById('og').addEventListener('click', function(e) { 
  itemSelection(items);
  items[0].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[0].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('bl').addEventListener('click', function(e) { 
  itemSelection(items);
  items[1].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[1].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('wl').addEventListener('click', function(e) { 
  itemSelection(items);
  items[2].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[2].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('ogV').addEventListener('click', function(e) { 
  itemSelection(items);
  items[3].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[3].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('ps').addEventListener('click', function(e) { 
  itemSelection(items);
  items[4].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[4].style.borderRight = "thick solid #AB785B";
}, false);

document.getElementById('cp').addEventListener('click', function(e) { 
  itemSelection(items);
  items[5].setAttribute("class", "visible");
  for (i=0; i<itemNames.length; i++) {
    itemNames[i].style.borderRight = "none";
  }
  itemNames[5].style.borderRight = "thick solid #AB785B";
}, false);

// document.addEventListener('click', function(e) {
//   for (i=0; i<itemNames.length; i++) {
//     itemNames[i].style.borderRight = "none";
//   }
// }, false);