function mostrar()
{
	let estacion;
	let destino;
	
	let presiofinal;
	let precio = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	 
	switch (estacion) {
		 case "Invierno":
			 if(destino == "Bariloche"){
				presiofinal = precio + precio * 0.20;
             }else if (destino == "Mar del plata") {
				 presiofinal = precio - precio * .20;
			 }else if (destino == "Cordoba") {
				presiofinal = precio - precio * .10;
			 }else if (destino == "Cataratas") {
				presiofinal = precio - precio * .10;
			 }

			  break;
		 case "Verano":
			if(destino == "Bariloche"){
                presiofinal = precio - precio * .10;
			}else if (destino == "Mar del plata") {
				presiofinal = precio + precio * .20;
			}else if (destino == "Cordoba") {
				presiofinal = precio + precio * .10;
			}else if (destino == "Cataratas") {
				presiofinal = precio + precio * .10;
			} 

				break;
		case "Otoño":
			if(destino == "Bariloche"){
				presiofinal = precio + precio * .10;
			}else if (destino == "Mar del plata") {
				presiofinal = precio + precio * .10;
			}else if (destino == "Cordoba") {
				presiofinal = precio
			}else if (destino == "Cataratas") {
				presiofinal = precio + precio * .10;
			}
		case "Primavera":
			if(destino == "Bariloche"){
				presiofinal = precio + precio * .10;
		}else if (destino == "Mar del plata") {
			presiofinal = precio + precio * .10;
		}else if (destino == "Cordoba") {
			presiofinal = PRECIO
		}else if (destino == "Cataratas") {
			presiofinal = precio + precio * .10;
		}
			  break;	 
			 
	 
		
	 }
	 alert("el precio final es $ " + presiofinal);



}//FIN DE LA FUNCIÓN