/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sex;                              
	sex = prompt("ingrese f ó m ");/*toLoweCase pasa la letras a minusculas*/
	while (!(sex == "f" || sex == "m" )) {
		sex = prompt("ingrese f ó m ");
		
	}
	document.getElementById("txtIdSexo").value = sex;




	
}//FIN DE LA FUNCIÓN