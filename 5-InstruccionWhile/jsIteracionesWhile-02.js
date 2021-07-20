/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let control = 1;
	let mensaje = " ";
	while (control < 11) {
		mensaje = " " + control + mensaje;
		control ++;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN