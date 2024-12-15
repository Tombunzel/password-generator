const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatorBtn = document.getElementById("generator-btn")
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")

generatorBtn.addEventListener("click", suggestPasswords)
passwordOneEl.addEventListener("click", copyFirstPasswordToClipboard)
passwordTwoEl.addEventListener("click", copySecondPasswordToClipboard)

function generatePassword() {
    let password = ""
    let passwordLength = 15
    for (i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function suggestPasswords() {
    passwordOneEl.textContent = generatePassword()
    passwordTwoEl.textContent = generatePassword()
}

function copyFirstPasswordToClipboard() {
    navigator.clipboard.writeText(passwordOneEl.textContent)
    passwordOneEl.classList.add('copied');
    setTimeout(() => passwordOneEl.classList.remove('copied'), 750);
}

function copySecondPasswordToClipboard() {
    navigator.clipboard.writeText(passwordTwoEl.textContent)
    passwordTwoEl.classList.add('copied');
    setTimeout(() => passwordTwoEl.classList.remove('copied'), 750);
}