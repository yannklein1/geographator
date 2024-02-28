/**
 * Reset
 */
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/**
 * Eléments génériques
 */

body {
    --color-primary: #4fc45a;
    --color-secondary: #4fc45a;
    --color-tertiary: #ffeee6;    
}

/* Mise en forme des titres */
h1 {
    margin: 10px;
    font-size: 60px;
    font-weight: 900;
    color: var(--color-primary);
}

h2 {
    margin: 10px;
    font-size: 30px;
    font-weight: 600;
    color: var(--color-secondary);
}

h3 {
    margin: 10px;
    font-size: 17px;
    font-weight: 500;
    color: var(--color-secondary);
}

/* Mise en forme des formulaires */
input[type='text'],
input[type='email'] {
    width: 100%;
    margin-right: 10px;
    padding: 5px;
    border: none;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 600;
    font-size: 17px;
    color: var(--color-primary);
}

input[type='text']::placeholder,
input[type='email']::placeholder {
    color: var(--color-secondary);
    opacity: 50%;
}

button {
    padding: 5px;
    border: none;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 17px;
    color: var(--color-secondary);
    background-color: white;
}

button:hover {
    color: var(--color-primary);
    background-color: var(--color-tertiary);
    cursor: pointer;
}

button:active {
    background-color: var(--color-tertiary);
    border: 3px solid var(--color-primary);
    padding: 2px;
}

/**
 * Eléments principaux
 */
body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    font-family: 'Roboto', sans-serif; 
}

header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    min-width: 200px;
    margin-bottom: 50px;
    padding: 50px;
    text-align: center;
    color: white;
    font-size: 25px;
    font-weight: 500;
    border-radius: 30px;
    background-color: var(--color-secondary);
}

footer {
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px;
    font-weight: 600;
    font-size: 17px;
    color: white;
    background-color: var(--color-secondary);
}

/**
 * Mise en forme des éléments de la zone principale
 */

/* Zone d'options */
.optionSource {
    margin: 20px;
}

.optionSource input[type='radio']:not(:first-child) {
    margin-left: 20px;
}

/* Zone ou sera affiché le pays à afficher */
#zoneQuestion {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0 10px 0;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    font-size: 30px;
    font-weight: 600;
    color: var(--color-primary);
}

/* Zone de saisie */
#zoneSaisie {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
}

/* Eléments du formulaire de saisie */
#zoneSaisie input[type='text'] {
    width: 80%;
}

#zoneSaisie button {
    width: 20%;
}

#affichageScore {
    font-size: 20px;
}

#zoneReponsePrecedente {
    font-size: 25px;
}

/**
  * Gestion des popups
  */

.popupBackground {
    display: none;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.5);
}

.popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 17px;
    font-weight: 500;
    background-color: #f76c5e;
    border-radius: 30px;
    z-index: 1;
}



.active {
    display: flex !important;
}

.popup p {
    width: 100%;
    margin-bottom: 20px;
}

.popup div {
    font-size: 25px;
    padding : 5px;
    padding-bottom: 15px;
}

/* Eléments de formulaire */
.popup input {
    margin-bottom: 10px;
}

.popup button {
    margin: 5px;
}

/** 
 * Responsive
 */


 /* En dessous de 1200 px */
@media screen and (max-width: 1200px) {
    main {
        width: 60%;
        padding: 30px;
    }
}


/* En dessous de 800 px */
@media screen and (max-width: 800px) {
    main {
        width: 90%;
        padding: 10px;
    }
}
