function mostrar()
{
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad <= 17) {
		alert("es adolecente");

		
	}else{
		if (edad < 13) {
			alert("es niño");
			
		} else {
			if ( edad <= 65) {
				alert("es adulto");
				
			} else {
				alert("adulto mayor");
				
			}

			
			
		}
	}



 

}//FIN DE LA FUNCIÓN