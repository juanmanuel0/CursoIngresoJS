function mostrar()
{
	let destinos;
	let estacion;
	let si;
	let no;

	
	 
    destinos = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacino").value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("puto")
			}else{no;}
			break;
	    case "Verano":
			if (destino == "Mar del plata" || "Cataras") {
				si;
			}else{ no; }
			break;
		case "Otoño":
			if (destino == "Bariloche") {
				
			}
			break;
		case "Primavera":
			if (destino == "Bariloche") {
				no;
			}else{si;}
			break;	
	}
	if (si) {
		alert("se viaja");
	} else if (no) {
		alert("no se viaja");
	}{
		
	}
	
	

}//FIN DE LA FUNCIÓN