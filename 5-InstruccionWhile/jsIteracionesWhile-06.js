function mostrar()
{
	let  num;
	let contador = 0;
	let acumulador = 0;
	let suma;
	let prom;

	while ( contador <= 5) {
		num = parseInt(prompt("ingresar numero"));
		contador = contador + 1;
		acumulador = acumulador + num;
		contador++;

	}
	suma = num1 + num2 + num3 + num4 + num5;

	prom = suma/5;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = prom;

	
	
	
}//FIN DE LA FUNCIÓN 