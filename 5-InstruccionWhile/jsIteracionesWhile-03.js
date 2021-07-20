/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	clave= prompt("ingrese el número clave.");
	while (clave !=  "utn750") {
		clave= prompt("la clave es incorrecta intente de nuevo");
		
	}
	alert("Clave correcta");
}//FIN DE LA FUNCIÓN
