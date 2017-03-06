/*Convertimos la primera letra en mayuscula para el nombre del Usuario*/
function primerMayuscula(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/*Prompt para ingresar el nobre de la Coder*/
var usuario = prompt("Coder: Escribir su nombre.");
/*Mostramos el nombre de la coder*/
document.getElementById("usuarioCoder").innerHTML = primerMayuscula(usuario);

/*Botones*/
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

/*Obtenemos el id del contenido de cada boton*/
var sprint1 = document.getElementById("sprint1");
var sprint2 = document.getElementById("sprint2");
var sprint3 = document.getElementById("sprint3");

btn1.onclick = function(){
	sprint1.style.display = "block";
	sprint2.style.display = "none";
	sprint3.style.display = "none";
}

btn2.onclick = function(){
	sprint1.style.display = "none";
	sprint2.style.display = "block";
	sprint3.style.display = "none";
}

btn3.onclick = function(){
	sprint1.style.display = "none";
	sprint2.style.display = "none";
	sprint3.style.display = "block";
}

/*Llenamos los Sprint*/

function Sprint(id, nomSprint, titulo){
	this.id = id;
	this.nomSprint = nomSprint;
	this.titulo = titulo;
}

function Temas(idSprint, temas){
	this.idSprint = idSprint;
	this.temas = temas;
}

function Pregunta(idPreg, idSprint, preguntas){
	this.idPreg = idPreg;
	this.idSprint = idSprint;
	this.preguntas = preguntas;
}

function Alternativa(idAlternativa, idPreg, alternativa, rpta){
	this.idAlternativa = idAlternativa;
	this.idPreg = idPreg;
	this.alternativa = alternativa;
	this.rpta = rpta;
}
/*instanciamos para Sprint*/
var sprintLlenar1 = new Sprint(1, "Sprint 1", "Introducción a JavaScript");
var sprintLlenar2 = new Sprint(2, "Sprint 2", "Introducción al desarrollo web y construcción de páginas web");
var sprintLlenar3 = new Sprint(3, "Sprint 3", "");

/*para temas vamos a instancias*/
var sprint1Tema1 = new Temas(1,"Fundamentos de Programación");
var sprint1Tema2 = new Temas(1,"Funciones");
var sprint1Tema3 = new Temas(1,"Arreglos");
var sprint1Tema4 = new Temas(1,"Objetos");

var sprint2Tema1 = new Temas(2,"Ciclo de vida del desarrollo web y arquitectura básica cliente/servidor / Configuración del ambiente de trabajo e introducción a git");
var sprint2Tema2 = new Temas(2,"HTML y JavaScript en el navegador");
var sprint2Tema3 = new Temas(2,"Manejo de comandos básicos de git en la terminal");
var sprint2Tema4 = new Temas(2,"Pruebas Unitarias");
var sprint2Tema5 = new Temas(2,"Git / Resolución de conflictos / Branching model");
var sprint2Tema6 = new Temas(2,"DOM");

/*Instanciamos Preguntas*/
var sprint1Pregunta1 = new Pregunta(1,1,"Existen dos tipos de funciones");
var sprint1Pregunta2 = new Pregunta(2,1,"Elije una propiedad de los arreglos");
var sprint1Pregunta3 = new Pregunta(3,1,"Un Objeto tiene ...... y ........");

var sprint2Pregunta1 = new Pregunta(4,2,"¿Cuál es el comando para iniciar un repositorio desde la consola?");
var sprint2Pregunta2 = new Pregunta(5,2,"¿Cuál es la finalidad de hacer una prueba unitaria?");
var sprint2Pregunta3 = new Pregunta(6,2,"¿Qué significa DOM?");

/*Instanciamos Alternativa*/
var sprint1Preg1Alter1 = new Alternativa(1,1,"Expresadas y declaradas",true);
var sprint1Preg1Alter2 = new Alternativa(2,1,"Explicitas y declaradas",false);
var sprint1Preg1Alter3 = new Alternativa(3,1,"Expresadas y derivadas",false);

var sprint1Preg2Alter1 = new Alternativa(4,2,"clear",false);
var sprint1Preg2Alter2 = new Alternativa(5,2,"pop",true);
var sprint1Preg2Alter3 = new Alternativa(6,2,"add",false);

var sprint1Preg3Alter1 = new Alternativa(7,3,"numeros y letras",false);
var sprint1Preg3Alter2 = new Alternativa(8,3,"partes y validaciones",false);
var sprint1Preg3Alter3 = new Alternativa(9,3,"propiedades y valores",true);

var sprint2Preg1Alter1 = new Alternativa(10,4,"git init .",false);
var sprint2Preg1Alter2 = new Alternativa(11,4,"git init",true);
var sprint2Preg1Alter3 = new Alternativa(12,4,"git init add",false);

var sprint2Preg2Alter1 = new Alternativa(13,5,"Comprobar que el código funciona correctamente",true);
var sprint2Preg2Alter2 = new Alternativa(14,5,"Darle valores a los parametros de dichas funciones",false);
var sprint2Preg2Alter3 = new Alternativa(15,5,"No tiene ningun fin",false);

var sprint2Preg3Alter1 = new Alternativa(16,6,"Dual Object Model",false);
var sprint2Preg3Alter2 = new Alternativa(17,6,"Document Object Model",true);
var sprint2Preg3Alter3 = new Alternativa(18,6,"Document Obsolet Model",false);


/*creamos un array donde vamos a guardar los Sprints*/
var arrSprints = [];
arrSprints.push(sprintLlenar1,sprintLlenar2,sprintLlenar3);

/*creamos un array para los temas y guardarlos ahi*/
var arrTemas = [];
arrTemas.push(sprint1Tema1,sprint1Tema2,sprint1Tema3,sprint1Tema4,sprint2Tema1,sprint2Tema2,sprint2Tema3,sprint2Tema4,sprint2Tema5,sprint2Tema6);

/*creamos un array para Preguntas y guardamos*/
var arrPregunta = [];
arrPregunta.push(sprint1Pregunta1,sprint1Pregunta2,sprint1Pregunta3,sprint2Pregunta1,sprint2Pregunta2,sprint2Pregunta3);

var arrAlternativa = [];
arrAlternativa.push(sprint1Preg1Alter1,sprint1Preg1Alter2,sprint1Preg1Alter3,sprint1Preg2Alter1,sprint1Preg2Alter2,sprint1Preg2Alter3,
					sprint1Preg3Alter1,sprint1Preg3Alter2,sprint1Preg3Alter3,sprint2Preg1Alter1,sprint2Preg1Alter2,sprint2Preg1Alter3,
					sprint2Preg2Alter1,sprint2Preg2Alter2,sprint2Preg2Alter3,sprint2Preg3Alter1,sprint2Preg3Alter2,sprint2Preg3Alter3);

arrSprints.map(function(e){
	

	document.getElementById("sprint"+e.id).innerHTML = "<h3>" + e.nomSprint + " : " + e.titulo + "</h3>"; 
														
															
	var result = arrTemas.filter(function(element){
		return element.idSprint == e.id;
	});

	var resultPreg = arrPregunta.filter(function(element){
		return element.idSprint == e.id;
	});

	if(result.length == 0){
		document.getElementById("sprint"+e.id).innerHTML += "No hay lecciones (Todavia)";
	}else{
		var mostrar = "<ol>";
		result.map(function(element){

	       mostrar += "<li>" + element.temas + "</li>";
	    });

	    mostrar += "</ol>";
	    document.getElementById("sprint"+e.id).innerHTML += mostrar;	
	    document.getElementById("sprint"+e.id).innerHTML += "<hr> <h3>Quiz</h3>"; 

	    var mostrarPreg = "<div id='preguntas'>";
	    resultPreg.map(function(element){
	    	 mostrarPreg += "<h4>" + element.preguntas + "</h4>";

	    	 var resultAlter = arrAlternativa.filter(function(elem){
				return elem.idPreg == element.idPreg;
			});

	    	 resultAlter.map(function(el){
	    	 	mostrarPreg += '<input type="radio" name="' + element.idPreg + '" value="' + el.alternativa + '"> ' + el.alternativa + '<br>';
	    	 });


	    });
	    mostrarPreg += "<br><br><input type='button' id='" + e.id + "' value='Enviar'>";
	    mostrarPreg += "</div>";

	    document.getElementById("sprint"+e.id).innerHTML += mostrarPreg; 
	}


															
});
