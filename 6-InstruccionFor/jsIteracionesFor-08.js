function mostrar()
{
	let primos = 0;
	let numero;
	numero = parseInt(prompt("ingrese un numero"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("eso no es un numero, ingrese un numero"));
		
	}
	for (let  i= 1; i <= numero ; i ++) {
		if (numero % i == 0){
			primos++;
		}
			

		
	}
	if (primos == 2) {
		console.log(numero + " es primo");
		
	}else{console.log(numero + " no es primo");}
 

	
	

		
	





}//FIN DE LA FUNCIÓN