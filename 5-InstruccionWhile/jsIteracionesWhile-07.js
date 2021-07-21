/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let num = 0;
	let rep;
	let acumulador = 0;
	let sum = 0;
	


	do{
		num = parseInt(prompt("ponga un numero"));
		sum = sum + num
		acumulador++;
		rep = prompt("quiere poner otro numero?");


	}while (rep == "si") 
	 

	 document.getElementById("txtIdSuma").value = sum;
	document.getElementById("txtIdPromedio").value = sum / acumulador;

	

}//FIN DE LA FUNCIÓN