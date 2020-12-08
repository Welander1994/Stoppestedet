
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
        tekst = "Please Enter valid Name";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (emne.length < 10) {
        tekst = "Please Enter Correct Subject";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (isNaN(telefon) || telefon.length != 8) {
        tekst = "Please Enter valid Phone Number";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        tekst = "Please Enter valid Email";
        errorMessage.innerHTML = tekst;
        return false;
    }
    if (besked.length <= 140) {
        tekst = "Please Enter More Than 140 Characters";
        errorMessage.innerHTML = tekst;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}