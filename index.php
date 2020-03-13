<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Los Cocos Bungalows</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Arsenal:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Dosis:400,700" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/cocos.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="room-and-rates">


<nav class="navbar navbar-fixed-top text-center">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand visible-xs-block" href="index.html">
                <img src="images/cocos/logo_mobile.png" alt="LosCocos" height="36">
            </a>
        </div>

        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Restaurant</a></li>

                <li class="hidden-xs">
                    <a href="index.html">
                        <img src="images/cocos/logo.png" alt="LosCocos" height="36">
                    </a>
                </li>

                <li><a href="#">Weddings</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>


<div class="engine text-center">

    <div class="engine-wrapper">
        <div class="container text-center">

            <form id="search" class="form-inline" action="">

                <div class="form-group">
                    <div class="input-group date" data-date-format="dd/mm/yyyy">
                        <input id="checkin" type="text" class="form-control" value="<?php
                        echo date("d/m/Y");?>">
                        <div class="input-group-addon" >
                            <span class="glyphicon glyphicon-calendar"></span>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-group date" data-date-format="dd/mm/yyyy">
                        <input id="checkout" type="text" class="form-control" value="<?php
                        echo date("d/m/Y",strtotime("+1 day"));?>">
                        <div class="input-group-addon" >
                            <span class="glyphicon glyphicon-calendar"></span>
                        </div>
                    </div>
                </div>


                <div class="form-group select-inline">
                    <select class="form-control" placeholder="Adults" id="adults">
                        <option value="" selected>Adults</option>
                        <option value="1">Adults: 1</option>
                        <option value="2">Adults: 2</option>
                        <option value="3">Adults: 3</option>
                        <option value="4">Adults: 4</option>
                        <option value="5">Adults: 5</option>
                        <option value="6">Adults: 6</option>
                        <option value="7">Adults: 7</option>
                        <option value="8">Adults: 8</option>
                        <option value="9">Adults: 9</option>
                    </select>
                </div>
                <div class="form-group select-inline">
                    <select class="form-control" placeholder="Children" id="children">
                        <option value="" selected>Children</option>
                        <option value="1">Children: 1</option>
                        <option value="2">Children: 2</option>
                        <option value="3">Children: 3</option>
                        <option value="4">Children: 4</option>
                        <option value="5">Children: 5</option>
                        <option value="6">Children: 6</option>
                        <option value="7">Children: 7</option>
                        <option value="8">Children: 8</option>
                        <option value="9">Children: 9</option>
                    </select>
                </div>


                <div class="form-group">
                    <button id="searchBtn" class="btn btn-primary">Modify</button>
                </div>
                <div id="demo"></div>
            </form>

        </div>
    </div>
</div>



