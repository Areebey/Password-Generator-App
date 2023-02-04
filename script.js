const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let passwordOne=document.getElementById("password")
let passwordTwo=document.getElementById("passwordtwo")

// generateEl.addEventListener("click",function(){
// let password=Math.floor(Math.random()*characters.length)
// fieldEl.textContent =(characters[password])
// })
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
