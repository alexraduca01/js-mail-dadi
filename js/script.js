// const submitButton = document.getElementById('submit-button');
// const diceButton = document.getElementById('dice-button');
// const diceGame = document.getElementById('dice-game');
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// submitButton.addEventListener('click', function(){

//     const users = ['aaa@gmail.com', 'bbb@gmail.com', 'ccc@gmail.com', 'ddd@gmail.com', 'eee@gmail.com'];
//     const emailCheck = document.querySelector('input').value;
//     let checkMex = document.getElementById('checkmex');
    
//     if(users.includes(emailCheck)){
//         checkMex.innerHTML = 'Presente !';
//         diceGame.classList.remove('d-none');
//         checkMex.classList.add('text-success', 'fw-bold');
//     } else {
//         checkMex.innerHTML = 'Assente !';
//         checkMex.classList.add('mc-red', 'fw-bold');
//         diceGame.classList.add('d-none');
//     }  

// })

// diceButton.addEventListener('click', function(){

//     const userNumber = getRndInteger(1, 6);
//     const iaNumber = getRndInteger(1, 6);
//     let userDice = document.getElementById('user-dice');
//     let iaDice = document.getElementById('ia-dice');

//     if(userNumber < iaNumber){
//         userDice.innerHTML = (userNumber + ' hai vinto !');
//         userDice.classList.add('text-success');
//         userDice.classList.remove('mc-red', 'text-warning');
//         iaDice.innerHTML = ( iaNumber + " l'ia ha perso !" );
//         iaDice.classList.add('mc-red');
//         iaDice.classList.remove('text-success', 'text-warning');
//     } else if (iaNumber < userNumber){
//         userDice.innerHTML = (userNumber + ' hai perso !');
//         userDice.classList.add('mc-red');
//         userDice.classList.remove('text-success', 'text-warning');
//         iaDice.innerHTML = ( iaNumber + " l'ia ha vinto !" );
//         iaDice.classList.add('text-success');
//         iaDice.classList.remove('mc-red', 'text-warning');
//     } else {
//         userDice.innerHTML = (userNumber + ' pareggio !');
//         userDice.classList.add('text-warning');
//         userDice.classList.remove('mc-red', 'text-success');
//         iaDice.innerHTML = ( iaNumber + ' pareggio !' );
//         iaDice.classList.add('text-warning');
//         iaDice.classList.add('text-success', 'mc-red');
//     }

// })

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

const users = ['aaa@gmail.com', 'bbb@gmail.com', 'ccc@gmail.com', 'ddd@gmail.com', 'eee@gmail.com']
const submitButton = document.getElementById('submit-button');
const diceGame = document.getElementById('dice-game');
const diceButton = document.getElementById('dice-button');
const checkMex = document.getElementById('checkmex');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

submitButton.addEventListener('click', function(){
    
    let found = false;

    for(let a = 0; a < users.length; a++ ) {
        
        const emailCheck = document.getElementById('email').value;

        if(emailCheck === users[a]) {
            found = true;
        }
    }

    if(found){
        checkMex.innerHTML = 'Presente !';
        diceGame.classList.remove('d-none');
        checkMex.classList.add('text-success', 'fw-bold');
    }
    else {
        checkMex.innerHTML = 'Assente !';
        checkMex.classList.add('mc-red', 'fw-bold');
        diceGame.classList.add('d-none');
    }

})

diceButton.addEventListener('click', function(){

    const rndNumber = [1, 2, 3, 4, 5, 6];
    let userNumber = rndNumber[getRndInteger(0, (rndNumber.length - 1))];
    let iaNumber = rndNumber[getRndInteger(0, (rndNumber.length - 1))];
    let userDice = document.getElementById('user-dice');
    let iaDice = document.getElementById('ia-dice');

    if(userNumber < iaNumber){
        userDice.innerHTML = (userNumber + ' hai vinto !');
        userDice.classList.add('text-success');
        userDice.classList.remove('mc-red', 'text-warning');
        iaDice.innerHTML = ( iaNumber + " l'ia ha perso !" );
        iaDice.classList.add('mc-red');
        iaDice.classList.remove('text-success', 'text-warning');
    } else if (iaNumber < userNumber){
        userDice.innerHTML = (userNumber + ' hai perso !');
        userDice.classList.add('mc-red');
        userDice.classList.remove('text-success', 'text-warning');
        iaDice.innerHTML = ( iaNumber + " l'ia ha vinto !" );
        iaDice.classList.add('text-success');
        iaDice.classList.remove('mc-red', 'text-warning');
    } else {
        userDice.innerHTML = (userNumber + ' pareggio !');
        userDice.classList.add('text-warning');
        userDice.classList.remove('mc-red', 'text-success');
        iaDice.innerHTML = ( iaNumber + ' pareggio !' );
        iaDice.classList.add('text-warning');
        iaDice.classList.add('text-success', 'mc-red');
    }

})