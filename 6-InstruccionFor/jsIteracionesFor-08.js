function mostrar()
{
	
	let primos = 0;
	let numero;
	numero = parseInt(prompt("ingrese un numero"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("eso no es un numero, ingrese un numero"));
		
	}
	for (let  i= 1; i <= numero ; i ++) {
		if (numero % i){
			continue;
		}
		console.log(i)
		primos++

		
	}if (primos == 0) {
		console.log("es primo")
		
	} else {
		console.log("no es primo")
		
	}
	

		
	





}//FIN DE LA FUNCIÓN