let btnValiderMot = document.getElementById("btnValiderMot")
let btnRejouer = document.getElementById("btnRejouer")
let listeNombresAleatoires = []
let nombreAleatoire = Math.floor(Math.random()*(listePaysCapitalesOceanie.length))

function melange () {
	nombreAleatoire = Math.floor(Math.random()*(listePaysCapitalesOceanie.length))
}

function initialisation () {
	btnValiderMot.style.display = "block";
	btnRejouer.style.display = "none";
	btnValiderMot.innerHTML = "Valider";
	i = 0;
	score = 0;
	melange ();
	listeNombresAleatoires.push(nombreAleatoire);
	console.log(listeNombresAleatoires)
	inputEcriture.disabled = false;
	zoneQuestion.innerHTML = listePaysCapitalesOceanie[nombreAleatoire].capitale
	affichageScore.innerHTML = score + " / " + i
}

function lancerJeu () {
	initialisation()
	
	//boucle
	btnValiderMot.addEventListener("click", () => {
		processJeu ()
	})
	
	zoneSaisie.addEventListener("keyup", function(enter) {
		if (enter.code === "Enter") {
			processJeu ()
		}
	})
}

function processJeu () {
	calculScore()
	inputEcriture.value = ""
	i++
	if (i === 20) {
        finJeu();
    } else {
	do {melange ()} while (listeNombresAleatoires.includes(nombreAleatoire)===true)
	listeNombresAleatoires.push(nombreAleatoire);
	console.log(listeNombresAleatoires);
	affichageScore.innerHTML = score + " / " + i 
	modificationCapitale ()
	}
}

function modificationCapitale () {
	zoneQuestion.innerHTML = listePaysCapitalesOceanie[nombreAleatoire].capitale
}

function suppressionAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function calculScore () {
	let reponseUtilisateur = suppressionAccents(inputEcriture.value.toLowerCase().trim())
	let bonneReponse = suppressionAccents(listePaysCapitalesOceanie[nombreAleatoire].pays.toLowerCase())
	if 	(reponseUtilisateur === bonneReponse){
	score++;
	affichageScore.innerHTML = score + " / " + i;
	affichageBonneReponse ()
	} else {
		affichageMauvaiseReponse ()
		}
}

function affichageBonneReponse () {
	zoneReponsePrecedente.innerHTML = "Bonne réponse"
}

function affichageMauvaiseReponse () {
	zoneReponsePrecedente.innerHTML = "Mauvaise réponse, la réponse était " + listePaysCapitalesOceanie[nombreAleatoire].pays
}

function finJeu() {
	affichageScore.innerHTML = score + " / " + i ;
	inputEcriture.disabled = true;
	zoneProposition.innerHTML = "";
    zoneQuestion.innerHTML = "Bravo, vous avez terminé le jeu";
	btnValiderMot.style.display = "none";
	btnRejouer.style.display = "block";
	btnRejouer.addEventListener("click", () => {
		initialisation ()
		})
}

lancerJeu ()