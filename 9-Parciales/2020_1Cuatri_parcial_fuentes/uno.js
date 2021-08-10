/*
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

 */
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	// punto A
	let flag = 1;
	let alcoholBarato;
	let cantidadBarato;
	let fabricaBarata;
	// punto B
	let contadorBarbijos = 0;
	let contadorAlcohol = 0;
	let tipoMasUndidad = 0;
	let promedioCompra;
	// punto C
	let contadorJabones = 0;

	for (let i = 0; i < 5; i++) {
	    tipo = prompt("Ingrese tipo (barbijo/alcohol/jabon) "); 
	 	while (tipo != "jabon" && tipo != "barbijo" && tipo != "alcohol") {
			tipo = prompt("Tipo invalido. Reingrese tipo (barbijo/alcohol/jabon) "); 
		}
		precio = parseInt(prompt("ingrese un precio (100-300)"));
		while (!(precio >=100 && precio <= 300)) {
			precio = parseInt(prompt("precio invalido. reingrese un precio (100-300)"));
		}
		cantidad = parseInt(prompt("ingrese una cantidad (max 1000)"));
		while (!(precio > 0 && precio <= 1000)) {
			cantidad = parseInt(prompt("cantidad invalida. reingrese una cantidad  (max 1000)"));
		}
	    marca = prompt("ingrese una marca");
	    while (!(isNaN(marca))) {
		    marca = prompt("Error. ingrese una marca")
		}
	    fabricante = prompt("ingrese un fabricante");
	    while (!(isNaN(fabricante))) {
		    fabricante = prompt("Error. ingrese un fabricante")
			}
		if (tipo = "barbijos") {
			contadorBarbijos += cantidad;
		}else if (tipo = "alcohol") {
			contadorAlcohol += cantidad;
		} else {
			contadorJabones += cantidad;
		} 
		if (contadorAlcohol != 0)
		   if(flag || precio < alcoholBarato) {
			alcoholBarato = precio;
			cantidadBarato = cantidad;
			fabricaBarata = fabricante;
		}

	}		
	if (contadorJabones > contadorAlcohol && contadorJabones > contadorBarbijos) {
		tipoMasUndidad = "jabon";
	}else if (contadorAlcohol >= contadorJabones && contadorAlcohol > contadorBarbijos) {
		tipoMasUndidad = "Alcohol";
	}else{
		tipoMasUndidad = "Barbijo";
	}

	document.write("a- alcohol mas barato " + alcoholBarato + " cantidad " + cantidadBarato +
	" fabrica " + fabricaBarata + "<br>");
	document.write("b- del tipo que mas hay es " + tipoMasUndidad + "<br>");
	document.write("c- cantidad de jabones es " + contadorJabones + "<br>");




	
}
/*
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
	    tipo = prompt("Ingrese tipo (barbijo/alcohol/jabon) "); 
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
	document.write("c) hay " + acumuladorJ + " de jabon" + "<br>")*/
