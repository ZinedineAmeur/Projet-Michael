const messages = [
    "Êtes-vous sûre ?",
    "Réfléchis encore !",
    "Dernière chance !",
    "Tu pourrais le regretter",
    "Penses-y une dernière fois !",
    "Es-tu absolument certaine ?",
    "Cela pourrait être une erreur",
    "Pense avec ton cœur",
    "Ne sois pas froide !",
    "Décision finale ?",
    "☹"
];

let index = 0;

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const link = document.getElementById("next-link");

noBtn.addEventListener("click", () => {
    message.textContent = messages[index];
    index++;

    if (index === messages.length) {
        yesBtn.disabled = false;
        noBtn.disabled = true;
    }
});

yesBtn.addEventListener("click", () => {
    message.textContent = "Smart choice 🙂";
    link.style.display = "block";
});