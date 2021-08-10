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
let civil;
let temperatura;
// punto A
let nombreMasTemp;
let personaMasTemp;
let flagTemp = 1;
// punto B
let mayorViudo = 0;
// punto C(
let hombresSolteros = 0;
let hombresViudos = 0;
// punto D
let tercerEdadTemp = 0;
// punto E
let edadHombresSolteros = 0;
let promHombresSolteros;
///////
let respuesta;
do {
	nombre = prompt("ingrese su nombre");
	while (!(isNaN(nombre))) {
		nombre = prompt("Error. ingrese un nombre");
	}
	edad = parseInt(prompt("ingrese su edad"));
	while (isNaN(edad)) {
		edad = parseInt(prompt("Error. ingrese su edad"));
	}
	sexo = prompt("ingrese su sexo (f/m)");
	while (sexo != "f" && sexo != "m"){
		sexo = prompt("Error. ingrese un sexo (f/m)");
	}
	civil = prompt("ingrese su civil (solter/casado/viudo)");
	while (civil != "soltero" && civil != "casado" && civil != "viudo"){
		civil = prompt("Error. ingrese un civil (soltero/casado/viudo)")
	}
	temperatura= parseInt(prompt("ingrese su temperatura"));
	while(!(temperatura >= 34 && temperatura <= 45)) {
		temperatura= parseInt(prompt("Error. ingrese su temperatura"));
	}
	if (flagTemp || temperatura > personaMasTemp) {
		personaMasTemp = temperatura;
		nombreMasTemp = nombre;
		flagTemp = 0;
	}
	if (edad > 18 && civil == "viudo") {
		mayorViudo++;
	}
	if(sexo == "m" && civil !="casado"){
		hombresSolteros++;
		edadHombresSolteros += edad
		hombresViudos++;
	}
	if(edad >= 60 && temperatura >= 38){
		tercerEdadTemp++;
	}
	respuesta = prompt("quiere ingresar otro pasajero (si/no)")
} while (respuesta == "si");
promHombresSolteros = edadHombresSolteros / hombresSolteros;	

document.write("a- el nombre de la persona con mas temperatura es " + nombreMasTemp + " su temperatura es "
+ personaMasTemp + "<br>");
document.write("b- los mayores de edad viudos son " + mayorViudo + "<br>");
document.write("c- los hombres solteros son " + hombresSolteros + " y los viudos " + hombresViudos + "<br>");
document.write("d- las personas con fiebre de la tercera edad son " + tercerEdadTemp + "<br>");
document.write("e- el promedio de edad de los hombres solteros es " + promHombresSolteros + "<br>");
}