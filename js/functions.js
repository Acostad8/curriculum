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

var ver = true ; //boolean 
let fal = false ; //boolean 


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
array =[]
json = []


function load_page(){
    Swal.fire(
        {
        imageUrl: ("https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg"),
        showConfirmButton: false,
        timer: 2000
      }
      );
}


function send_form(){
    let =nombre      = document.getElementById("name").value;
    let =last_name = document.getElementById("last_name").value;
    console.log(nombre.length);

    if(nombre.length == 0 || last_name.length == 0){
        Swal.fire(
            {
            title: "cajas de texto vacias",
            Text: "alguna de las cajas de texto se encuentran vacias",
            icon: "error"
          }
          );
          if(nombre.length == 0 ){
            document.getElementById("name").styleborder = "2px solid red"
          }
          else{
            document.getElementById("name").styleborder = "2px solid green"
          }
          if(last_name == 0){
            document.getElementById("last_name").styleborder = "2px solid red"
          }
          else{
            document.getElementById("last_name").styleborder = "2px solid green"
          }



    }
    else{
        document.getElementById("print").innerText = "su nombre es" + name + last_name
    }
}