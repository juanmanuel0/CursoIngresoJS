/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let flag = 1;	
	
	
	do{
		numero = parseInt(prompt("ponga un numero"));
		while(isNaN(numero))
        {
            numero = parseInt(prompt("valor invalido, ingrese otro número"));
        }
		if (flag || numero > maximo){
			maximo = numero;}
		if (flag || numero < minimo) {
			minimo = numero;
			flag = 0
		}
			respuesta = prompt("quiere poner otro numero?");

	}while(respuesta == "si");

		
	
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}//FIN DE LA FUNCIÓN