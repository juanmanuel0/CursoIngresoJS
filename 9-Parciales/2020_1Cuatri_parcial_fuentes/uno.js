
function mostrar()
{
	let tipo;
	let cantidad;
	let precio;
	let marca;
	let fabricante;
	let preciominA;
	let contABarato;
	let fabABarato;
	let flagA = 1;
	let contadorB = 0;
	let contadorA = 0;
	let contadorJ = 0;
	let acumuladorB = 0;
	let acumuladorA = 0;
	let acumuladorJ = 0;
	let promedio;
	let maxUnidades;

	for (let i = 0; i < 5; i++) {
	    tipo = prompt("Ingrese tipo (barbijo/alcohol/jabon) ").toLowerCase(); 
	 	while (tipo != "jabon" && tipo != "barbijo" && tipo != "alcohol") {
			tipo = prompt("Tipo invalido. Reingrese tipo (barbijo/alcohol/jabon) ").toLoleLowerCase(); 
		}
		precio = parseInt(prompt("ingrese un precio (100-300)"));
		while (!(precio >=100 && precio <= 300)) {
			precio = parseInt(prompt("precio invalido. reingrese un precio (100-300)"));
		}
		cantidad = parseInt(prompt("ingrese una cantidad (max 1000)"));
		while (!(precio > 0 && precio <= 1000)) {
			precio = parseInt(prompt("cantidad invalida. reingrese una cantidad  (max 1000)"));
		}
	    marca = prompt("ingrese una marca");
	    while (marca == " ") {
		    marca = prompt("Error. ingrese una marca")
		}
	    fabricante = prompt("ingrese un fabricante");
	    while (fabricante == " ") {
		    fabricante = prompt("Error. ingrese un fabricante")
			}	
		if (tipo == "barbijo") {
			acumuladorB = acumuladorB + cantidad;
			contadorB++;
			
			alert("Barbijo")
		} else if (tipo == "alcohol") {
			acumuladorA = acumuladorA + cantidad;
			contadorA++
			if (flagA || precio < preciominA) {
				preciominA = precio;
				fabABarato = fabricante;
				contABarato = cantidad;
				flagA = 0;
			}
			
		} else if(tipo == "jabon"){
			acumuladorJ = acumuladorJ + cantidad;
			contadorJ++
			} 
			
			
	}//fin del for
	if (acumuladorJ > acumuladorA && acumuladorJ > acumuladorB) {
		maxUnidades = "jabon";
		premedio = acumuladorJ / contadorJ;
	}else if (acumuladorA >= acumuladorJ && acumuladorA > acumuladorB) {
		maxUnidades = "Alcohol";
		promedio = acumuladorA / contadorA;
	}else{
		maxUnidades = "Barbijo";
		promedio = acumuladorB / contadorB;
	}
	if (flagA) {
		document.write("A) No se ingresaron alcoholes")
	} else {
		
	}


	document.write("a) precio alcohol barato " + preciominA + " fab " + fabABarato + " cant " + contABarato + "<br>")
	document.write("b) tipo con mas unidad  " + maxUnidades + " promedio " + promedio + "<br>")
	document.write("c) hay " + acumuladorJ + " de jabon" + "<br>")


	
}
/*
1 - declarar variables (tipo/ cantidad / precio / marca / fabricante ) esto se lo pediomos al usuario
a) let preciominA / contABarato / fabABarato / flagA
b) contadorB / contadorA / contadorJ / maxUnidades / acumB / acumaA / acumJ / promedio 
c) acumJ (ya esta declarodo en el b)
-----------------------------------------------------------
2- generar un bluke que se repita 5 veces (for) porque se las veces que se tiene que repetir
2.1- cosas que se tiene que hacer 5 veces (van dentro del for)
2.1.1- pido tipo y valido
2.1.2- pido precio y valido
2.1.3- pido cantidad y valido
2.1.4- pido marca
2.1.5- pido fabricante

a) me fijo si es producto es de tipo alcohol y si es asi la primera vez que ingresa alcohol guardo
el precio en precio barato y las siguiete veces que ingrese un alcohol lo comparo con el precio
del alcohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricamte)

b)me fijo de que tipo es el producto y actualizo acumulador y contador del producto

c)si es de tipo jabon lo acumulo(ya lo hize en el punto b)
--------------------------------------------------------
3.1-cosas que hago una sola vez despues del for
3.1.1 -para el punto b me tengoq que fijar cual es el mayor acumulador y sacar el promedio para ese tipo
3.2-muestro los resultados 
----------------------------------
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

---------------------
























*/