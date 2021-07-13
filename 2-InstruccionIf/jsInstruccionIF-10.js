function mostrar()
{
	let nota;
	let max = 10;
	let min = 1;
	

	nota = Math.floor(Math.random() * (max - min + 1) + min);
	
	
	if (nota >= 9 ) { alert( nota + " EXELENTE");
		
	} else { if (nota >=4 ) {alert(nota + " APROBO");
		
	} else { alert(nota + " vamos, la proxima se puede ");
		
	}
		
	} 
	

}//FIN DE LA FUNCIÓN