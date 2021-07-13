function mostrar()
{
	let edad;
	let civil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	civil = parseInt(document.getElementById("estadoCivil").value);
	
	if (edad < 18 && civil != "soltero"){
		alert("es muy pequeño para no ser soltero")
	}
	



}//FIN DE LA FUNCIÓN