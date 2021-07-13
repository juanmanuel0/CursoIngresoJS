function mostrar()
{
	let edad;
	let civil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	civil = parseInt(document.getElementById("estadoCivil").value);
	
	if (edad >= 18 && civil == "soltero"){
		alert("es soltero y no es")
	}
	


}//FIN DE LA FUNCIÓN