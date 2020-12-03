/*tjekker om javascriptet kører*/
console.log("javascript is running !");

function burgerMenu() {
  let element = document.getElementById("test");
  element.classList.toggle("main-nav-active");
}

/*
two dimensional array som indholder at det jeg gerne vil ændre på forside
i et array - stillet op at hver punkt indholder infomationer som svare til sit punkt
*/
let forsideIndhold = [
  ["Vi er her for at hjælpe dig","/img/img-1.jpg","Stoppestedet er et SIND værested, der har eksisteret siden først i 90’erne. <b>Hos os er alle velkomne.</b> Stoppestedet er et anonymt værested, hvilket betyder, at tilbuddene kan benyttes frivilligt og uden visitering. Tak fordi du er her. Hvis du vil vide mere om hvem vi er, og hvordan vi kan hjælpe dig, og hvordan du muligvis kan hjælpe os, er du velkommen til at læse mere om vores forskellige muligheder for lige netop dig.",],
  ["Om os",   "/img/img-2.jpg",   "Stoppestedet er et tilbud til borgere i Odense kommune om at kunne være i et åbent, anonymt mødested, hvor man møder støtte og forståelse med henblik på en bedre trivsel i hverdagen. <br> <br> Stoppestedet er en selvejende institution under landsforeningen SIND, hvor driften finansieres af Odense Kommune i henhold til indgået driftsoverenskomst. Stedet drives af en bestyrelse med repræsentanter fra SIND, medarbejdere, brugere og frivillige af Stoppestedet samt Odense Byråd. <br> <br> SIND arbejder for at fremme fysisk og psykisk sundhed, fordi vi mener, at psykiatriske og sociale indsatser skal indgå i en enhed, og fordi vi tror på, at det er muligt at komme sig af en sindslidelse.  <br> <br> SIND Værestedet Stoppestedet er et anonymt værested for borgere, der har en sindslidelse eller andre psykosociale problemstillinger. Stoppestedet er en café, der har åbent alle dage i ugen, hvor man hver dag kan komme og købe kaffe eller lidt at spise. Foruden lidt til den lille sult kan man også købe et varmt måltid mad seks dage i ugen, der laves i fællesskab mellem ansatte, frivillige og besøgende. Vi spiser kl. 17.30. Tilmelding til aftensmaden sker ved fremmøde eller telefonisk før kl. 16.00.  <br> <br> Meningen med Stoppestedet er først og fremmest at have et sted, hvor sindslidende synes, det er rart at være, og derfor bliver det sociale samvær også vægtet højt i caféen. Der afholdes løbende forskellige aktiviteter, man kan deltage i, hvis man har lyst. Vi følger årets traditioner og holder løbende fester – vi fejrer blandt andet juleaften på Stoppestedet.  <br> <br> Bestyrelsen Bestyrelsen består af Formand Brian Skov Nielsen, en medarbejderrepræsentant, en SIND-repræsentant, et medlem udpeget af Byrådet, en frivilligrepræsentant og to brugerrepræsentanter. Den daglige leder er sekretær.  <br> <br> Personale Til daglig er Stoppestedet styret af leder Birgit Boding, fem medarbejdere, der er tilknyttet caféen, en hel masse frivillige, et antal timelønnede konsulenter, der yder telefonrådgivning, én deltids sekretær, én deltids koordinator, der hjælper som bisidder, én medarbejder, som arbejder med udvikling af frivillighed i Stoppestedet samt Odense Kommunes socialpsykiatrisk tilbud.",],
  ["Ungegruppe",   "/img/img-3.jpg",   "Åbent Sinds ungegruppe, er et tilbud på Stoppestedet, for unge mellem 18 og 35 år i Odense Kommune. Man kan komme anonymt og det kræver ingen tilmelding. <br> <br> Onsdag aften mødes unge med en psykisk sårbarhed i vores unge lejlighed i Jernbanegade. De frivillige sætter rammerne for det sociale fællesskab. Vi spiller spil, snakker om almindelig unge ting, ser en film eller går ud i byen f.eks. i biffen, Papas papbar eller på cafe. <br> <br> Hvem der er værter, og hvad der er planlagt, deles hver måned på vores Facebookgruppe, som hedder “ÅbentSINDs Ungegruppe”. <br> <br> Kan det være svært at komme afsted på egen hånd? Eller er det en udfordring at møde nye mennesker? Så kontakt os inden du besøger Ungegruppen. Vi kan enten hente dig i døren eller mødes et par minutter inden de andre møder op. Meld dig ind i “ÅbentSINDs Ungeruppe” på Facebook eller find “Koordinator Åbentsinds Ungegruppe”, hvis du har lyst til at vide mere om fællesskabet. <br> <br> Følgevenner – Det er nemmere at følges ad! <br> <br> I Åbent Sind har vi også mulighed for at skabe en tættere ung-til-ung relation, som vi kalder følgevenner. Her kan du blive matchet med en ung frivillig, for at følges til andre aktiviteter eller arrangementer. Måske du har lyst til at træne eller gå til badminton, men føler det kan være svært at komme afsted på egen hånd? Eller drikke kaffe på en café og snakke om livets store og små udfordringer? Så er en følgeven måske noget for dig. <br> <br> Du finder os på Jernbanegade 24B <br>Vi har åbent Onsdag kl. 18 – 21",],
  ["Telefonrådgiving",   " ",                "text til 4. emne",],
  ["Peer to Peer",   "/img/img-5.jpg",   "text til 2. emne",],
  ["Samværsvenner",   "/img/img-6.jpg",   "text til 3. emne",],
  ["Skibhus Kabyssen",   " ",                "text til 4. emne",],
  ["Bisidder",   "/img/img-7.jpg",   "text til 2. emne",],
  ["Pårørende gruppe",   "/img/img-8.jpg",   "text til 3. emne",],
  ["Frivillig",  " ",                "text til 4. emne",],
  ["Åbningstider",  "/img/img-9.jpg",   "text til 2. emne",],
  ["Kontakt",  " ",                "text til 4. emne",],
  ["Log ind",  "/img/img-9.jpg",   "text til 2. emne",],

];

/* functionen under gøre ind og ændre indholdet på forsiden ud fra mit array forsideIndhold*/
function changeFrontPage(i) {
  document.getElementById("info-headline").innerHTML = forsideIndhold[i][0];
  document.getElementById("info-img").src = forsideIndhold[i][1];
  document.getElementById("info-text").innerHTML = forsideIndhold[i][2];

  /*hvis man skal display en video istedet for et bilede så går man ind og 
  skriver nummeret fra changeFontPage(i), så den ved hvor den skal vise video i stedet for billede*/
  if (i == 3) {
    document.getElementById("video").style.display = "block";
    document.getElementById("video2").style.display = "block";
    document.getElementById("info-img").style.display = "none";
  } else {
    document.getElementById("video").style.display = "none";
    document.getElementById("video2").style.display = "none";
    document.getElementById("info-img").style.display = "block";
  }

}


/*
[i][0] - her vælger du din overskrift
[i][1] - her vælger du dit billede
[i][2] - her vælger du din brødtekst
*/