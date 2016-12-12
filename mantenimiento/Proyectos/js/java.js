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
function load_data() {

proyectos = Persister.loadObj('proyectos', "[]");
$('#proyectos').html('');
for (var i = 0; i < proyectos.length; i++) {
$('#proyectos').append('<li>' + proyectos[i].nombre + '</li>');
}
}
$('#obtener').click(function() {
load_data();
debugger;
////
});
});