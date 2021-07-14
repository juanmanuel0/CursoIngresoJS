function mostrar()
{
	let estacion;
	let destino;
	let amuento = 0;
	let descuento = 0;
	let presiofinal;
	const PRECIO = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	 
	switch (estacion) {
		 case "Invierno":
			 if(destino == "Bariloche"){
				amuento = 20;


			 }else if (destino == "Mar del plata") {
				 descuento = 20;
			 }else if (destino == "Cordoba") {
				 descuento = 10;
			 }else if (destino == "Cataratas") {
				 descuento = 10;
			 }

			  break;
		 case "Verano":
			if(destino == "Bariloche"){
                descuento = 20;
			}else if (destino == "Mar del plata") {
				amuento = 20;
			}else if (destino == "Cordoba") {
				aumento = 10;
			}else if (destino == "Cataratas") {
				aumento = 10;
			} 

				break;
		case "Otoño":
			if(destino == "Bariloche"){
                    amuento = 10;
			}else if (destino == "Mar del plata") {
				amuento = 10;
			}else if (destino == "Cordoba") {
				presiofinal = PRECIO
			}else if (destino == "Cataratas") {
				aumento = 10;
			}
		case "Primavera":
			if(destino == "Bariloche"){
				amuento = 10;
		}else if (destino == "Mar del plata") {
			amuento = 10;
		}else if (destino == "Cordoba") {
			presiofinal = PRECIO
		}else if (destino == "Cataratas") {
			aumento = 10;
		}
			  break;	 
			 
	 
		
	 }
	 if (amuento != 0) {
		 presiofinal = PRECIO + PRECIO * amuento /100;
	 }else if (descuento != 0) {
		 presiofinal = PRECIO - PRECIO * descuento /100;
	 
	 }
	 alert("presio fianl $ " + presiofinal);
	



}//FIN DE LA FUNCIÓN