// Use elements in HTML DOM through of the id 
var btnSearch = document.getElementById('btnSearch');
var btnCode = document.getElementById("btnCode");
var btnSave = document.getElementById("btnSave");
var summary = document.getElementById("summary");
var roomSummary = document.getElementById("room-summary");
var priceSummary = document.getElementById("price-summary");


// Use method click to execute functions
btnSearch.addEventListener("click", getInputs);

// Use inputs values and change Summary
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
  summary.classList.remove('hidden');
  
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      myObj.forEach(function(todo,i){
      content.innerHTML += `
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
      rooms = document.getElementById("rooms");
      rooms.addEventListener("click", numberRooms);

      // Number of rooms and calculate the price
      function numberRooms() {
        roomsqtd = rooms.value;
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
                    content.innerHTML = `
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
                    </div>`

                  summary.classList.remove('hidden');
                  roomSummary.innerText = myObj[0].title;
                  priceSummary.innerText = myObj[0].price;
                  
                  var rooms = document.getElementById("rooms");
                  rooms.addEventListener("click", numberRooms);

                  function numberRooms() {
                    var roomsqtd = rooms.value;
                    roomsValue = parseInt(roomsqtd);
                    var priceSummaryValue = parseInt(myObj[0].price);
                    
                    priceSummary.innerHTML = priceSummaryValue * roomsValue;
                  }; 
                  
                  }

        // THE BEST ROOM FOR MORE THAN 4 ADULTS
        if(adultsInpt >= "4") {
        content.innerHTML = `
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
        </div>`

        summary.classList.remove('hidden');
        roomSummary.innerText = myObj[2].title;
        priceSummary.innerText = myObj[2].price;

        var rooms = document.getElementById("rooms");
                  rooms.addEventListener("click", numberRooms);

                  function numberRooms() {
                    var roomsqtd = rooms.value;
                    roomsValue = parseInt(roomsqtd);
                    var priceSummaryValue = parseInt(myObj[2].price);
                    
                    priceSummary.innerHTML = priceSummaryValue * roomsValue;
                  }; 
        } 
        
        // JUST BUNGALOW AVAILABLE FOR 3 ADULTS
        if(adultsInpt == "3" && adultsInpt != "") {
          content.innerHTML = `
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
          </div>`

        summary.classList.remove('hidden');
        priceSummary.innerText = myObj[1].price;
        roomSummary.innerText = myObj[1].title;

        var rooms = document.getElementById("rooms");
                  rooms.addEventListener("click", numberRooms);

                  function numberRooms() {
                    var roomsqtd = rooms.value;
                    roomsValue = parseInt(roomsqtd);
                    var priceSummaryValue = parseInt(myObj[1].price);
                    
                    priceSummary.innerHTML = priceSummaryValue * roomsValue;
                  }; 
        } 
        
        // NO ROOMS AVAILABLE IN APRIL
        if(month == "04") {
          alert('No more rooms!')
          content.innerHTML = `
          <div id="card" class="card clearfix pointer active">
              <div class="room-image">
                  <img id="photo" src="images/cocos/norooms.png" width="100%" />
              </div>
  
              <div class="room-content">
                  <h5 id="room" class="form-group">No rooms available!</h5>
                  <p id="description" class="form-group">Please choose another date.</p>
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

// Show Price Details
function showDetails() {
    var inptPromoCode = document.getElementById("inptPromoCode").value;
    
    if(inptPromoCode == "") {
        alert(`€${priceSummary.textContent} is the total to be paid including taxes and fees.`);
    } 
    
    if(inptPromoCode == "XYZ70") {
        alert(`You got a 70% discount on ${realPrice.textContent}!`);
    }
};

// Save data and go to payment page
btnSave.addEventListener("click", showPayment);

function showPayment() {
    var block = document.getElementById('block');
    var roomsQtd = document.getElementById('rooms').value
    

    alert(`Your reservation for the room ${roomSummary.textContent} has been saved!`)

    block.innerHTML = "";

    block.innerHTML += `<div class="container">
    <h1>${roomSummary.textContent}</h1>
    <div class="row">
    
        <div class="col-xs-12 col-md-12">
        <h3 class="active"> Number of rooms: ${roomsQtd}</h3>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        Payment Details
                    </h3>
                    <div class="checkbox pull-right">
                        <label>
                            <input type="checkbox" />
                            Remember
                        </label>
                    </div>
                </div>
                <div class="panel-body">
                    <form role="form">
                    <div class="form-group row">
                        <label for="cardNumber">
                            CARD NUMBER</label>
                        <div class="input-group">
                            <input  type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number"
                                required autofocus />
                            <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        </div>
                    </div>
                    <div class="row">
                        <div >
                            <div class="form-group">
                                <label for="expityMonth">
                                    EXPIRY DATE</label>
                                <div class="col-xs-12 col-lg-6 pl-ziro">
                                    <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />
                                </div>
                                <div class="col-xs-12 col-lg-6 pl-ziro">
                                    <input type="text" class="form-control" id="expityYear" placeholder="YY" required /></div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-md-6 pull-right">
                            <div class="form-group">
                                <label for="cvCode">
                                    CV CODE</label>
                                <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <ul class="nav nav-pills nav-stacked">
                <li class="active"><a><span class="badge pull-right"><span class="glyphicon glyphicon-eur"></span>${priceSummary.textContent}</span> Final Payment</a>
                </li>
            </ul>
            <br/>
            <a id="btnPay" href="../index.php" class="btn btn-success btn-lg btn-block" role="button">Pay Now</a>
        </div>
    </div>
</div>` 
 
var btnPay = block.lastElementChild.lastElementChild.lastElementChild.lastElementChild;
btnPay.addEventListener("click", payMsg);

function payMsg() {
    alert("Your purchase was successful!!! Thanks for trusting us!");
}
};