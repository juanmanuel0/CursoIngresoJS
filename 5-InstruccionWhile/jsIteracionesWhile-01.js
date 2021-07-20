/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let control = 1;
	let mensaje = " ";
	while (control < 11) {
		mensaje = mensaje + control + " ";
		control ++;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN