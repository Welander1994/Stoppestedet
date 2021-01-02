
//inspiration fra https://www.youtube.com/watch?v=WY4rvU4ImgE&ab_channel=CodingMarket 
function validation() {
    let navn = document.getElementById("navn").value;
    let emne = document.getElementById("emne").value;
    let telefon = document.getElementById("telefon").value;
    let email = document.getElementById("email").value;
    let besked = document.getElementById("besked").value;
    let errorMessage = document.getElementById("errorMessage");

    // Fejlbeskede - her øges padding så beskeden kan ses - er sat til at være 0px - da den ikke skal vises, hvis der ikke er frejl.
    errorMessage.style.padding = "10px";
    let tekst;

    // array til fejl beskeder
    let beskeder = ["Indtast et navn der er længere end 5 bogstaver", "Indtast et emne der er længere end 10 bogstaver", "Indtast et rigtigt telefonnummer", "Indtast et rigtigt email", "Indtast mere end 50 karakterer", "Tak, din besked er sendt - vi kontakter dig så hurtigt vi kan"]

    if (navn.length < 5) {
        tekst = beskeder[0];
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (emne.length < 10) {
        tekst = beskeder[1];
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (isNaN(telefon) || telefon.length != 8) {
        tekst = beskeder[2];
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        tekst = beskeder[3];
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (besked.length <= 50) {
        tekst = beskeder[4];
        errorMessage.innerHTML = tekst;
        return false;
    }

    alert(beskeder[5]);
    return true;
}


/*
let tekst = "";
let i;
for (i = 0; i < 5; i++) {
  tekst += "Dit nummer er " + i + "<br>";
}

Dit nummer er 0
Dit nummer er 1
Dit nummer er 2
Dit nummer er 3
Dit nummer er 4

*/