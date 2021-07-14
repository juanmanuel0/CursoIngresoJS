function mostrar()
{
	let temperatura;
	
	temperatura = document.getElementById("txtIdDestino").value;

	switch (temperatura) {
		case "Bariloche":
		case "Ushuaia":
			alert("hace frio");
			 
			break;
	
		case "Mar del plata":
		case "Cataratas":
			alert(" hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN