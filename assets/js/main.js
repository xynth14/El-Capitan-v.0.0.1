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