// GET elements in HTML DOM through of the id 
var btnSearch = document.getElementById('btnSearch');
var btnCode = document.getElementById("btnCode");
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
    alert('Please insert the number of people.');  
  };

  // How to get a promo_code (Number of adults equal number of children)
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

      // Change summary and active card when select a room
      var card = document.querySelectorAll(".card");

      card.forEach(function(node, index){
      card[0].classList.add("active"); 
      node.addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      
      // HTML DOM Navigation
      var nodePriceSummary = node.lastElementChild.lastElementChild.lastElementChild.lastElementChild.textContent;
      var nodeRoomSummary = node.lastElementChild.firstElementChild.textContent;
      

      document.getElementById("room-summary").innerText = nodeRoomSummary ;
      document.getElementById("price-summary").innerText = nodePriceSummary;

      // Use number of rooms input
      var rooms = document.getElementById("rooms");
      rooms.addEventListener("click", numberRooms);

      // GET number of rooms input and calculate the price
      function numberRooms() {
        var roomsqtd = rooms.value;
        roomsValue = parseInt(roomsqtd);
        var priceSummaryValue = parseInt(nodePriceSummary);
        
        priceSummary.innerHTML = priceSummaryValue * roomsValue;
}
 })});
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
        
                // JUST SIMPLE ROOM FOR 2 OR LESS ADULTS
                if(adultsInpt <= "2" && adultsInpt != "") {
                    content.innerHTML = `<div class="col-md-8">
                    <div id="card" class="card clearfix pointer active">
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
                  roomSummary.innerText = myObj[0].title;
                  priceSummary.innerText = myObj[0].price;
                  summary.classList.remove('hidden');
                  priceSummaryValue = parseInt(myObj[0].price);

                  numberRooms();
                  
                  }

        // THE BEST ROOM FOR MORE THAN 4 ADULTS
        if(adultsInpt >= "4") {
        content.innerHTML = `<div class="col-md-8">
        <div id="card" class="card clearfix pointer active">
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
        priceSummaryValue = parseInt(myObj[2].price); 
        summary.classList.remove('hidden');
        roomSummary.innerText = myObj[2].title;
        priceSummary.innerText = myObj[2].price;
        } 
        
        // JUST BUNGALOW AVAILABLE FOR 3 ADULTS
        if(adultsInpt == "3" && adultsInpt != "") {
          content.innerHTML = `<div class="col-md-8">
          <div id="card" class="card clearfix pointer active">
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
        priceSummary.innerText = myObj[1].price;
        priceSummaryValue = myObj[1].price;
        summary.classList.remove('hidden');
        roomSummary.innerText = myObj[1].title;
        } 
        
        // NO ROOMS AVAILABLE IN APRIL
        if(month == "04") {
          alert('No more rooms!')
          content.innerHTML = `<div class="col-md-8">
          <div id="card" class="card clearfix pointer active">
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


// Logic of promo_code (promo_code = "XYZ70")
var price = document.getElementById("price");
var priceDetails = document.getElementById("priceDetails");

btnCode.addEventListener("click", codePromo);
priceDetails.addEventListener("click", showDetails);

function codePromo() {  
  var realPrice = document.getElementById("realPrice");
  var inptPromoCode = document.getElementById("inptPromoCode").value;

  var priceFloat = parseFloat(priceSummary.textContent);
  
  if(inptPromoCode == "") {
      alert('Please insert your promo_code!');
  } else if(inptPromoCode != "XYZ70") {
      alert('Please insert a valid promo_code!');
  }

  if(inptPromoCode == "XYZ70") {
    realPrice.innerText += priceSummary.textContent;
    realPrice.classList.replace("hidden","show-price");  
    priceSummary.innerText = priceFloat - (priceFloat * 0.7);
    alert ("Press Save to pay!");
    
  }
};

function showDetails() {
    var inptPromoCode = document.getElementById("inptPromoCode").value;
    
    if(inptPromoCode == "") {
        alert(`€${priceSummary.textContent} is the total to be paid including taxes and fees.`);
    } 
    
    if(inptPromoCode == "XYZ70") {
        alert(`You got a 70% discount on ${realPrice.textContent}!`);
    }
};

