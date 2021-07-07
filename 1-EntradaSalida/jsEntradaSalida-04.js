/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
//reservo es pasio en la memoria para juardar el nombre del usuario 
	let nombre; 

	//guardo en la variable nombre el texto que escribio el usuario dentro de la ventana prompt
	nombre = prompt("ingresar nombre");

// copio el texto que tengo guardado en la varible nombre dentro de la caja de texto embebida dentro de la pajina htlm
	document.getElementById("txtIdNombre").value = nombre;







}

