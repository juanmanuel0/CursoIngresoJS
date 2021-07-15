function mostrar()
{
  let estacion;
  let destino;
  let si = "Se viaja"
  let no = "No se viaja"  
  let viaje;

  estacion = document.getElementById("txtIdEstacion").value;
  destino = document.getElementById("txtIdDestino").value;

  switch (estacion) {
	  case "Invierno":
		  if (destino == "Bariloche") {
			viaje =  si;
		  }else{viaje = no;}
		  break;
	  case "Verano":
		  if (destino == "Mar del plata" || "Cataras") {
			viaje = si;
		  }else{ viaje = no; }
		  break;
	  case "Otoño":
		viaje = si;
			break;
	  case "Primavera":
		  if (destino == "Bariloche") {
			viaje = no;
		  }else{ viaje =si;}
		  break;	
  }
  alert(viaje);
		
	

}//FIN DE LA FUNCIÓN