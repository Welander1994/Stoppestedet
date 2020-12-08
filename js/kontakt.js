
//inspiration fra https://www.youtube.com/watch?v=WY4rvU4ImgE&ab_channel=CodingMarket 
function validation() {
    let navn = document.getElementById("navn").value;
    let emne = document.getElementById("emne").value;
    let telefon = document.getElementById("telefon").value;
    let email = document.getElementById("email").value;
    let besked = document.getElementById("besked").value;
    let errorMessage = document.getElementById("errorMessage");


    errorMessage.style.padding = "10px";

    let tekst;

    if (navn.length < 5) {
        tekst = "Indtast et navn der er længere end 5 bogstaver";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (emne.length < 10) {
        tekst = "Indtast et emne der er længere end 10 bogstaver";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (isNaN(telefon) || telefon.length != 8) {
        tekst = "Indtast et rigtigt telefonnummer";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        tekst = "Indtast et rigtigt email";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (besked.length <= 50) {
        tekst = "Indtast mere end 50 karakterer";
        errorMessage.innerHTML = tekst;
        return false;
    }
    alert("Tak, din besked er sendt - vi kontakter dig så hurtigt vi kan!");
    return true;
}