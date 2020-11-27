console.log("javascript is running !");

let infoHeadline = ["1. Overskrift", "2. Overskrift", "3. Overskrift"];
let infoImg = ["/img/img-1.jpg", "/img/img-2.jpg", "/img/img-3.jpg"];
let infoText = ["text til 1. emne", "text til 2. emen", "text til 3. emne"];


function changeText() {
    document.getElementById("info-headline").innerHTML = infoHeadline[0];
    document.getElementById("info-text").innerHTML = infoText[0];
    document.getElementById("info-img").src = infoImg[0];

  }

  function changeText2() {
    document.getElementById("info-headline").innerHTML = infoHeadline[1];
    document.getElementById("info-text").innerHTML = infoText[1];
    document.getElementById("info-img").src = infoImg[1];

  }

  function changeText3() {
    document.getElementById("info-headline").innerHTML = infoHeadline[2];
    document.getElementById("info-text").innerHTML = infoText[2];
    document.getElementById("info-img").src = infoImg[2];

  }