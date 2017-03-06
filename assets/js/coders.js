var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },
			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },
			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },
			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },
			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },
			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];


var result = "";
coders.forEach(function(e){
	result += "<div class='div-coder'>";
	result += "Nombre: " + e.nombre + "<br>";
	result += "Apellido: " + e.apellido + "<br>";
	result += "Promocion: " + e.promocion + "<br>";
	result += "Estado: " + e.estado + "<br>";
	result += "</div>"

});

document.getElementById("coder").innerHTML = result;

var regresar = document.getElementById("regresar");

regresar.onclick = function(){
	location.href="index.html";
}

var salir = document.getElementById("salir");

salir.innerHTML = "<h1>Hasta luego Coders :)</h1>";