// FONCTION DATE

function date()
{
        date = new Date();
        annee = date.getFullYear();
        mois = date.getMonth();
        jour = date.getDate();
        heure = date.getHours();
        resultat = 'Nous sommes le '+jour+ '/'+mois+'/'+annee +" et il est " + heure + " heure";
        document.getElementById("date").innerHTML = resultat;
}

window.onload = date('date');




// FONCTION COMPTEUR

var compt = document.getElementById("compteur");

function augmenter() {
  compt.textContent = Number(compt.textContent) + 1;
}

setInterval(augmenter, 1000);
