function mostrar()
{
	let repeticion;
	repeticion = parseInt(prompt("ingrese el número de repeticiones"))

	while (isNaN(repeticion) || repeticion < 0) {
		repeticion = parseInt(prompt("eso no es un numero, ingrese otro"))
		
	}for (let cantidad = 0; cantidad<repeticion; cantidad ++){
		console.log("HOLA UTN FRA")

		
	}
	
		
	
}