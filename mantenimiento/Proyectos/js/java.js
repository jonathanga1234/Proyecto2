var proyectos=[];

var Persister = {
	save: function (key, value) {
		localStorage.setItem(key, value);
	},
	load: function(key, default_value) {
		return localStorage.getItem(key) || default_value;
	},


	
	saveObj: function(key, value) {
		var json_string = JSON.stringify(value);
		this.save(key, json_string);

	},



	loadObj: function(key, default_value) {
		var json_string = this.load(key, default_value);
		return JSON.parse(json_string);
	}
};


















$(document).ready(function() {
$('#campo3').click(function() {




var animal = $('#animal').val();
var nombre=$('#nombre').val();
var icono=$('#icono').val();
var fechainicio=$('#fechainicio').val();
var numeropersonas=$('#numeropersonas').val();




proyectos.push({


nombre : nombre,
icono : icono,
fechadeinicio :fechainicio,
númerodepersonas:numeropersonas



})






		Persister.saveObj('proyectos', proyectos);



		//$('#animales').append('<li>' + animal + '</li>');






proyectos.characters = []



//proyectos.characters.push(proyectos);
//localStorage.setItem("proyecto",proyectos);





});
$('#obtener').click(function() {

var datos =[];


var proyectos = localStorage.getItem("proyecto");
datos =JSON.parse(proyectos);

for (var i = 0; i < datos.length; i++) {
	datos[i];

	console.log(datos[i]);
}
debugger;


////
});
});