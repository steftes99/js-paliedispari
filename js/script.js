function pariDispari(){
    var num1 = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));
    var num2 = Math.floor(Math.random() * 5) + 1;

    var somma = num1 + num2;

    document.getElementById('numero1').innerHTML = num1;
    document.getElementById('numero2').innerHTML = num2;
    document.getElementById('somma').innerHTML = somma;
    
    if(somma % 2 == 0){
        document.getElementById('risultato').innerHTML = 'Pari';
    } else {
        document.getElementById('risultato').innerHTML = 'Dispari'
    }
}
function palindromo(){
    var parola = prompt('Inserisci una parola');
    
    document.getElementById('parola').innerHTML = parola;
    

    for (var i = 0; i < parola.length / 2; i++){
        if(parola[i] !== parola[parola.length - 1 - i]){
            document.getElementById('palindromo').innerHTML = 'Non palindromo';
            return false;
            
        } 
            
        
    } document.getElementById('palindromo').innerHTML = 'Palindromo';
    return true;

}