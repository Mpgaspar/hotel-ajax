// GET button element in HTML DOM through of the id 
var searchBtn = document.getElementById("searchBtn");

// Use method click to execute functions
searchBtn.addEventListener("click", showRooms);
searchBtn.addEventListener("click", getInputs);

// GET inputs values and change HTML elements
function getInputs() {
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;

  document.getElementById("checkin-summary").innerHTML = checkin;
  document.getElementById("checkout-summary").innerHTML = checkout;
  document.getElementById("adults-summary").innerHTML = adults;
  document.getElementById("children-summary").innerHTML = children;
  
  // Validations and logic of promo_code
  if(adults == "" || children == "") {
    alert('Please insert the quantity of people');  
  };

  if(adults == children && adults!=0 && children!=0) {
    alert('Congratulations you have a promotional code!!!');
    alert('XYZ70');
  }
}

// GET data of JSON file with Ajax request
function showRooms() {
  event.preventDefault(); 
  var content = document.getElementById("content");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      myObj.forEach(function(todo,i){
      content.innerHTML += `<div class="col-md-8">
          <div id="card" class="card clearfix pointer">
              <div class="room-image">
                  <img id="photo" src="${todo.photo}" width="100%" />
              </div>

              <div class="room-content">
                  <h5 id="room" class="form-group">${todo.title}</h5>
                  <p id="description" class="form-group">${todo.body}</p>

                  <p>Size: <span id="size" class="form-group">${todo.size}</span>m²</p>
                  
                  <div class="room-info">
                      <div class="item">
                          <span class="inline-block">
                              <img src="images/icons/double-bed.svg" width="40">
                          </span>
                          <div>Beds: <span id="beds">${todo.beds}</span></div>
                      </div>
                      <div class="item">People: <span id="people">${todo.people}</span></div>
                      <div class="item price text-right">
                          <span class="line-through">€400</span>
                          €<span id="price">${todo.price}</span>
                      </div>    
                  </div>
               </div>
          </div>
      </div>
`
      document.getElementById("summary").classList.remove("hidden");
      document.getElementById("room-summary").innerHTML = todo.title;
      document.getElementById("price-summary").innerHTML = todo.price;     
});
    }
  };
  xhttp.open("GET", "../models/data.json", true);
  xhttp.send();
}

// Change summary and active card when select a room
var card = document.querySelectorAll(".card");

card.forEach(function(node, index){
  node.addEventListener("click", function(){
    document.getElementById("room-summary").innerHTML = "TEST";
    document.getElementById("price-summary").innerHTML = "TEST";  
    
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    
 })});

// Use input quantity of rooms
var rooms = document.getElementById("rooms");
rooms.addEventListener("click", quantityRooms);

// GET number of rooms input and calculate the price
function quantityRooms() {
  var rooms = document.getElementById("rooms").value;
  var priceSummary = document.getElementById("price-summary").innerText;
  var roomsValue = parseInt(rooms);
  var priceSummaryValue = parseInt(priceSummary);

  document.getElementById("price-summary").innerHTML = priceSummaryValue * roomsValue;
}

console.log(document.URL);

// Change CSS class of the price when use codePromo
price = document.getElementById("price");

price.addEventListener("click", codePromo);

function codePromo() {
  realPrice = document.getElementById("realPrice");
  realPrice.classList.replace("line-through","show-price");
  document.getElementById("price").innerText = "200";
}

// Price Details
var priceDetails = document.getElementById("priceDetails");

priceDetails.addEventListener("click", showDetails);

function showDetails() {
  event.preventDefault(); 
  alert('Congratulations you have a promotional code!!!');
  alert('XYZ70');
}




















// Another way to change the DOM
// function showRooms() {
//     var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4 && this.status == 200) {
//             var myObj = JSON.parse(this.responseText);  
//             document.getElementById("photo").src = myObj[8].photo;
//             document.getElementById("room").innerHTML = myObj[8].title;
//             document.getElementById("description").innerHTML = myObj[8].body;
//             document.getElementById("size").innerHTML = myObj[8].size;
//             document.getElementById("beds").innerHTML = myObj[8].beds;
//             document.getElementById("people").innerHTML = myObj[8].people;
//             document.getElementById("price").innerHTML = myObj[8].price;

//             document.getElementById("room-summary").innerHTML = myObj[8].title;
//             document.getElementById("price-summary").innerHTML = myObj[8].price;
//           }
//         };
//         xhttp.open("GET", "../models/data.json", true);
//         xhttp.send();
// }
