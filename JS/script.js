function uno(){

	document.case.pantalla.value += "1"
}
function dos(){

	document.case.pantalla.value += "2"
}
function tres(){

	document.case.pantalla.value += "3"
}
function cuatro(){

	document.case.pantalla.value += "4"
}
function cinco(){

	document.case.pantalla.value += "5"
}

function seis(){

	document.case.pantalla.value += "6"
}

function siete(){

	document.case.pantalla.value += "7"
}

function ocho(){

	document.case.pantalla.value += "8"
}

function nueve(){

	document.case.pantalla.value += "9"
}

function cero(){

	document.case.pantalla.value += "0"
}
function ms(){

	document.case.pantalla.value += "+"
}
function men(){

	document.case.pantalla.value += "-"
}
function div(){

	document.case.pantalla.value += "/"
}
function multi(){

	document.case.pantalla.value += "*"
}

function limp(){

	document.case.pantalla.value = ""
}


function ig(){
	var igual = eval(document.case.pantalla.value)
	document.case.pantalla.value = igual;
}

let array = [1, 2, 3, 4, 5, 6, 7]
const resultadoArray = array.map(element => element + 10);
console.log(resultadoArray);

var arreglo=['banana', 'manzana', 'sandia', 'pera']
const resultadoArreglo = arreglo.forEach (function (element, i){
    console.log('${element} se encuentra en el indice ${i}')
})