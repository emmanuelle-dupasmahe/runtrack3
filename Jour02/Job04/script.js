function addText(e) {
    e.preventDefault();//fait ce que je demande

    keylogger.value = 
    document.activeElement.id ==="keylogger"
    ?
    keylogger.value + e.key + e.key
    : 
    keylogger.value + e.key;
}
window.addEventListener("keydown", (e)=>addText(e));