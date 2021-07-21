/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let acumuladorpositivo = 0;
	let acumuladornegativo = 1;
	let respuesta;
	let flag = 1;
	
	do{
		numero = parseInt(prompt("ponga un numero"));
		if (numero >= 0) {
			acumuladorpositivo = acumuladorpositivo + numero;
			
		}else {
			acumuladornegativo = acumuladornegativo * numero;
			flag = 0
		}respuesta = prompt("quiere poner otro numero?");

	}while(respuesta == "si");
	if (flag) {
		acumuladornegativo = 0;

		
	}
		
		
		
	document.getElementById("txtIdSuma").value = acumuladorpositivo;
	document.getElementById("txtIdProducto").value = acumuladornegativo;


	
}//FIN DE LA FUNCIÓN
// 1- delcarar variables (respuesta/numero/acumulador postivito y acumulador negativo)
//2- generar un bucle del tipo mientras el usuario quiera (do - while)
// 2.1 -pido numero
// 2.2 -analizar el signo
//2.3 sumo los positivo / mutiplico los negativos
//---------------------------------
// 3-mostramos los resultados 
