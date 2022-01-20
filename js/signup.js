let email = document.getElementById("email");
let password = document.getElementById("password");
let invalide = document.getElementById("invalide");
let name = document.getElementById("name");
let button = document.getElementById("button1");

let regEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
let regName = /^[a-zA-Z0-9,?. 'éèàç]{5,25}$/;

email.addEventListener("keyup",()=>{
    if(regEmail.test(email.value)){
        email.style.boxShadow = "0 0 0 0.2rem rgba(0, 123, 255, 0.25)";
    }
    else
    {
        email.style.boxShadow = "0 0 0 0.2rem rgb(185, 36, 36)";
    }
})

name.addEventListener("keyup",()=>{
    if(regName.test(name.value)){
        name.style.boxShadow = "0 0 0 0.2rem rgba(0, 123, 255, 0.25)";
    }
    else
    {
        name.style.boxShadow = "0 0 0 0.2rem rgb(185, 36, 36)";
    }
})

let verif = ()=>{
    
    if(password.value=="" || email.value==""){
        return "One or more fields are empty!!!"
    }
    else if(regName.test(name.value)){
     if(password.value.length < 8 || password.value.length > 15){
        if(regEmail.test(email.value)){
            return " "
        }
        else{
            return "Invalid email adress !!!"
        }
     }
     else{
         return "Invalid password size!!!";
     }
    }
    else{
        return "Invalid name entered !!!"
    }
}


button.addEventListener("click",(e)=>{
    if(verif()==" "){
        invalide.innerHTML = "";
        var xhr = new XMLHttpRequest();
           
                    xhr.open("POST","../php/veriflogin.php",true);
                    xhr.onload = function() {
                        if(this.status == 200)
                        {
                            let final = this.responseText;
                            if(final == "reussi"){
                                location.href = "../page.html";
                            }
                            else{
                                invalide.innerHTML = final;
                                invalide.classList.add("danger");
                            }
                        }
                    }
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send("email="+email.value+"&pswd="+password.value+"&name="+name.value);
    }
    else{
        invalide.innerHTML = `${verif()}`;
        invalide.classList.add("text-danger");
        e.preventDefault();
    }
})
