/* tjekker om javascriptet kører*/
console.log("javascript is running !");

function burger() {
  let element = document.getElementById("menuBar");
  element.classList.toggle("main-nav-active");
}

/* two dimensional array som indholder at det jeg gerne vil ændre på forside
   i et array - stillet op at hver punkt indholder infomationer som svare til sit punkt */
let forsideIndhold = [
  ["Vi er her for at hjælpe dig", "./img/forside.png", "Stoppestedet er et SIND værested, der har eksisteret siden først i 90’erne. <b>Hos os er alle velkomne.</b> Stoppestedet er et anonymt værested, hvilket betyder, at tilbuddene kan benyttes frivilligt og uden visitering.<br><br> <b>Tak fordi du er her.</b> Hvis du vil vide mere om, hvem vi er, hvordan vi kan hjælpe dig og, hvordan du endda kan hjælpe os, er du velkommen til at læse mere om vores forskellige muligheder for lige netop dig.", "Sammenhold på Stoppestedet",],
  ["Hvem er vi?", "./img/omos.png", "<b>Stoppestedet</b> er et tilbud til borgere i Odense kommune om at kunne være i et åbent, anonymt mødested, hvor man møder støtte og forståelse med henblik på en bedre trivsel i hverdagen. Stoppestedet er en selvejende institution under landsforeningen <b>SIND</b>, hvor driften finansieres af Odense Kommune i henhold til indgået driftsoverenskomst. Stedet drives af en bestyrelse med repræsentanter fra SIND, medarbejdere, brugere og frivillige af Stoppestedet samt Odense Byråd.  <br> SIND arbejder for at fremme fysisk og psykisk sundhed, fordi vi mener, at psykiatriske og sociale indsatser skal indgå i en enhed, og fordi vi tror på, at det er muligt at komme sig af en sindslidelse.  <br> <br> <b>SIND Værestedet Stoppestedet</b>  <br> er et anonymt værested for borgere, der har en sindslidelse eller andre psykosociale problemstillinger. Stoppestedet er en café, der har åbent alle dage i ugen, hvor man hver dag kan komme og købe kaffe eller lidt at spise. Foruden lidt til den lille sult kan man også købe et varmt måltid mad seks dage i ugen, der laves i fællesskab mellem ansatte, frivillige og besøgende. Vi spiser kl. 17.30. <br><br><b>Tilmelding til aftensmaden sker ved fremmøde eller telefonisk før kl. 16.00. </b> <br> <br> Meningen med Stoppestedet er først og fremmest at have et sted, hvor sindslidende synes, det er rart at være, og derfor bliver det sociale samvær også vægtet højt i caféen. Der afholdes løbende forskellige aktiviteter, man kan deltage i, hvis man har lyst. Vi følger årets traditioner og holder løbende fester – vi fejrer blandt andet juleaften på Stoppestedet.  <br> <br> <b>Bestyrelsen</b><br> Bestyrelsen består af Formand Brian Skov Nielsen, en medarbejderrepræsentant, en <b>SIND-repræsentant</b>, et medlem udpeget af Byrådet, en frivilligrepræsentant og to brugerrepræsentanter. Den daglige leder er sekretær.  <br> <br> <b>Personale</b> <br> Til daglig er <b>Stoppestedet</b> styret af leder Birgit Boding, fem medarbejdere, der er tilknyttet caféen, en hel masse frivillige, et antal timelønnede konsulenter, der yder telefonrådgivning, én deltids-sekretær, én deltids-koordinator, der hjælper som bisidder, én medarbejder, som arbejder med udvikling af frivillighed i Stoppestedet samt Odense Kommunes socialpsykiatriske tilbud.<br><br>", "Vi vinker til dig",],
  ["Hvad kan vi tilbyde unge?", "./img/ungegruppe.png", "<b>Åbent Sinds ungegruppe</b> er et tilbud på Stoppestedet for unge mellem 18 år og 35 år i Odense Kommune. Man kan komme <b>anonymt</b>, og det kræver ingen tilmelding. <br><br>Onsdag aften mødes unge med en psykisk sårbarhed i vores unge-lejlighed i Jernbanegade. De frivillige sætter rammerne for det sociale fællesskab. Vi spiller spil, snakker om almindelige unge-ting, ser en film eller går ud i byen f.eks. i biffen, Papas papbar eller på café. Hvem, der er værter, og hvad der er planlagt deles hver måned på vores Facebookgruppe, som hedder: <br> <b>“ÅbentSINDs Ungegruppe”</b>. <br>Kan det være svært at komme afsted på egen hånd? Eller er det en udfordring at møde nye mennesker? Så kontakt os, inden du besøger Ungegruppen. Vi kan enten hente dig i døren eller mødes et par minutter inden, de andre møder op. Hvis du har lyst til at vide mere om fællesskabet så: <br> <b>Meld dig ind i “ÅbentSINDs Ungeruppe” på Facebook eller find “Koordinator Åbentsinds Ungegruppe”</b><br><br><b>Følgevenner – Det er nemmere at følges ad!</b> <br>I Åbent Sind har vi også mulighed for at skabe en tættere ung-til-ung relation, som vi kalder følgevenner. Her kan du blive matchet med en ung frivillig for at følges til andre aktiviteter eller arrangementer. Måske du har lyst til at træne eller gå til badminton, men føler, at det kan være svært at komme afsted på egen hånd? Eller drikke kaffe på en café og snakke om livets store og små udfordringer? Så er en følgeven måske noget for dig.<br><br><b>Du finder os på Jernbanegade 24B<br>Vi har åbent Onsdag kl. 18 – 21</><br><br>", "Unge mennesker der hygger sammen",],
  ["Har du brug for en samtale?", "./img/telefonrådgivning.png", "<b>Stoppestedet</b> bidrager til den landsdækkende telefonrådgivning under <b>SIND</b>.<br>SIND telefonrådgivning er et tilbud til mennesker med sindslidelse eller psykosociale problematikker og deres pårørende.<br>Rådgivningen er anonym og varetages af frivillige medarbejdere og er for mennesker i krise, sindslidende, deres pårørende, venner, kollegaer, mm.<br><br><b>Du kan ringe på 70 23 27 50</b><br><br><b>Hverdage: kl. 11.00 – 22.00</b><br><b>Søn-/helligdag: kl. 17.00 – 22.00</b><br><b>Lørdag lukket.</><br><br>", "Du kan tale med og via telefornrådgivning"],
  ["Peer to Peer", "./img/peerToPeer.png", "<b>Peer to Peer</b> Odense er et projekt, som er drevet på en masse gode frivillige kræfter, der brænder for at hjælpe psykisk sårbare. <br> Som ung eller ny med psykisk sårbarhed kan man miste håbet og troen på, at livet igen kan blive meningsfuldt og godt. Med inspiration fra en anden, som kender det fra eget liv, kan man genfinde modet og troen på at kunne bo i egen bolig, komme i arbejde/uddannelse, komme i gang med en aktivitet eller ud af ensomhed.<br><br><b>Fælles for de frivillige er, at de selv har egne erfaringer med psykisk sårbarhed, som de ønsker at bruge konstruktivt til at hjælpe og inspirere andre.</b><br><br>Erfaringsudveksling i mødet mellem frivillige og peers, peermatch eller gruppeaktiviteter er med til at bygge bro til et bedre liv, skabe netværk, give øget <b>handlekraft</b> og <b>håb</b> om recovery.<br>De frivillige gennemgår et uddannelsesforløb på 34 timer, hvor de arbejder med at omdanne levede erfaringer med psykisk sårbarhed til peer kompetencer, så de på kompetent vis kan være der på den andens præmis.<br><br>", "Vi tager gerne en snak over en kop kaffe",],
  ["Vi holder sammen", "./img/samværsvenner.png", "Måske føler du dig alene, fordi du ikke kender så mange, eller fordi du synes, det er svært at komme udenfor dit hjem.<br>Måske kunne det være rart at have én, der kom forbi en gang imellem … én der bare kom for at være sammen med dig og have det rart.<br><br><b>Hvad kan I lave sammen?</b><br>Du mødes med din samværsven hver eller hver anden uge i 1-2 timer afhængig af, hvad I bliver enige om, og der er mange muligheder for, hvad I kan lave:<br><br> - Tale om ugens begivenheder over en kop kaffe hjemme hos dig eller et andet sted,<br> som I beslutter<br><br> - Tale om en fælles interesse I har<br><br> - Gå eller cykle en tur<br><br> - Spille kort eller brætspil<br><br> - Tage på en lille udflugt, fiske, gå i biografen eller på café<br><br> - Eller I kan bare være stille sammen, fordi det er rart, at der er et andet menneske, selvom du måske en dag ikke orker at snakke om noget<br><br><b>Hvem er de frivillige?</b><br>De frivillige i Røde Kors Samværdigheds-aktivitet er både unge, ældre, studerende og mennesker i arbejde. Fælles for dem alle er, at de har overskud og lyst til at være noget for andre mennesker, og at de har tavshedspligt.<br>Seværdighed er et samarbejde mellem Sind Fyn og Røde Kors.<br>Du bliver matchet med en frivillig, der passer til dig.<br><br><b>Hvis du vil høre mere, kan du kontakte:<br>Lene: 40 74 77 00<br>Jette: 22 35 81 01<br>Odense.samvaerdighed@rodekors.dk</b><br><br>", "Hos os er der altid kærlighed og kram",],
  ["Kom og spis med os", "./img/skibhus.png", "Kabyssen er en spiseklub for sindslidende og personer med andre psykosociale problematikker.<br>Kabyssen drives af frivillige og de gæster, der har lyst til at hjælpe til med det praktiske. Tilbuddet er åbent for alle, og kræver derfor ingen tilmelding. <br><br>Vi mødes tirsdag mellem kl. 17 og 20, og du kan spise med for 30 kr. <br><br><b>Du finder os i</b> <b>Kochsgade 29 i gården på 1. sal.</b><br><br>", "Spis sammen med os i Odense",],
  ["Hvad er en bisidder?", "./img/bisidder.png", "Hvis du skal til møde med det offentlige, har du ret til at have en bisidder ved din side – og du bestemmer selv, hvem det skal være.<br><br>Forvaltningsloven giver ret til at have én person med, når du skal til møde med en myndighed, hvilket for nogle kan være rart, hvis en sag er indviklet, hvis du er nervøs, eller, hvis du simpelthen bare føler dig mere tryg ved, at der er en ekstra person med.<br><br><b>Har du brug for en bisidder eller mere rådgivning, ring på:<br>70 23 27 50 <br>Fra kl. 11-22 på hverdage. <br>Fra kl. 18-22 om søndagen. <br>Lørdag er telefonrådgivningen lukket.</70><br><br>", "Vi hjælper også som bisidder",],
  ["Vi hjælper alle", "./img/pårørende.png", "Har du en psykisk sårbar eller sindslidende tæt inde på livet? Et familiemedlem eller en ven? Og har du lyst til at mødes med andre i samme situation? <br>Vi etablerer løbende grupper for pårørende, hvor man mødes anonymt over ca. ti gange og deler udfordringer og erfaringer.<br><br><b>Du kan kontakte vores koordinator, hvis du vil vide mere.</b><br><br><b>Koordinator Torben Haagerup: </b><br>Telefon: <b>22 96 28 82</b><br>E-mail: <b>info@stoppestedet.dk</b>", "Vi hjælper alle også de pårørende",],
  ["Frivillig", " ", "<b>Caféfrivillige: </b> <br>Man kan være frivillig i vores åbne anonyme værested, hvor opgaverne bl.a. er at være imødekommende overfor vores brugere og hjælpe med praktiske opgaver i forhold til at drive vores cafe.  De frivillige møder ind enten eftermiddag eller aften, og sammen med personalet finder man ud, hvad dagens opgaver er. Man hjælper bl.a. med madlavning og oprydning, small talk, spil eller andre aktiviteter sammen med brugerne.<br><br><b>Aktivitetsfrivillige:</b> <br>På Stoppestedet har vi altid en lille flok af frivillige, som ønsker at komme her på deres helt egen måde. Vi har blandt frivillige, som har sin egen musikgruppe og én, der afholder Banko. Hos os kan du komme med dine gode idéer til en aktivitet, og vi hjælper gerne med få den gjort til virkelighed. Vi har rigtig højt til loftet, og rigtig mange ting kan lade sig gøre.<br><br><b>Telefonrådgivningen: </b><br>Rundt om i landet sidder der mennesker som er psykisk sårbare eller pårørende til en, for hvem det betyder meget at kunne få et medmenneske i røret. Telefonrådgiverne sidder parat, de lytter og støtter de mennesker, som ringer.<br>Her fra lokalerne i Odense besvarer frivillige og ansatte hver dag telefoner for Sinds Landsdækkende Telefonrådgivning. Som frivillig er du et medmenneske, og din opgave er at lytte og evt. guide videre til andre hjælpeforanstaltninger. Du vil altid kunne søge støtte og vejledning ved en fagperson.<br><br><b>ÅbentSinds ungegruppe: </b><br>Unge mennesker søger ungefællesskaber - også mennesker som har en sårbarhed. I vores ungetilbud (både besøgsvenner og ungegruppen) har det stor betydning, at det er unge, der møde unge.<br>Onsdag aften mødes unge frivillig og unge med en psykisk sårbarhed i vores unge-lejlighed i Jernbanegade. Som frivillig her er man med til at skabe rammerne om socialt samvær, man spiller spil, snakker om almindelig unge-ting, ser en film eller går ud i byen f.eks. i biffen eller på café.<br> Du kan også melde dig som følgeven for en ung med psykisk sårbarhed. Som følgeven støtter du en ung i at komme ud og være social, til badminton, i en socialforening eller måske et fitnesscenter. Du bliver matchet med en ung, hvor I umiddelbart har en fælles interesse. I planlægger selv, hvor og hvornår I skal mødes. Det forventes, at I mødes ca. hver eller hver 2. uge.<br><br><b>Peer to Peer:</b> <br>Du kan blive frivillig i Peer to Peer Odense, hvis du har egne levede erfaringer med psykiske lidelser, og er kommet så langt i din egen proces, at du har overskud og lyst til at bruge egne erfaringer i støtte og inspiration for andre.<br> Du kan indgå som peer-guide i et individuelt mentorskab, eller du kan medvirke i sociale aktiviteter f.eks. walk and talk gruppe, samvær med unge på et kollegie i Odense eller i vores mødested for gamere.<br>Alle frivillige peer-guider kommer til en matchsamtale inden opstart, og vi opfodrer til, at man deltager i Peerguide-uddannelsen. Læs mere på vores hjemmeside: <b>www.peertopeerodense.dk</b><br><br><b>Skibhus Kabyssen: </b><br>Skibhus Kabyssen er en spiseklub for mennesker med psykisk sårbarhed, som er startet af en gruppe borgere, som ønskede nogle at spise og hygge sig sammen med.<br>Som frivillig i Kabyssen har du til opgave at tilberede mad til en gruppe på ca. 10-15 mennesker. Der er altid min. 2 frivillig på opgaven. Mens man laver mad, spiser og vasker op, hyggesnakker man om løst og fast. De mødes hver tirsdag fra kl. 17-20 i en social cafe i Kochsgade.<br><br>",],
  ["Åbningstider", "./img/kort.png", "<b>Åbningstider for værestedet:</b><br>Mandag, onsdag, torsdag og fredag: kl. 11–22<br>Tirsdag: kl. 11–15<br>Lørdag, søndag og helligdage: kl. 14–20<br>Åbent alle helligdage med undtagelse af d. 1. januar.<br><br><b>Åbningstider for telefonrådgivningen: </b><br>Hverdage kl. 11-22<br>Lørdag lukket.<br>Søndag og helligdage kl. 17-22<br><br><b>Åbningstider i ungegruppen: </b><br>Onsdag kl. 18-21<br><br><b>Skibhus Kabyssen: </b><br>Tirsdag kl. 16–20<br><br>", "Kort over hvor Stoppestedet ligger",],
  ["Kontakt", "./img/kontakt_2.png", "Du er altid velkommen til at kontakte os – det er anonymt og uforpligtende. Send en mail i nedenstående formular eller ring, så besvarer vi din henvendelse hurtigst muligt.<br><br><b>Telefon</b><br>Værestedet Stoppestedet: <b>66 19 02 65</b><br>Kontor: <b>66 19 03 26</b><br><br><b>Adresse</b><br>SIND værestedet Stoppestedet<br>Jernbanegade 24B<br>5000 Odense C.<br><br><b>Leder Birgit Boding</b><br>Tlf: <b>66 19 03 26/23 41 45 61</b><br>E-mail: <b>bbhan@odense.dk</b><br><br>",],
  [" ", " ", "",],
];


