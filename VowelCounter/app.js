const input = document.getElementById("input");
const btn = document.getElementById("btn");
const satz = document.querySelector(".satz");

btn.addEventListener("click", function() {
    let ergebnis = vokaleZählen(input.value);
    if(ergebnis > 1) {
        // alert(`Der Satz beinhaltet ${ergebnis} Vokale`);
        satz.textContent = `Der Satz beinhaltet ${ergebnis} Vokale`;
        satz.classList.add("show");
        setTimeout(function(){
            satz.classList.remove("show");
        }, 1000);
    } else {
        // alert(`Der Satz beinhaltet ${ergebnis} Vokal`);
        satz.textContent = `Der Satz beinhaltet ${ergebnis} Vokal`;
        satz.classList.add("show");
        setTimeout(function(){
            satz.classList.remove("show");
        }, 1000);
    }
    input.value = "";
})

function vokaleZählen(str) {
    return Array.from(str).filter(vokal => 'AEIOUaeiou'.includes(vokal)).length;
};