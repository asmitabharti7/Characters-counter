const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingcharactersEl = document.getElementById("remaining-characters");

textareaEl.addEventListener("keyup", ()=>{
    updatecounter(); countUpperCaseCharacters();
});

function updatecounter(){
    totalcounterEl.innerText = textareaEl.value.length;
    remainingcharactersEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
    totaluppercasesEl.innerText = textareaEl.replace(/[^A-Z]/g,"").length;
    totallineEl.innertext = textareaEl.split("/n").value.length;
}



