function mostrar()
{
	let pares = 0;
	let numero;
	numero = parseInt(prompt("ingrese un numero"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("eso no es un numero, ingrese un numero"));
		
	}
	for (let  i= 0; i <= numero ; i ++) {
		if (i % 2){
			continue;
		}
		console.log(i)
		pares++

		
	}
	console.log("numeros pares ingresados " + pares )



}//FIN DE LA FUNCIÓN