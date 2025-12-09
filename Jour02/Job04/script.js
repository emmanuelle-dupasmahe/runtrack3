const keylogger = document.getElementById("keylogger");
if (keylogger)
function addText(e) {

    console.log(e);

    e.preventDefault();//maintenant tu fais ce que je demande

   

    keylogger.value = 
    document.activeElement.id ==="keylogger"
    ? //condition ternaire ? : ; (condition ? exprSiVrai : exprSiFaux;) (if court)
    keylogger.value + e.key + e.key
    : //sinon
    keylogger.value + e.key;
}
window.addEventListener("keydown", (e)=>addText(e));