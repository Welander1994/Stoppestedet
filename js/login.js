let myInput = document.getElementById("kode");
let tal = document.getElementById("tal");
let karakterer = document.getElementById("karakterer");
let mySubmit = document.getElementById ("submit");
let taltal = /[0-9]/g;

myInput.onfocus = function() {
    document.getElementById("besked").style.display = "block";
}
/* Gør at besked-boksen bliver vist, når brugeren trykker på kode-feltet*/
myInput.onblur = function() {
  document.getElementById("besked").style.display = "none";
}

/* Gør at beskedfelterne blive grønne, når man har opfyldt kravene til kodeordet */
myInput.onkeyup = function() {
  if(myInput.value.match(taltal)) {  
    tal.classList.remove("invalid");
    tal.classList.add("valid");
  } else {
    tal.classList.remove("valid");
    tal.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    karakterer.classList.remove("invalid");
    karakterer.classList.add("valid");
  } else {
    karakterer.classList.remove("valid");
    karakterer.classList.add("invalid");
  }
}

mySubmit.onclick = function() {
  if(myInput.value.match(taltal) && myInput.value.length >= 8) {
    alert("Log in godkendt");
  }
  else {
    alert("Forkert adgangskode eller brugernavn")
  }
}