<div class="container rar-summary">
    <div class="row">
        <div class="col-md-8 main">
            <h2>Rooms & Rates</h2>
            <p class="subtitle">Plan your perfect stay at our hotel</p>
            <img src="images/cocos/wizard_1.png" width="480" class="wizard" />
        </div>
        <div class="col-md-4 sidebar-header"></div>
    </div>

    <div class="row" id="content"><!-- Here will the rooms --></div>

    <div class="row">
        <div class="col-md-8 main">

            <!-- ROOM 1 -->
            <div class="card clearfix pointer active">
                <div class="room-image">
                    <img id="photo" src="images/cocos/room_1.png" width="100%" />
                </div>

                <div class="room-content">
                    <h5 id="room" class="form-group">Mini Dreamy Room</h5>
                    <p id="description" class="form-group">Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor.</p>

                    <p>Size: <span id="size" class="form-group">25</span>m²</p>
                    
                    <div class="room-info">
                        <div class="item">
                            <span class="inline-block">
                                <img src="images/icons/double-bed.svg" width="40">
                            </span>
                            <div>Beds: <span id="beds">1</span></div>
                        </div>
                        <div class="item">People: <span id="people">2</span></div>
                        <div class="item price text-right">
                            <span id="realPrice" class="line-through">€350</span>
                            €<span id="price">350</span>
                    </div>
                    </div>
                </div>

            </div>

            <!-- ROOM 2 -->
            <div id="card" class="card clearfix pointer">
                <div class="room-image">
                    <img src="images/cocos/room_2.png" width="100%" />
                </div>

                <div class="room-content">
                    <h5 class="form-group">Sweet Bungalow</h5>
                    <p class="form-group">The perfect blend of comfort and culture, our superior room with a central garden view has the stunning, and comes with a double bed.</p>

                    <p class="form-group">Size: 50m2</p>

                    <div class="room-info">
                        <div class="item">
                            <span class="inline-block">
                                <img src="images/icons/double-bed.svg" width="40">
                            </span>
                            <div>Beds: 1</div>
                        </div>
                        <div class="item">People: 2</div>
                        <div class="item price text-right">
                            <span class="line-through">€500</span>
                            €400
                        </div>
                    </div>
                </div>

            </div>

            <!-- ROOM 3 -->
            <div class="card clearfix pointer">
                <div class="room-image">
                    <img src="images/cocos/room_3.png" width="100%" />
                </div>

                <div class="room-content">
                    <h5 class="form-group">Los Cocos Suite</h5>
                    <p class="form-group">If you want a little extra from your stay, you might like our superior rooms. A garden view room has a private patio and a double bed.</p>

                    <p class="form-group">Size: 125m2</p>

                    <div class="room-info">
                        <div class="item">
                            <span class="inline-block">
                                <img src="images/icons/double-bed.svg" width="40">
                            </span>
                            <div>Beds: 3</div>
                        </div>
                        <div class="item">People: 4</div>
                        <div class="item price text-right">
                            <span class="line-through">€750</span>
                            €600
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <!-- SIDEBAR -->
        <div class="col-md-4 sidebar">

            <div class="card">
                <h2>Reservation Summary</h2>
                <div class="clearfix">
                    <h5 id="room-summary" class="pull-left">Mini Dreamy Room</h5>
                    <div class="form-group pull-right">
                        <select class="pull-right" id="rooms">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                    </div>
                </div>

                <div class="clearfix">

                    <div class="card-content">
                        <p class="main">Check in</p>
                        <p class="base">From 15.00h</p>
                    </div>

                    <div class="card-content">
                        <p class="main">Check out</p>
                        <p class="base">Before 12.00h</p>
                    </div>

                    <div class="card-content">
                        <p class="main">Reservation date</p>
                        <p class="base">From <strong><span id="checkin-summary">4/7/2018</span></strong> to <strong id="checkout-summary">15/7/2018</strong></p>
                    </div>

                    <div class="card-content">
                        <p class="main">People</p>
                        <p class="base"><span id="adults-summary">2</span> Adults</p>
                        <p class="base"><span id="children-summary">2</span> Children</p>
                    </div>

                    <div class="card-checkout clearfix">
                        <div class="left pull-left">
                            <p class="main">Total</p>
                            <p id="priceDetails" class="base"><a class="pointer">Price details ></a></p><br>
                            <input type="text" class="form-control" placeholder="Your promo_code">
                        </div>
                        <div class="right pull-right">
                            <p class="main">€<span id="price-summary">350</span></p>
                        </div>
                    </div>

                    <a href="./views/pages/payment.php" class="btn btn-primary btn-group-justified">
                        Save
                    </a>
                </div>
            </div>


        </div>
    </div>
</div>


<footer class="footer">

    <span class="ico ico-logo"></span>
    <span class="ico ico-social"></span>

    <div class="text-left col-left">
        <ul class="inline-block">
            <li>
                <a href="#">Terms & Conditions</a>
            </li>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Partners</a>
            </li>
        </ul>
    </div>
    <div class="text-right col-right">
        <ul class="inline-block">
            <li class="link">
                <a href="#">reservations@loscocosbungalows.com</a>
            </li>
            <li class="link">
                <a href="#">Tlf: +34 987 675 432</a>
            </li>
        </ul>
    </div>

</footer>

<script src="./js/main.js"></script>
</body>
</html>