<?php

function verif($variable){
    trim($variable);
    htmlspecialchars($variable);
    strip_tags($variable);
    
    return $variable;
}

function verification_globale(){
    include_once("./connexionbd.php");
    
    $pswd = $_POST["pswd"];
    $email = $_POST["email"];
    $name = $_POST["name"];

    
    verif($pswd);
    verif($email);
    verif($name);
    if(empty($pswd) || empty($email)){
        return "One or all fields are empty";
    }
    else if (filter_var($email,FILTER_VALIDATE_EMAIL) != true) {
        return "invalid email address";
    }
    else {
        try{ 

            $bdd->execute("INSERT INTO MyGuests (username, email, password) VALUES ('$name', '$email', '$pswd');");
            echo "reussi";
        }
        catch(Exception $e){
            return "An error occured, please try again";
        }
    }
}
$final = verification_globale();
if($final == "reussi")
{
}
else{
    echo $final;
}