/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 

{  
    let marca;
    let cantidad;
    let precio = 35;
    let preciofinal;
    let iibb;
    let importefinal;

    cantidad =  parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
   
       
    switch (cantidad) {
       case 5:
    if (marca == "Argentinaluz") {
        preciofinal = cantidad * precio * 0.40;
        }else {preciofinal = cantidad * precio * 0.30}
              break; 
        case 4:
        if (marca == "ArgentinaLuz" || marca =="FelipeLamparas") {
            preciofinal = cantidad * precio * 0.25;
            
        } else { preciofinal = cantidad * precio * 0.20;}
             break;
        case 3:
        if (marca =="ArgentinaLuz"){preciofinal = cantidad * precio  * 0.15;
        }else if (marca =="FelipeLamparas") {preciofinal = cantidad * precio  * 0.10;}
         else {preciofinal = cantidad * precio  * 0.5}
             break;  
        case 1:
            preciofinal = precio;
            break;
        case 2:
            preciofinal = precio * 2;
             break;
        default:   preciofinal = cantidad * precio  * 0.50;
             break; 
         }
        
   document.getElementById("txtIdprecioDescuento").value = preciofinal;

   importefinal = preciofinal

    if (preciofinal > 120) {
        iibb = importefinal * 0.10
        importefinal = importefinal + iibb;
        alert("Usted pago $ " + importefinal + " siendo el IIBB " + iibb)
    }else{alert("Usted pago $ " + importefinal)}

  

    
}

   
