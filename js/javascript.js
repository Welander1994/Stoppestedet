/* tjekker om javascriptet kører*/
console.log("javascript is running !");

function burger() {
  let element = document.getElementById("test");
element.classList.toggle("main-nav-active");
}

/* two dimensional array som indholder at det jeg gerne vil ændre på forside
   i et array - stillet op at hver punkt indholder infomationer som svare til sit punkt */
let forsideIndhold = [
  ["Vi er her for at hjælpe dig","/img/forside.png","Stoppestedet er et SIND værested, der har eksisteret siden først i 90’erne. <b>Hos os er alle velkomne.</b> Stoppestedet er et anonymt værested, hvilket betyder, at tilbuddene kan benyttes frivilligt og uden visitering.<br><br> <b>Tak fordi du er her.</b> Hvis du vil vide mere om, hvem vi er, hvordan vi kan hjælpe dig og, hvordan du endda kan hjælpe os, er du velkommen til at læse mere om vores forskellige muligheder for lige netop dig.",],
  ["Om os",   "/img/omos.png",   "Stoppestedet er et tilbud til borgere i Odense kommune om at kunne være i et åbent, anonymt mødested, hvor man møder støtte og forståelse med henblik på en bedre trivsel i hverdagen. <br> <br> Stoppestedet er en selvejende institution under landsforeningen SIND, hvor driften finansieres af Odense Kommune i henhold til indgået driftsoverenskomst. Stedet drives af en bestyrelse med repræsentanter fra SIND, medarbejdere, brugere og frivillige af Stoppestedet samt Odense Byråd. <br> <br> SIND arbejder for at fremme fysisk og psykisk sundhed, fordi vi mener, at psykiatriske og sociale indsatser skal indgå i en enhed, og fordi vi tror på, at det er muligt at komme sig af en sindslidelse.  <br> <br> SIND Værestedet Stoppestedet er et anonymt værested for borgere, der har en sindslidelse eller andre psykosociale problemstillinger. Stoppestedet er en café, der har åbent alle dage i ugen, hvor man hver dag kan komme og købe kaffe eller lidt at spise. Foruden lidt til den lille sult kan man også købe et varmt måltid mad seks dage i ugen, der laves i fællesskab mellem ansatte, frivillige og besøgende. Vi spiser kl. 17.30. Tilmelding til aftensmaden sker ved fremmøde eller telefonisk før kl. 16.00.  <br> <br> Meningen med Stoppestedet er først og fremmest at have et sted, hvor sindslidende synes, det er rart at være, og derfor bliver det sociale samvær også vægtet højt i caféen. Der afholdes løbende forskellige aktiviteter, man kan deltage i, hvis man har lyst. Vi følger årets traditioner og holder løbende fester – vi fejrer blandt andet juleaften på Stoppestedet.  <br> <br> Bestyrelsen Bestyrelsen består af Formand Brian Skov Nielsen, en medarbejderrepræsentant, en SIND-repræsentant, et medlem udpeget af Byrådet, en frivilligrepræsentant og to brugerrepræsentanter. Den daglige leder er sekretær.  <br> <br> Personale Til daglig er Stoppestedet styret af leder Birgit Boding, fem medarbejdere, der er tilknyttet caféen, en hel masse frivillige, et antal timelønnede konsulenter, der yder telefonrådgivning, én deltids sekretær, én deltids koordinator, der hjælper som bisidder, én medarbejder, som arbejder med udvikling af frivillighed i Stoppestedet samt Odense Kommunes socialpsykiatrisk tilbud.",],
  ["Hvad kan vi tilbyde unge?",   "/img/ungegruppe.png",   "<b>Stoppestedet</b> er et tilbud til borgere i Odense kommune om at kunne være i et åbent, anonymt mødested, hvor man møder støtte og forståelse med henblik på en bedre trivsel i hverdagen. <br><br>Stoppestedet er en selvejende institution under landsforeningen <b>SIND</b>, hvor driften finansieres af Odense Kommune i henhold til indgået driftsoverenskomst. Stedet drives af en bestyrelse med repræsentanter fra <b>SIND</b>, medarbejdere, brugere og frivillige af Stoppestedet samt Odense Byråd.<br><br><b>SIND</b> arbejder for at fremme fysisk og psykisk sundhed, fordi vi mener, at psykiatriske og sociale indsatser skal indgå i en enhed, og fordi vi tror på, at det er muligt at komme sig af en sindslidelse.<br><br><b>SIND Værestedet Stoppestedet</b> er et anonymt værested for borgere, der har en sindslidelse eller andre psykosociale problemstillinger. Stoppestedet er en café, der har åbent alle dage i ugen, hvor man hver dag kan komme og købe kaffe eller lidt at spise. Foruden lidt til den lille sult kan man også købe et varmt måltid mad seks dage i ugen, der laves i fællesskab mellem ansatte, frivillige og besøgende. Vi spiser kl. 17.30. <b>Tilmelding til aftensmaden sker ved fremmøde eller telefonisk før kl. 16.00.</b><br><br>Meningen med Stoppestedet er først og fremmest at have et sted, hvor sindslidende synes, det er rart at være, og derfor bliver det sociale samvær også vægtet højt i caféen. Der afholdes løbende forskellige aktiviteter, man kan deltage i, hvis man har lyst. Vi følger årets traditioner og holder løbende fester – vi fejrer blandt andet juleaften på Stoppestedet.<br><br>Bestyrelsen<br><br><b>Bestyrelsen</b> består af Formand Brian Skov Nielsen, en medarbejderrepræsentant, en <b>SIND-repræsentant</b>, et medlem udpeget af Byrådet, en frivilligrepræsentant og to brugerrepræsentanter. Den daglige leder er sekretær.<br><br><b>Personale</b><br><br>Til daglig er <b>Stoppestedet</b> styret af leder Birgit Boding, fem medarbejdere, der er tilknyttet caféen, en hel masse frivillige, et antal timelønnede konsulenter, der yder telefonrådgivning, én deltids sekretær, én deltids koordinator, der hjælper som bisidder, én medarbejder, som arbejder med udvikling af frivillighed i Stoppestedet samt Odense Kommunes socialpsykiatrisk tilbud.",],
  ["Telefonrådgiving",   " ",                "<b>Stoppestedet</b> bidrager til den landsdækkende telefonrådgivning under <b>SIND</b>.<br><br><b>Sind</b> telefonrådgivning er et tilbud til mennesker med sindslidelse eller psykosociale problematikker og deres pårørende.<br><br>Rådgivningen er anonym og varetages af frivillige medarbejdere og er for mennesker i krise, sindslidende, deres pårørende, venner, kollegaer mm.<br><br><b>Du kan ringe på 70 23 27 50</b><br><br><b>Hverdage: 11.00 – 22.00</b><br><br><b>Søn-/helligdag: 17.00 – 22.00</b><br><br><b>Lørdag lukket.</b><br><br>",],
  ["Peer to Peer",   "/img/img-2.jpg",   "<b>Peer to Peer</b> Odense er et projekt, som er drevet på en masse gode frivillige kræfter, der brænder for at hjælpe psykisk sårbare. <br><br> Som ung eller ny med psykisk sårbarhed kan man miste håbet og troen på, at livet igen kan blive meningsfuldt og godt. Med inspiration fra en anden, som kender det fra eget liv, kan man genfinde modet og troen på at kunne bo i egen bolig, komme i arbejde/uddannelse, komme i gang med en aktivitet eller ud af ensomhed.<br><br><b>Fælles for de frivillige er, at de selv har egne erfaringer med psykisk sårbarhed, som de ønsker at bruge konstruktivt til at hjælpe og inspirere andre.</b><br><br>Erfaringsudveksling i mødet mellem frivillige og peers, peermatch eller gruppeaktiviteter er med til at bygge bro til et bedre liv, skabe netværk, give øget <b>handlekraft</b> og <b>håb</b> om recovery.<br><br>De frivillige gennemgår et uddannelsesforløb på 34 timer, hvor de arbejder med at omdanne levede erfaringer med psykisk sårbarhed til peer kompetencer, så de på kompetent vis kan være der på den andens præmis.<br><br> <b>Læs mere her - knap/link!!!</b>",],
  ["Samværsvenner",   "/img/img-2.jpg",   "text til 3. emne",],
  ["Skibhus Kabyssen",   "/img/skibhus.png",                "Kabyssen er en spiseklub for sindslidende og personer med andre psykosociale problemtikker.<br><br></br>Kabyssen drives af frivillige, og de gæster, der har lyst til at hjælpe til med det praktiske. Tilbuddet er åbent for alle, og kræver derfor ingen tilmelding. <br><br>Vi mødes tirsdag mellem kl. 17 og 20, og du kan spise med for 30 kr. <br><br><b>Du finder os i:</b> <br><br><b>Kochsgade 29 i gården på 1. sal.</b>",],
  ["Bisidder",   "/img/img-2.jpg",   "text til 2. emne",],
  ["Pårørende grupper",   "/img/img-2.jpg",   "Har du en psykisk sårbar eller sindslidende tæt inde på livet? Et familiemedlem eller en ven? Og har du lyst til at mødes med andre i samme situation? <br><br>Vi etablerer løbende grupper for pårørende, hvor man mødes anonymt over ca. ti gange og deler udfordringer og erfaringer.<br><br><b>Du kan kontakte vores koordinator, hvis du vil vide mere.</b><br><br><b>Koordinator Torben Haagerup:</b><br>Telefon: <b>22 96 28 82</b><br>E-mail: <b>info@stoppestedet.dk</b>",],
  ["Frivillig",  " ",                "<b>Cafefrivillige:</b>Man kan være frivillig i vores åbne anonyme værested, hvor opgaverne bl.a. er at være imødekommende overfor vores brugere og hjælpe med praktiske opgaver i forhold til at drive vores cafe.  De frivillige møder ind enten eftermiddag eller aften, og sammen med personalet finder man ud hvad dagens opgaver er. Man hjælper bl.a. med at madlavning og oprydning, small talk, spil eller andre aktiviteter sammen med brugerne.<br><br><b>Aktivitetsfrivillige:</b> På Stoppestedet, har vi altid en lille flok af frivillige, som ønsker at kommer her på deres helt egen måde. Vi har blandt frivillige som har sin egen musikgruppe og en der afholder Banko. Hos os kan du komme med dine gode ideer til en aktivitet og vi hjælper gerne med få den gjort til virkelighed, vi har rigtig højt til loftet og rigtig mange ting kan lade sig gøre.<br><br><b>Telefonrådgivningen:</b>Rundt om i landet sidder der mennesker som er psykiske sårbare eller pårørende til en, for hvem det betyder meget at kunne få et medmenneske i røret. Telefonrådgiverne sidder parat, de lytter og støtte de mennesker som ringer.<br><br>Her fra lokalerne i Odense besvarer frivillig og ansatte hver dag telefoner for Sinds Landsdækkende Telefonrådgivning. Som frivillig er du et medmenneske at tale med og din opgave er at lytte og evt. guide videre til andre hjælpeforanstaltninger. Du vil altid kunne søge støtte og vejledning ved en fagperson.<br><br><b>ÅbentSinds ungegruppe:</b>Unge mennesker søger ungefællesskaber, også mennesker som har en sårbarhed. I vores ungetilbud, både besøgsvenner og ungegruppen, har det stor betydning at det er unge der møde unge.<br><br>Onsdag aften mødes unge frivillig og unge med en psykisk sårbarhed i vores ungelejlighed i Jernbanegade. Som frivillig her er man med til at skabe rammerne om socialt samvær, man spiller spil, snakker om almindelig unge ting, ser en film eller går ud i byen f.eks. i biffen eller på cafe.<br><br> Du kan også melde dig som følgeven for en ung med psykisk sårbarhed. Som følgeven støtter du en ung i at komme ud og være social, til badminton, i en socialforening eller måske et fitnesscenter. Du bliver matchet med en ung hvor I umiddelbart har en fælles interesse. I planlægger selv hvor og hvornår I skal mødes, det forventes at I mødes ca. hver eller hver 2. uge.<br><br><b>Peer to Peer:</b> Du kan blive frivillig i Peer to Peer Odense, hvis du har egne levede erfaringer med psykiske lidelser, og er kommet så langt i din egen proces, at du har overskud og lyst til at bruge egne erfaringer i støtte og inspiration for andre.<br><br> Du kan indgå som peer-guide i et individuelt mentorskab eller du kan medvirke i sociale aktiviteter, f.eks. walk and talk gruppe, samvær med unge på et kollegie i Odense eller i vores mødested for gamere.<br><br>Alle frivillige Peerguide kommer til en matchsamtale inden opstart og vi opfodrer til at man deltage i Peerguideuddannelsen. Læs mere på vores hjemmeside: <b>www.peertopeerodense.dk</b><br><br><b>Skibhus Kabyssen.</b><br><br>Skibhus Kabyssen er en spiseklub for mennesker med psykisk sårbarhed, som er start af en gruppe borgere som ønskede nogle at spise og hygge sig sammen med.<br><br>Som frivillig i Kabyssen har du til opgave at tilberede mad til en gruppe på ca. 10-15 mennesker, der er altid min. 2 frivillig på opgaven. Mens man laver mad, spiser og vasker op, hyggesnakker man om løst og fast. De mødes hver tirsdag fra kl.17-20 i en social cafe i Kochsgade.<br><br>",],
  ["Åbningstider",  "/img/kort.png",   "<b>Åbningstider for værestedet:</b><br>Mandag, onsdag, torsdag og fredag:<br>11–22<br>Tirsdag:<br>11–15<br>Lørdag, søndag og helligdage:<br>14–20<br>Værestedet Stoppestedet har åbent alle helligdage med undtagelse af d. 1. januar.<br><br><b>Åbningstider for telefonrådgivningen:</b><br>Hverdage kl. 11-22<br>Lørdag lukket.<br>Søndag og helligdage kl. 17-22<br><br><b>Åbningstider i ungegruppen:</b><br>Onsdag kl. 18-21<br><br><b>Skibhus Kabyssen:</b><br>Tirsdag kl. 16–20",],
  ["Kontakt",  " ",                "text til 4. emne",],
  ["Log ind",  "/img/img-2.jpg",   "text til 2. emne",],

];

