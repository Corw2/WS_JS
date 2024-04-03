// FUNCIONES EN FICHERO EXTERNO JAVASCRIPT

// alert("FICHERO EXTERNO JAVASCRIPT");



function parImpar() {
	
	const DEVOLUCIONES = ["PAR", "IMPAR"];
		
	return DEVOLUCIONES[ parseInt(Math.random() * DEVOLUCIONES.length) ];
	
	
	/*
	
	const RANGO = 2;
	
	var aleatorio = parseInt(Math.random() * RANGO);	// [0,1]
	
	if(0 === aleatorio) {
		return "PAR";
	}
		
	return "IMPAR";
	
	*/
	
}



function obtenerBebida() {
	
	const BEBIDAS = ["LIMON", "TE", "COLA", "AGUA", "GASOLINA", "VINO", "CASERA"];
		
	return BEBIDAS[ parseInt(Math.random() * BEBIDAS.length) ];
	
}



const elMayor = function (x, y) {
	
	/*
	if(x > y) {
		return x;
	}
	
	return y;
	*/
	
	return ( (x>y) ? x : y );
	
}



const factorial = (numero) => {
	
	if(numero <= 1) {
		alert("EL FACTORIAL DE " + numero + " ES 1");
		return 1;
	}
	
	var indice = numero;
	var resultado = 1;
	
	// for(INICIALIZACIÓN; COMPROBACIÓN; OPERACIONES SEPARADAS POR ,) { código }
	
	
	for( /*NADA*/ ; indice > 1; indice--) {
		resultado *= indice;
	}
	
	alert("EL FACTORIAL DE " + numero + " ES " + resultado);
	return resultado;

}