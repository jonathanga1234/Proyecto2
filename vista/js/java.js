function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));



}






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


function load_data() {
	
	tarea = Persister.loadObj('tareas', "[]");
debugger;

	$('#div1').html('');
	for (var i = 0; i < tarea.length; i++) {
		$('#div1').append('<div id ="p"draggable="true"ondragstart="drag(event)" >' + tarea[i].orden + '</div>');
	}
}


$(document).ready(function() {




$('#cargar').click(function() {

load_data();







////
});

  $( function() {
    $( "#p" ).draggable();
  } );


	});