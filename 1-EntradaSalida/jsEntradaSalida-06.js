/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1; 
	let numero2;
    let resultado;
//perseInt transforma los numeros de texto a numeros enteros 
	 numero1 = parseInt(document.getElementById("txtIdNumeroUno").value)
	 numero2 = parseInt(document.getElementById("txtIdNumeroDos").value)
	
	 
	 resultado = numero1 + numero2

	alert("la suma es " + resultado)

	

}

