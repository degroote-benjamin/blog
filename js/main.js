// FONCTION DATE

function date()
{
        date = new Date();
        annee = date.getFullYear();
        mois = date.getMonth();
        jour = date.getDate();
        heure = date.getHours();
        minute = date.getMinutes();
        if(minute <10){
          minute = "0" + minute
        }
        resultat = "Nous sommes le "+jour+ "/"+mois+"/"+annee +" et il est " + heure + "h" + minute;
        document.getElementById("date").innerHTML = resultat;
}
setInterval(date, 60000);

resultat = date();




// FONCTION COMPTEUR

var compt = document.getElementById("compteur");
  compt.textContent=0;
function augmenter() {
  compt.textContent = parseInt(compt.textContent) + 1;
}
setInterval(augmenter, 1000);


// HOVER ALT

var img = document.getElementsByTagName("img");
var text = document.getElementsByClassName("alt");

for (let i = 0 ; i < img.length ; i++) {
img[i].addEventListener("mouseover", function() {
  var alt = img[i].alt;
  text[i].textContent = "Le alt de l'image est " + alt;
}
);
};

for (let i = 0 ; i < img.length ; i++) {
img[i].addEventListener("mouseout", function() {
text[i].textContent = "";
}
);
};


// CONFIRMATION FORMULAIRE

function confirmation() {
    var aconfirmer;
    if (confirm("Confirmer!") == true) {
        aconfirmer = alert("Vous avez confirmé");
    } else {
        aconfirmer = alert("Vous avez annulé");
    }
}


//TABLE INTERACTIVE

var onglet = document.getElementsByClassName("tabs");
var contenu = document.getElementsByClassName("contenu");

for (let i = 0 ; i < onglet.length ; i++) {
onglet[i].addEventListener("click", function() {
  for(let y=0 ; y<contenu.length;y++){
    contenu[y].style.display="none";
  }
  contenu[i].style.display="flex";
}
)
};
