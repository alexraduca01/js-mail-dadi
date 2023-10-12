// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const submitButton = document.getElementById('submit-button');
const diceButton = document.getElementById('dice-button');
const diceGame = document.getElementById('dice-game');
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

submitButton.addEventListener('click', function(){

    const users = ['aaa@gmail.com', 'bbb@gmail.com', 'ccc@gmail.com', 'ddd@gmail.com', 'eee@gmail.com'];
    const emailCheck = document.querySelector('input').value;
    let checkMex = document.getElementById('checkmex');
    
    if(users.includes(emailCheck)){
        checkMex.innerHTML = 'Presente !';
        diceGame.classList.remove('d-none');
    } else {
        checkMex.innerHTML = 'Assente !';
    }  

})

diceButton.addEventListener('click', function(){

    const userNumber = getRndInteger(1, 6);
    const iaNumber = getRndInteger(1, 6);
    let userDice = document.getElementById('user-dice');
    let iaDice = document.getElementById('ia-dice');

    if(userNumber < iaNumber){
        userDice.innerHTML = (userNumber + ' hai vinto !');
        iaDice.innerHTML = ( iaNumber + " l'ia ha perso !" );
    } else if (iaNumber < userNumber){
        userDice.innerHTML = (userNumber + ' hai perso !');
        iaDice.innerHTML = ( iaNumber + " l'ia ha vinto !" );
    } else {
        userDice.innerHTML = (userNumber + ' pareggio !');
        iaDice.innerHTML = ( iaNumber + ' pareggio !' );
    }

})
















