console.log("javascript is running !");

let forsideIndhold = [
  ["1. Overskrift","/img/img-1.jpg","text til 1. emne",],
  ["2. Overskrift","/img/img-2.jpg","text til 2. emne",],
  ["3. Overskrift","/img/img-3.jpg","text til 3. emne",],
];

function changeFrontPage(i) {
  document.getElementById("info-headline").innerHTML = forsideIndhold[i][0];
  document.getElementById("info-img").src = forsideIndhold[i][1];
  document.getElementById("info-text").innerHTML = forsideIndhold[i][2];

}
