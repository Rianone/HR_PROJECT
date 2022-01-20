<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Login</title>
</head>
<body>
<div id="preloader">
    <div id="img">
        <img src="./images/loading.gif" alt="">
    </div>
</div>

    <section class="left">
        <div id="logo"> 
            <h1>LOGO<span class="blue">.</span></h1>
            <h1 class="padding">Connectez vous</h1>
        </div>
        
        <form>
            <div id="invalide"></div>
            <input type="email" id="email" required="required" placeholder="Enter your email adress"><br>
            <input type="password" name="password" id="password"placeholder="Enter your password"><br>
            <input type="button" value="Sign In" id="button1"><br>
        </form>

        <div id="forgot">
            <hr> <span>OR</span> <hr>
            <a href="./signup.php">
                <input type="button" value="Create an account" id="button2" >
            </a>
        </div>

        <div id="copyright">
            <p>Copyright © 2021 Rianone smis.All rights reserved.</p>
        </div>
    </section>

    <section class="right">
        <h1 class="title">Connect on our platform and get your geolocalisation</h1>
    </section>
    <script src="./js/preloader.js"></script>
    <script src="./js/login.js"></script>
</body>
</html>