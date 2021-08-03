/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
Curso de ingreso UTN FRA*/





function mostrar()
{

	let nombre;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let nombreMasTemp;
	let maxTemp;
	let mayorEdViudos = 0;
	let hombresSoViu = 0;
	let personasTercera = 0;
	let homSolteros = 0;
	let contHSolertos = 0;
	let promEdadS = 0;
	let flag = 0;
	let respuesta;

	do {
		nombre = prompt("ingrese su nombre").toLowerCase();
		
		edad = parseInt(prompt("ingrese su edad"));
		while (isNaN(edad)) {
			edad = parseInt(prompt("Error. ingrese su edad"));
		}

        sexo = prompt("ingrese su sexo").toLowerCase();
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("Error. ingrese su sexo").toLowerCase();
		}

		estado = prompt("ingrese su estado civil (casado/soltero/viudo)").toLowerCase();
		while (estado != "casado" && estado != "soltero" && estado != "viduo") {
			estado = prompt("Error. ingrese su estado civil").toLowerCase();
		}

		temperatura = parseFloat(prompt("ingrese su temperatura"));
		while(!(temperatura >= 35 && temperatura <= 45)) {
			temperatura = parseFloat(prompt("Error. ingrese su temperatura"));
		}

		if (flag || temperatura > maxTemp){
			maxTemp = temperatura
			nombreMasTemp = nombre
			flag = 0
	     }

		 if (estado == "viudo" && edad >= 18) {
            mayorEdViudos++
		 }
		 
		 if (estado != "casdo" && sexo == "m") {
			 hombresSoViu++
		 }

		 if (edad >= 60 && temperatura >= 38) {
			personasTercera++
		 }

		 if (sexo == "m" && estado == "soltero") {
			 homSolteros += edad;
			 contHSolertos++;
		 }

      respuesta = prompt("quiere ingresar otro pasajero (si/no)").toLowerCase();

	} while (respuesta == "si");

	

}
