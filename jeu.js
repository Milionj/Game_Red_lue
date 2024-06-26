
const btnRed = document.getElementById('btn-red');
// console.log(btnRed, "bouton rouge");
const btnBlue = document.getElementById('btn-blue');
// console.log('btn-blue');
let titre = document.getElementById('titre');
let compteur = 0;
console.log(compteur, "compteur au démarrage");

// Je soummets le cercle rouge a une action
btnRed.addEventListener('click', function () {
    add();
});

// Je soumts le cercle blue a une action
btnBlue.addEventListener('click', function () {
    add();
});

function add() {
    compteur = compteur + 1;
    console.log(compteur, "compteur après incrémentation");
    titre.innerText = compteur;
};

setTimeout(function(){
    btnRed.remove();
    btnBlue.remove();
    console.log('fun du chrono !')
}, 10000);
