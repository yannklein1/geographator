let btnValiderMot = document.getElementById("btnValiderMot")
let btnRejouer = document.getElementById("btnRejouer")

function initialisation () {
	btnValiderMot.style.display = "block";
	btnRejouer.style.display = "none";
	btnValiderMot.innerHTML = "Valider";
	i = 0;
	score = 0;
	nombreAleatoire = Math.floor(Math.random()*(listePaysCapitales.length + 1));
	inputEcriture.disabled = false;
	zoneQuestion.innerHTML = listePaysCapitales[nombreAleatoire].pays
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
	if (i === 10) {
        finJeu();
    } else {
	nombreAleatoire = Math.floor(Math.random()*(listePaysCapitales.length))
	affichageScore.innerHTML = score + " / " + i 
	modificationPays ()
	}
}

function modificationPays () {
	zoneQuestion.innerHTML = listePaysCapitales[nombreAleatoire].pays
}

function calculScore () {
	let reponseUtilisateur = inputEcriture.value.toLowerCase()
	let bonneReponse = listePaysCapitales[nombreAleatoire].capitale.toLowerCase()
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
	zoneReponsePrecedente.innerHTML = "Mauvaise réponse, la réponse était " + listePaysCapitales[nombreAleatoire].capitale
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

//function test () {
//let i = 0
//btnValiderMot.addEventListener("click", () => {
//		i++;
//		console.log(i)
//		if (i === 3){
//	btnValiderMot.removeEventListener("click", () => {})
//}
//	console.log("test ok")
//	})
//}
//
//test ()
