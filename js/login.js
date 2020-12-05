let myInput = document.getElementById("kode");
let tal = document.getElementById("tal");
let karakterer = document.getElementById("karakterer");
let mySubmit = document.getElementById ("submit");
let taltal = /[0-9]/g;
let myForgot = document.getElementById("glemtkode");
let myUsername = document.getElementById("brugernavn");
let bogstaver = /[a-z]/g;
let bogbog = document.getElementById("bogstaver");

myInput.onfocus = function() {
    document.getElementById("besked").style.display = "block";
}
/* Gør at besked-boksen bliver vist, når brugeren trykker på kode-feltet eller brugernavnsfeltet*/
myInput.onblur = function() {
  document.getElementById("besked").style.display = "none";
}

myUsername.onclick = function() {
  document.getElementById("beskedbesked").style.display = "block";
}

myUsername.onkeyup = function() {
  if(myUsername.value.match(bogstaver)) {
    bogbog.classList.remove("invalid");
    bogbog.classList.add("valid");
  }
  else {
    bogbog.classList.remove("valid");
    bogbog.classList.add("invalid");
  }
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

/* Hvis input er korrekt i kodefeltet - og der også er indtastet brugernavn, kommer der en "log in godkendt"-alert - hvis ikke, kommer der en anden */
mySubmit.onclick = function() {
  if(myInput.value.match(taltal) && myInput.value.length >= 8 && myUsername.value.match(bogstaver)) {
    alert("Log in godkendt");
  }
  else {
    alert("Forkert adgangskode eller brugernavn")
  }
}

/* Glemt oplysninger alert */
myForgot.onclick = function() {
  alert("Glemt dine oplysninger??")
}
