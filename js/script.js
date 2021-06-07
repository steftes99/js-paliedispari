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
