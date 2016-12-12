var persona=[];

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




var nombre = $('#nombre').val();
var avatar=$('#avatar').val();






persona.push({


nombre : nombre,
avatar : avatar



})






		Persister.saveObj('personas', persona);



		//$('#animales').append('<li>' + animal + '</li>');









//proyectos.characters.push(proyectos);
//localStorage.setItem("proyecto",proyectos);





});




function load_data() {
	
	persona = Persister.loadObj('personas', "[]");


	$('#persona').html('');
	for (var i = 0; i < persona.length; i++) {
		$('#persona').append('<li>' + persona[i].nombre + '</li>');
	}
}





$('#obtener').click(function() {

load_data();






////
});
});