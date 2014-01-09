/*
	
	*	Modificado por: Magdiel Cordero

	*
*/

/*Arreglo para las provincias*/
var provincia_arr = new Array("San Jose", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limon" );

var canton_arr = new Array();
canton_arr[0]="";
canton_arr[1]="San José|Escazú|Desamparados|Puriscal|Tarrazú|Aserrí|Mora|Goicoechea|Santa Ana|Alajuelita|Vásquez de Coronado|Acosta|Tibas|Moravia|Montes de Oca|Turrubares|Dota|Curridabat|Perez Zeledón|León Cortés";
canton_arr[2]="Alajuela|San Ramón|Grecia|San Mateo|Atenas|Naranjo|Palmares|Poás|Orotina|San Carlos|Zarcero|Valverde Vega|Upala|Los Chiles|Guatuso";
canton_arr[3]="Cartago|Paraíso|La Union|Jímenez|Turrialba|Alvarado|Oreamuno|El Guarco";
canton_arr[4]="Heredia|Barva|Santo Domingo|Santa Bárbara|San Rafael|San Isidro|Belén|Flore|San Pablo|Sarapiquí";
canton_arr[5]="Liberia|Nicoya|Santa Cruz|Bagaces|Carrillo|Cañas|Abangares|Tilarán|Nandayure|La Cruz|Hojancha";
canton_arr[6]="Puntarenas|Esparza|Buenos Aires|Montes de Oro|Osa|Aguirre|Golfito|Coto Brus|Parrita|Corredores|Garabito";
canton_arr[7]="Limon|Pococí|Siquirres|Talamanca|Matina|Guacimo";

function print_provincia(provincia_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(provincia_id);
	option_str.length=0;
	option_str.options[0] = new Option('Selecione la Provincia','');
	option_str.selectedIndex = 0;
	for (var i=0; i<provincia_arr.length; i++) {
		option_str.options[option_str.length] = new Option(provincia_arr[i],provincia_arr[i]);
	}
}

function print_canton(canton_id, canton_index){
	var option_str = document.getElementById(canton_id);
	option_str.length=0;	// editado por Magdiel Cordero// Domingo 17 de marzo 2013 - 23:45
	option_str.options[0] = new Option('Seleccione el Canton','');
	option_str.selectedIndex = 0;
	var cantones_arr = canton_arr[canton_index].split("|");
	for (var i=0; i<cantones_arr.length; i++) {
		option_str.options[option_str.length] = new Option(cantones_arr[i],cantones_arr[i]);
	}
}
