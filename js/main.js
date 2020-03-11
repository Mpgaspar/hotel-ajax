var searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", showRooms);
searchBtn.addEventListener("click", getInputs);

function getInputs(){
  var checkin = document.getElementById("checkin").value;
  var checkout = document.getElementById("checkout").value;
  var adults = document.getElementById("adults").value;
  var children = document.getElementById("children").value;
  
  document.getElementById("checkin-summary").innerHTML = checkin;
  document.getElementById("checkout-summary").innerHTML = checkout;
  document.getElementById("adults-summary").innerHTML = adults;
  document.getElementById("children-summary").innerHTML = children;
}

function showRooms() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);  
            document.getElementById("photo").src = myObj[8].photo;
            document.getElementById("room").innerHTML = myObj[8].title;
            document.getElementById("description").innerHTML = myObj[8].body;
            document.getElementById("size").innerHTML = myObj[8].size;
            document.getElementById("beds").innerHTML = myObj[8].beds;
            document.getElementById("people").innerHTML = myObj[8].people;
            document.getElementById("price").innerHTML = myObj[8].price;

            document.getElementById("room-summary").innerHTML = myObj[8].title;
            document.getElementById("price-summary").innerHTML = myObj[8].price;
          }
        };
        xhttp.open("GET", "../models/data.json", true);
        xhttp.send();
}

