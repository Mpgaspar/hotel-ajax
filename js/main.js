var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", showRooms);

function showRooms() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);  
            document.getElementById("demo").innerHTML = myObj[2].title;
          }
        };
        xhttp.open("GET", "../models/data.json", true);
        xhttp.send();
}

