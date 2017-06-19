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


// HOVER ALT

var img = document.getElementsByTagName("img");
var text = document.getElementsByClassName("alt");

for (let i = 0 ; i < img.length ; i++) {
img[i].addEventListener("mouseover", function() {
  var alt = img[i].alt;
  text[i].textContent = alt;
}
);
};

for (let i = 0 ; i < img.length ; i++) {
img[i].addEventListener("mouseout", function() {
text[i].textContent = "";
}
);
};
