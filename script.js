const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let passwordOne=document.getElementById("password")
let passwordTwo=document.getElementById("passwordtwo")

function generatePass(){
    let passwordLength=12;
    let pass="";
    for(let i=0;i <= passwordLength;i++){
        let randomNumber=Math.floor(Math.random()*characters.length + 1);
        pass += characters.charAt(randomNumber);
    }
    return pass
}
function generatePassword(){
    passwordOne.innerHTML=generatePass()
    passwordTwo.innerHTML=generatePass()
}
