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


const button = document.querySelector('button');

button.addEventListener('click', function(){

    const users = ['aaa@gmail.com', 'bbb@gmail.com', 'ccc@gmail.com', 'ddd@gmail.com', 'eee@gmail.com'];
    const emailCheck = document.querySelector('input').value;
    let checkMex = document.getElementById('checkmex');
    
    if(users.includes(emailCheck)){
        checkMex.innerHTML = 'Presente !';
    } else if (users.includes(emailCheck) === false){
        checkMex.innerHTML = 'Assente !';
    }     

})
















// Utility 

// Math.floor(Math.random() * (max - min + 1) ) + min;