/*
[i][0] - her vælger du din overskrift
[i][1] - her vælger du dit billede
[i][2] - her vælger du din brødtekst
[i][3] - her vælger du din alt tag
*/

/* array til link knapper */
let linkDestination = [
  [" ", " ",],
  [" ", " ",],
  [" ", " ",],
  [" ", " ",],
  ["https://www.peertopeerodense.dk/", "Læs mere her",],
  ["https://odense.drk.dk/vores-arbejde/faellesskaber-2/samvaerdighed/", "Læs mere her ",],
  ["https://www.facebook.com/skibhuskabyssen/?fref=ts", "Læs mere her", "Find os på Goolge Maps", "https://www.google.com/maps/dir//55.40317,10.39636/@55.3982504,10.3815749,14z",],
  ["https://sind.dk/faa-hjaelp/faa-en-sind-bisidder", "Læs mere her ",],
  ["link til siden8", "navn på link",],
  ["bliv-frivillig.html", "Ansøg her ",],
  ["https://www.google.com/maps/place/Stoppestedet/@55.397935,10.3826765,17z/data=!3m1!4b1!4m5!3m4!1s0x464cdff90c4050f7:0xff528f137bc4a11a!8m2!3d55.397935!4d10.3848652", "Find os på Goolge Maps",],
  ["kontakt.html", "Kontakt",],
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

  document.getElementById("link2").href = linkDestination[i][3];
  document.getElementById("link2").innerHTML = linkDestination[i][2];


  /* hvis man skal display en video istedet for et bilede så går man ind og 
     skriver nummeret fra changeFontPage(i), så den ved hvor den skal vise video i stedet for billede*/
  if (i == 9) {
    document.getElementById("info-img").style.display = "none";

    var nums = ["video", "video2"];

    for (var j = 0; j < nums.length; j++) {
      document.getElementById(nums[j]).style.display = "block";
    }

  } else {
    document.getElementById("video").style.display = "none";
    document.getElementById("video2").style.display = "none";
    document.getElementById("info-img").style.display = "block";
  }

  /* kontroller hvor knapperne skal vise*/
  if (i == 4 || i == 5 || i == 6 || i == 7 || i == 9 || i == 10 || i == 11) {
    document.getElementById("link").style.display = "block";
    document.getElementById("link2").style.display = "block";
  }
  else {
    document.getElementById("link").style.display = "none";
  }
  /* viser goolge knappen på skibhus kabyssen*/
  if (i == 6) {
    document.getElementById("link2").style.display = "block";
  }
  else {
    document.getElementById("link2").style.display = "none";
  }


  let element = document.getElementById("menuBar");
  element.classList.toggle("main-nav-active");

}


function coronaInfo() {
  coronaVar = setTimeout(coronaFunction, 2000);
}

function coronaFunction() {
  let element = document.getElementById("ac-wrapper");
  element.classList.toggle("ac-wrapper-active");
}