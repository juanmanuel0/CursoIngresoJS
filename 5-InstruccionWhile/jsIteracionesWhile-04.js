/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{ 
	let num;
	num= parseInt(prompt("ingrese un número entre 0 y 9."));
	while (!(num >= 0 || clave <= 9)){
		num= parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	parseInt(document.getElementById("txtIdNumero").value = num);


	
}//FIN DE LA FUNCIÓN