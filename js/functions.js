//formas de impresion
// alert("HOLA DESDE UN ARCHIVO EXTERNO")
// console.log("HOLA DESDE LA CONSOLA");
// document.write("HOLA DESDE LA INTERFAZ");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//   });


//VARIABLES y tipos de datos
const pi = 3.14; //variables que no van a cambiar , decimales
const pul = 2.54;
//var name = "Juan David Acosta" //se puede usar en todo el codigo ver variables globales , string
let edad = 18;  //valores que pueden cambiar , enteros

var ver = true; //boolean 
let fal = false; //boolean 


//operadores basicos

// ------valorees enteros y decimales aparecen en morado
//-------valores caracteres en blanco 


var suma = 5 + 2;
console.log(suma);
var var_uno = 10;
var var_dos = 5;
console.log(var_uno - var_dos);
console.log(var_uno * var_dos);
console.log(var_uno / var_dos);
console.log(var_uno % var_dos);

//OPERADORES DE COMPÁRACION 
// =asignacion
// == comparacion (valor)
// === estrictamente comparado (compara el valor y el tipo de dato )
// > / >= / < / <=




console.log("mi edad es: " + edad);
array = []
json = []


function load_page() {
  Swal.fire(
    {
      imageUrl: ("https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg"),
      showConfirmButton: false,
      timer: 2000
    }
  );
  document.getElementById("text").innerText = "el array a calcular es " + array_num;
  document.getElementById("impresion").value = array_num;
}


function send_form() {
  let = nombre = document.getElementById("name").value;
  let = last_name = document.getElementById("last_name").value;
  console.log(nombre.length);

  if (nombre.length == 0 || last_name.length == 0) {
    Swal.fire(
      {
        title: "cajas de texto vacias",
        Text: "alguna de las cajas de texto se encuentran vacias",
        icon: "error"
      }
    );
    if (nombre.length == 0) {
      document.getElementById("name").styleborder = "2px solid red"
    }
    else {
      document.getElementById("name").styleborder = "2px solid green"
    }
    if (last_name == 0) {
      document.getElementById("last_name").styleborder = "2px solid red"
    }
    else {
      document.getElementById("last_name").styleborder = "2px solid green"
    }
  }
  else {
    document.getElementById("print").innerText = "su nombre es" + name + last_name
  }
}



//array

var array_semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_gral = [1, 2, 2.5, "abc", "soy acosta"];
var array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var array_multi = [
  { name: "wider", age: 32, color: "verde" },
  { name: "Marlon", age: 18, color: "rojo" },
  { name: "acosta", age: 18, color: "azul" },
  { name: "marian", age: 19, color: "negro" }
];

var json_ejm = {
  name: "marlon",
  lastname: "acosta",
  phone: "3204886552",
  email: "jdacosta@ufpso.edu.co"

}

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(json_ejm);


function action() {
  // alert(array_num.length);
  // Swal.fire(array_num);
  // console.log(array_num);
  // console.log(array_num.length)


  var result = 0;

  for (let i = 0; i < array_num.length; i++) {
    result = result + array_num[i];

  }
  document.getElementById("result").innerHTML = "<strong> El resultado es: " + result + "</strong>";
  document.getElementById("result").style.color = "green";






  var total = 0;

  for (var j = 0; array_multi.length; j++) {
    console.log(array_multi[j].age);
    total = array_multi[j].age + total;
  }

  var total_dos = 0;
  var w = 0;
  while (w < array_multi.length) {
    total_dos = array_multi[w].age + total_dos;
    w++;
  }
  alert(total_dos)

}





var array_numerico = [1,2,3,4,5,6,7,8,9];
function eliminar() {
  let array_delete = array_numerico.pop();
  console.log(array_delete);
  console.log(array_numerico);
  document.getElementById("impresion").value = array_numerico;
}


function agregar() {
  let num = document.getElementById("num").value;
  let array_add = array_numerico.push(num);
  console.log(array_add)
  console.log(array_numerico)
  document.getElementById("impresion").value = array_numerico
}

function reves(){
  document.getElementById("impresion").value = array_numerico.reverse();
}

function limpiar(){
  document.getElementById("num").value = "";
  document.getElementById("name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("result").innerText = "";
}

function prim(){
  let num = document.getElementById("num2").value;
  let array_add = array_numerico.unshift(num);
  document.getElementById("impresion").value=array_numerico;
}
function eliminarprim(){
  let array_delete =array_numerico.shift();
  console.log(array_delete)
  document.getElementById("impresion").value = array_numerico;
}