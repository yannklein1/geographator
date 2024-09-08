let btnValiderMot = document.getElementById("btnValiderMot")
let btnRejouer = document.getElementById("btnRejouer")
let listeNombresAleatoires = []
let nombreAleatoire = Math.floor(Math.random()*(listePaysCapitalesAfrique.length))

function melange () {
	nombreAleatoire = Math.floor(Math.random()*(listePaysCapitalesAfrique.length))
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
	zoneQuestion.innerHTML = listePaysCapitalesAfrique[nombreAleatoire].capitale
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
	zoneQuestion.innerHTML = listePaysCapitalesAfrique[nombreAleatoire].capitale
}

function calculScore () {
	let reponseUtilisateur = inputEcriture.value.toLowerCase().trim()
	let bonneReponse = listePaysCapitalesAfrique[nombreAleatoire].pays.toLowerCase()
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
	zoneReponsePrecedente.innerHTML = "Mauvaise réponse, la réponse était " + listePaysCapitalesAfrique[nombreAleatoire].pays
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
