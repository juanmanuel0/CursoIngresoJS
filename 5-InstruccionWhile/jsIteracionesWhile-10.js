/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let sumnegativo = 0;
	let sumpositivo = 0;
	let contadorneg = 0;
	let contaodrpos = 0;
	let contador0 = 0;
	let contadorpar = 0;
	let prompos = 0;
	let promneg = 0;
	let diferencia = 0;
	let respuesta;
	let flagp = 1;
	let flagn = 1;
	
	do{
		numero = parseInt(prompt("ponga un numero"));
		while(isNaN(numero))
		numero =  parseInt(prompt("ponga un numero valido"));
		if (numero > 0) {
			sumpositivo += numero;
			contaodrpos++;
		} else if (numero < 0) {
			sumnegativo += numero;
			contadorneg;
		} else { contador0++;
			
		}
		if (numero % 2 == 0) {
			contadorpar++;
			
		}
			
		respuesta = prompt("quiere otro numero");
	}while(respuesta == "si")
	if (flagp) {
		prompos = sumpositivo / contaodrpos;
	}
	if (flagn) {
		promneg = sumnegativo / contadorneg;
	}	
		
		diferencia = contaodrpos - contadorneg;
	
		 alert ("1 summa de negativos " + sumnegativo +
	           "\n2 suma de positivos " + sumpositivo +
		       "\n3 cantidad de positivos " + contaodrpos +
		       "\n4 cantidad de negativos " + contadorneg +
		       "\n5 cantidad de ceros " + contador0 +
		       "\n6 cantidad de pares " + contadorpar +
		       "\n7 promedio de positiovs  " + prompos +
	           "\n8 promedio de negativos " + promneg +
		       "\n9 diferencia de negativos y positivos " + diferencia)


	
	
}
//FIN DE LA FUNCIÓN
//estrategia
// 1.declarar variables(numero, acumulador negtavitos, acumulador positivos, contador positivos, contaodr negativos
//, contador de 0, contador ´pares, promedio positivos, promedio negativos, respuesta)
//2. generar el bukle
// 2.1 pedir el numero
//2.2 validar el numero
//2.3 indentificar en signo del numero(positivo/negativo/0)
// 2.3.1 positivo (acumular y lo cuento)
//2.3.2 negativo (acumular y lo cuento)
//2.3.3. cero(lo cuento)
//3. me fijo si el numero es par
//3.1 si es par lo cuento
// despues del bukle
// 4. calcular promedios positivos
//4.1 calcular promedios negativos
//4.2 calculo la diferencia entre n y p
//5 muesto el resultado