/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
let Fahrenheit;
    let Centigrados;
    
function FahrenheitCentigrados () 
{
	

    Fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    Centigrados = ((Fahrenheit + 32) * 5 % 9)

    alert(Fahrenheit + " Fahrenheit son " + Centigrados + " Centigrados");


}

function CentigradosFahrenheit () 
{
    
    Centigrados = parseInt(document.getElementById("txtIdTemperatura").value);

    Fahrenheit = Centigrados * 1.8 + 32;

    alert(Centigrados + " Centigrados son " + Fahrenheit + " Fahrenheit" );

	
}
