/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numSecreto ;
let contadorIntentos = 0;
let numingresado;

let max = 2;
let min = 1;


function comenzar()
{
	numSecreto = Math.floor(Math.random() * (max - min + 1) + min);
 
}

function verificar()
{
  numingresado = parseInt(document.getElementById("txtIdNumero").value);
 
    if  (numingresado == numSecreto){
      alert("sos un capo")
      
    }
    else{alert("sos una putita")}
    contadorIntentos++
    
  
    
 
  document.getElementById("txtIdIntentos").value = contadorIntentos
	
}