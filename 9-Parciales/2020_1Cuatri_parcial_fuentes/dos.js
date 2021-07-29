function mostrar()
{
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


 
}
/*
Estrategia de soluciom
1- declarar de variables
cosas que le pediomos al usuario -> tipo / cantidad / precio / seguir
cosas que no tengo que pedir al usuario -> descuento / importeBruto / importeNeto / acumBolsas /
mayorPrecio / mayoTipo / acumuladorBA / acumuladorBC / acumuladorBCal / maxBolsas / tipoMasBolsas
cantBolsas / 

2- genero un blucke mientras el usuario quiera(do-while)

3- cosas que se repiten por cada producto comprado

3.1 pido y valido el tipo
3.2 pido y valido la cantidad (+0)
3.3 pido y valido precio (+0)

3.4 acumular la cantidad de bolsas 
3.5 acumular el importe bruto

3.6 me fijo el tipo  de producto y acumulo la cantidad de bolsa segun el tipo

3.7 para el primer procuto gaurdo tipo y precio (es mi unico procucto por ende es el mas caro)
para los sifuientes productos voy a comparar sus precio con el producto caro y si es mas caro
actualizo el precio y producto 
-------------------------------------------------------------------------------------------

despues del bulke 
me fijo que descuento corresponde (de acuerdo al acumulador de bolsas)
calculo el descuento

calculo es importe neto 

me fijo cual es mayo acumulador de bolsas para informar el tipo de producto que se compraron
mas bolsas 

mostras los resultados s
-------------------------------------------------------------------------------------------
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
---------------------------------------------------------


*/