/* array til link knapper */
let linkDestination = [
  [" ", " ",],
  [" ", " ",],
  [" ", " ",],
  [" ", " ",],
  ["link til siden5", "Læs mere her",],
  ["link til siden6", "Læs mere her ",],
  ["link til siden6", "Læs mere her","Find os på Goolge Maps"],
  ["link til siden7", "Læs mere her ",],
  ["link til siden8", "navn på link",],
  ["link til siden9", "Ansøg her ",],
  ["link til siden11", "Find os på Goolge Maps",],
  [" ", " ",],
  [" ", " ",],

]
 


/* functionen under gøre ind og ændre indholdet på forsiden ud fra mit array forsideIndhold*/
function changeFrontPage(i) {
  document.getElementById("info-headline").innerHTML = forsideIndhold[i][0];
  document.getElementById("info-img").src = forsideIndhold[i][1];
  document.getElementById("info-img").alt = forsideIndhold[i][3];
  document.getElementById("info-text").innerHTML = forsideIndhold[i][2];

  /* ændre href og navn til links */
  document.getElementById("link").href = linkDestination[i][0];
  document.getElementById("link").innerHTML = linkDestination[i][1];

  document.getElementById("link2").href = linkDestination[i][0];
  document.getElementById("link2").innerHTML = linkDestination[i][2];


  /* hvis man skal display en video istedet for et bilede så går man ind og 
     skriver nummeret fra changeFontPage(i), så den ved hvor den skal vise video i stedet for billede*/
  if (i == 9) {
    document.getElementById("video").style.display = "block";
    document.getElementById("video2").style.display = "block";
    document.getElementById("info-img").style.display = "none";
  } else {
    document.getElementById("video").style.display = "none";
    document.getElementById("video2").style.display = "none";
    document.getElementById("info-img").style.display = "block";
  }


  /* kontroller hvor knapperne skal vise*/
  if (i == 4 || i == 5 || i == 6 || i == 7 || i == 9 || i == 10)  {
    document.getElementById("link").style.display = "block";
    document.getElementById("link2").style.display = "block";
  }
  else {
    document.getElementById("link").style.display = "none";
  }
  /* viser goolge knappen på skibhus kabyssen*/
  if ( i == 6)  {
    document.getElementById("link2").style.display = "block";
  }
  else {
    document.getElementById("link2").style.display = "none";
  }


  let element = document.getElementById("test");
  element.classList.toggle("main-nav-active");

}


/*
[i][0] - her vælger du din overskrift
[i][1] - her vælger du dit billede
[i][2] - her vælger du din brødtekst
*/