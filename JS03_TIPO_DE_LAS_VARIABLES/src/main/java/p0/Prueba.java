package p0;


public class Prueba {

	private static void metodo() {
		
		int x = 0;
		
		int y = 0;
		
		
		if( (++x < y++) &  ( (y=4) > x) ) {
			
		}
	
		System.out.println(y);
		
		
		/*
		int dado;
		
		final int PROHIBIDO = 6;
		
		while ( (dado = (int)(Math.random() * 6 )) != PROHIBIDO) {
			
		}
		*/		
		
	}
	
	
	
	
	public static void main(String[] args) {
		
		metodo();
		
		
		/*
		int x = 10, y = 5;
		
		final int z = x++ + ++y;
		
		System.out.println("z = " + z);
		*/
		
		
		
	}
	
}
