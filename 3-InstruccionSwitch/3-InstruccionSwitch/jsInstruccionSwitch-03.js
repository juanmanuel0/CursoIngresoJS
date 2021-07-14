function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert("este mes no tiene mas de 29 dias");
			break;
	
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Nomviembre":
		case "Diciembre":
			alert("este mes tiene 30 o mas dias");
		 	
			break;
	}

	

	
	


}//FIN DE LA FUNCIÓN,