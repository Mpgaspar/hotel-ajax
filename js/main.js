// GET elements in HTML DOM through of the id 
var btnSearch = document.getElementById('btnSearch');
var summary = document.getElementById("summary");
var roomSummary = document.getElementById("room-summary");
var priceSummary = document.getElementById("price-summary");


// Use method click to execute functions
btnSearch.addEventListener("click", getInputs);

// GET inputs values and change Summary
function getInputs() {
  event.preventDefault();
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;

  document.getElementById("checkin-summary").innerHTML = checkin;
  document.getElementById("checkout-summary").innerHTML = checkout;
  document.getElementById("adults-summary").innerHTML = adults;
  document.getElementById("children-summary").innerHTML = children;
  
  // Validations 
  if(adults == "") {
    alert('Please insert the number of people');  
  };

  // Logic of promo_code (Number of adults equal number of children)
  if(adults == children && adults != "") {
    alert('Congratulations!!! You have a promotional code!!!');
    alert('promo_code = XYZ70');
  }
}

// GET data of JSON file with Ajax request
window.onload = function showRooms() {    
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
      </div>`
      });
      
      
      btnSearch.addEventListener('click', searchRooms);
      
      function searchRooms() {
        event.preventDefault();
        var adultsInpt = document.getElementById("adults").value;
        var checkin = document.getElementById("checkin").value;
        var dateSplit = checkin.split('/');

        //var day = dateSplit[0]; 
        var month = dateSplit[1]; 
        //var year = dateSplit[2]; 
        
        // THE BEST ROOM FOR MORE THAN 4 ADULTS
        if(adultsInpt >= "4") {
        content.innerHTML = `<div class="col-md-8">
        <div id="card" class="card clearfix pointer">
            <div class="room-image">
                <img id="photo" src="${myObj[2].photo}" width="100%" />
            </div>

            <div class="room-content">
                <h5 id="room" class="form-group">${myObj[2].title}</h5>
                <p id="description" class="form-group">${myObj[2].body}</p>

                <p>Size: <span id="size" class="form-group">${myObj[2].size}</span>m²</p>
                
                <div class="room-info">
                    <div class="item">
                        <span class="inline-block">
                            <img src="images/icons/double-bed.svg" width="40">
                        </span>
                        <div>Beds: <span id="beds">${myObj[2].beds}</span></div>
                    </div>
                    <div class="item">People: <span id="people">${myObj[2].people}</span></div>
                    <div class="item price text-right">
                        <span class="line-through">€400</span>
                        €<span id="price">${myObj[2].price}</span>
                    </div>    
                </div>
             </div>
        </div>
    </div>`
        summary.classList.remove('hidden');
        roomSummary.innerText = myObj[2].title;
        priceSummary.innerText = myObj[2].price;
        } 
        
        // JUST SIMPLE ROOM FOR 2 OR LESS ADULTS
        if(adultsInpt <= "2" && adultsInpt != "") {
          content.innerHTML = `<div class="col-md-8">
          <div id="card" class="card clearfix pointer">
              <div class="room-image">
                  <img id="photo" src="${myObj[0].photo}" width="100%" />
              </div>
  
              <div class="room-content">
                  <h5 id="room" class="form-group">${myObj[0].title}</h5>
                  <p id="description" class="form-group">${myObj[0].body}</p>
  
                  <p>Size: <span id="size" class="form-group">${myObj[0].size}</span>m²</p>
                  
                  <div class="room-info">
                      <div class="item">
                          <span class="inline-block">
                              <img src="images/icons/double-bed.svg" width="40">
                          </span>
                          <div>Beds: <span id="beds">${myObj[0].beds}</span></div>
                      </div>
                      <div class="item">People: <span id="people">${myObj[0].people}</span></div>
                      <div class="item price text-right">
                          <span class="line-through">€400</span>
                          €<span id="price">${myObj[0].price}</span>
                      </div>    
                  </div>
               </div>
          </div>
      </div>`
        summary.classList.remove('hidden');
        roomSummary.innerText = myObj[0].title;
        priceSummary.innerText = myObj[0].price;
        } 
        
        // JUST BUNGALOW AVAILABLE FOR 3 ADULTS
        if(adultsInpt == "3" && adultsInpt != "") {
          content.innerHTML = `<div class="col-md-8">
          <div id="card" class="card clearfix pointer">
              <div class="room-image">
                  <img id="photo" src="${myObj[1].photo}" width="100%" />
              </div>
  
              <div class="room-content">
                  <h5 id="room" class="form-group">${myObj[1].title}</h5>
                  <p id="description" class="form-group">${myObj[1].body}</p>
  
                  <p>Size: <span id="size" class="form-group">${myObj[1].size}</span>m²</p>
                  
                  <div class="room-info">
                      <div class="item">
                          <span class="inline-block">
                              <img src="images/icons/double-bed.svg" width="40">
                          </span>
                          <div>Beds: <span id="beds">${myObj[1].beds}</span></div>
                      </div>
                      <div class="item">People: <span id="people">${myObj[1].people}</span></div>
                      <div class="item price text-right">
                          <span class="line-through">€400</span>
                          €<span id="price">${myObj[1].price}</span>
                      </div>    
                  </div>
               </div>
          </div>
      </div>`
        summary.classList.remove('hidden');
        roomSummary.innerText = myObj[1].title;
        priceSummary.innerText = myObj[1].price;
        } 
        
        // NO ROOMS AVAILABLE IN APRIL
        if(month == "04") {
          alert('No more rooms!')
          content.innerHTML = `<div class="col-md-8">
          <div id="card" class="card clearfix pointer">
              <div class="room-image">
                  <img id="photo" src="images/cocos/norooms.png" width="100%" />
              </div>
  
              <div class="room-content">
                  <h5 id="room" class="form-group">No rooms available!</h5>
                  <p id="description" class="form-group">Please choose another date.</p>
              </div>
          </div>
      </div>`
         summary.classList.add('hidden');
        }
      }
    } 
  };
  xhttp.open("GET", "../models/data.json", true);
  xhttp.send();
};


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

// price.addEventListener("click", codePromo);

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
