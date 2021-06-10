// esercizio 1
// Si scriva una funzione che accetti tre argomenti, un 
// array e due numeri (a più piccolo di b).  La funzione 
// ritornerà un nuovo array con i valori che hanno la posizione 
// compresa tra i due numeri


 var numeri = [1, 30, 56, 67, 120, 150];

 var x = parseInt(prompt('inserisci un numero minimo 1 e massimo ' + numeri.length));
 var y = parseInt(prompt('inserisci un numero massimo ' + numeri.length));


 valore(numeri, x, y);

 console.log(valore(numeri, x, y));

 function valore(array, min, max){
     var nuovo = [];
     for (var i = min - 1; i < max; i++ ){
         nuovo.push(array[i]);

     }
   return nuovo;
 }




// secondo esercizio
// Dare la possibilità di inserire due parole. 
//        Verificare tramite una funzione che le due parole 
//        abbiano la stessa lunghezza.    Se hanno la stessa 
//        lunghezza, stamparle entrambe altrimenti stampare la 
//        più lunga delle due.




var primaParola = prompt('inserisci prima parola');
var secondaParola = prompt('inserisci seconda parola');

 var risultato = lunghezza(primaParola, secondaParola);
 console.log(risultato);

function lunghezza(x, y){
    var ris;
     if(x.length == y.length){
         ris = 'sono uguali'
     }else if(x.length > y.length){
         ris = x
     }else{
        ris = y
     }
     return ris;

 }
 



// terzo esercizio
// 3.  Scrivi una funzione che fonda due array (con lo stesso numero 
//     di elementi) prendendo alternativamente gli elementi da uno e dall’altroes.
//      [a,b,c], [1,2,3] → [a,1,b,2,c,3].

  var lettere = ['a','b','c'];
  var numeri = [1, 2, 3];

  alternanza(lettere, numeri)

  function alternanza(x,y){
    
      for(var i = 0; i < x.length ; i++){
        
          console.log(x[i])
          console.log(y[i])
        
      }



  }





// 4. Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale
//  maiuscola e 
// tutto il resto in minuscolo.




var inserimento = prompt('inserisci una parola')

function letteraMaiuscola(parola) {
     return parola.charAt(0).toUpperCase() + parola.slice(1);
  }
  
  console.log(letteraMaiuscola(inserimento)); 