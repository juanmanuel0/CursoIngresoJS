function mostrar()
{

	let divisores = 0;
	let numero;
	numero = parseInt(prompt("ingrese un numero"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("eso no es un numero, ingrese un numero"));
		
	}
	for (let  i= 0; i <= numero ; i ++) {
		if (numero % i){
			continue;
		}
		console.log(i)
		divisores++

		
	}
	console.log("numeros pares ingresados " + divisores )




}//FIN DE LA FUNCIÓN