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

    
    verif($pswd);
    verif($email);
    if(empty($pswd) || empty($email)){
        return "One or all fields are empty";
    }
    else if (filter_var($email,FILTER_VALIDATE_EMAIL) != true) {
        return "invalid email address";
    }
    else {
        try{ 

            $stmt = $bdd->query("SELECT * FROM infousers WHERE email = '$email' AND WHERE password = '$pswd'";
           if ($donnees = $stmt->fetch() != null)
           {
                 return "reussi";
           }
            else{
                return "The username or password is wrong !!";
            }
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