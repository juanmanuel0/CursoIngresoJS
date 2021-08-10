/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro */

function mostrar()
{
 let tipo;
 let cantidad;
 let precio;
 // punto A
 let importeTotal = 0;
 // punto B
 let cantidadBolsas = 0;
 let importeTotalDescuento = 0;
 // punto C
 let maxCantidadBolsas;
 let acumArena = 0;
 let acumCal = 0;
 let acumCemento = 0;
 // punto D
 let flag = 1;
 let MasCaro;
 let tipoCaro;
////////////////
let respuesta;
 do {
  tipo = prompt("ingrese un tipo de bolsa (arena/cal/cemento)");
  while (!(isNaN(tipo))) {
    tipo = prompt("Error. ingrese un tipo de bolsa (arena/cal/cemento)");
  }
  cantidad = parseInt(prompt("ingrese la cantidad de  bolsas"));
  while (isNaN(cantidad)) {
    cantidad = parseInt(prompt("Error. ingrese la cantidad de bolsas"));
  }
  precio = parseInt(prompt("ingrese un precio"));
  while (!(precio > 0)) {
    precio = parseInt(prompt("Error. ingrese un precio"));
  }
  importeTotal += precio;
  cantidadBolsas += cantidad

  if (tipo == "arena") {
    acumArena += cantidad;
  }else if (tipo == "cal") {
    acumCal += cantidad;
  }else{
    acumCemento += cantidad;
  }
  if (flag || precio > MasCaro) {
   MasCaro = precio;
   tipoCaro = tipo;
  }
 
  respuesta = prompt("quiere ingresar otra compra (si/no)");
 } while (respuesta == "si");
 if (cantidadBolsas > 30) {
   importeTotalDescuento = importeTotal * 0.75;
 }else if (cantidadBolsas > 10) {
  importeTotalDescuento = importeTotal * 0.85;
 }

if (acumArena > acumCal && acumArena > acumCemento) {
  maxCantidadBolsas = "arena";
}else if (acumCal >= acumArena && acumCal > acumCemento) {
  maxCantidadBolsas = "cal";
}else{
  maxCantidadBolsas = "cemento";
}

document.write("a- importe total sin descuento " + importeTotal + "<br>");
document.write("b- importe total con descuento " + importeTotalDescuento + "<br>");
document.write("c- mayor cantidad de bolsas " + maxCantidadBolsas + "<br>");
document.write("d- la bolsa mas cara es " + tipoCaro + " precio " + MasCaro + "<br>");
/*a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro */




 
}
/*
 let tipo;
  let cantidad;
  let precio;
  let seguir;
  let descuento = 0;
  let importeBruto = 0;
  let importe;
  let importeNeto;
  let acumBolsas = 0;
  let mayorPrecio;
  let mayortipo;
  let flag = 1;
  let acumuladorBA = 0;
  let acumuladorBC = 0;
  let acumuladorBCal = 0;
  let tipoMaxBolsas;
  let cantBolsas;

  do {
    tipo = prompt("ingrese un material (arena/cemento/cal)").toLowerCase();
    while (tipo != "arena" && tipo != "cemento" && tipo != "cal") {
      tipo = prompt("Error ingrese un material (arena/cemento/cal)").toLowerCase();
    }
    cantidad = parseInt(prompt("ingrese cantidad"))
    while (isNaN(cantidad && cantidad > 0)) {
      cantidad = parseInt(prompt("canitdad invalida. ingrese cantidad"))  
    }
    precio = parseInt(prompt("ingrese pecio"))
    while (isNaN(precio && precio > 0)) {
      precio = parseInt(prompt("canitdad invalida. ingrese precio"))  
    }

    acumBolsas = acumBolsas + cantidad;

    importe = precio * cantidad;

    importeBruto += importe
    if (tipo == "arena") {
      acumuladorBA++;
    } else if (tipo == "cal") {
      acumuladorBCal++;
    }else if (tipo == "cemento"){
      acumuladorBC++;
    }
    if (flag || precio > mayorPrecio) {
      mayorPrecio = precio;
      mayortipo = tipo;
      flag = 0;}
    
  
  
    seguir = prompt("quiere seguir (si/no)");
  } while (seguir == "si");

  if (acumBolsas > 30){
    descuento = importeBruto * .25;
  }else if (acumBolsas > 10){
    descuento = importeBruto * .15;
  }
  
  importeNeto = importeBruto - descuento;

  if (acumladorBC > acumuladorBA && acumuladorBC > acumuladorBCal) {
    tipoMaxBolsas = "Cenmento";
    cantBolsas = acumladorBC
  }else if (acumuladorBA >= acumuladorBC && acumuladorBA > acumuladorBCal){
    tipoMaxBolsas = "Arena"
    cantBolsas = acumuladorBA

  }else{
    tipoMaxBolsas = "Cal";
    cantBolsas = acumuladorBCal}

    document.write("a) el importe total a pagar es " + importeBruto + "<br>");
    if(descuento > 0){
      document.write("b) el importe total a pagar con descuento " + importeNeto + "<br>");
    }
    document.write("c) tipo con mas cantidad de bolsas " + tipoMaxBolsas + " con " +
    cantBolsas + " bolsas<br>")
    document.write("d) el tipo mas caro " + mayortipo + " precio " + mayorPrecio + "<br>" );


*/