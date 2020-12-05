/*tjekker om javascriptet kører*/
console.log("javascript is running !");


/*
two dimensional array som indholder at det jeg gerne vil ændre på forside
i et array - stillet op at hver punkt indholder infomationer som svare til sit punkt
*/
let forsideIndhold = [
  ["1. Overskrift","/img/img-1.jpg","text til 1. emne",],
  ["2. Overskrift","/img/img-2.jpg","text til 2. emne",],
  ["3. Overskrift","/img/img-3.jpg","text til 3. emne",],
  ["4. Overskrift"," ","text til 4. emne",],
];

/* functionen under gøre ind og ændre indholdet på forsiden ud fra mit array forsideIndhold*/
function changeFrontPage(i) {
  document.getElementById("info-headline").innerHTML = forsideIndhold[i][0];
  document.getElementById("info-img").src = forsideIndhold[i][1];
  document.getElementById("info-text").innerHTML = forsideIndhold[i][2];
  console.log(forsideIndhold[1][1])

  /*hvis man skal display en video istedet for et bilede så går man ind og 
  skriver nummeret fra changeFontPage(i), så den ved hvor den skal vise video i stedet for billede*/
  if (i == 3) {
    document.getElementById("video").style.display = "block";
    document.getElementById("info-img").style.display = "none";
  } else {
    document.getElementById("video").style.display = "none";
    document.getElementById("info-img").style.display = "block";
  }

}


/*
[i][0] - her vælger du din overskrift
[i][1] - her vælger du dit billede
[i][2] - her vælger du din brødtekst
*/