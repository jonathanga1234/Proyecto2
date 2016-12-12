var tarea=[];

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




var descripcion = $('#descripcion').val();

var orden=$('#orden').val();





tarea.push({


descripcion : descripcion,
orden : orden




})






		Persister.saveObj('tareas', tarea);

debugger

	





});




function load_data() {
	
	tarea = Persister.loadObj('tareas', "[]");
debugger;

	$('#tareas').html('');
	for (var i = 0; i < tarea.length; i++) {
		$('#tareas').append('<li>' + tarea[i].orden + '</li>');
	}
}





$('#obtener').click(function() {

load_data();







////
});
});