import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!!';
  nombre = 'Ivone';
  color= 'azul';

 
  
}


// Codigo de JavaScript

/*  codigo demo TypeScript

function saludar(nombre:string) {

  console.log("Hola  " + nombre.toUpperCase());
}

var Minions = {
  nombre: "Stuart"
}

saludar(Minions.nombre);
*/

/*var mensaje = "hola";

if (true) {
    var mensaje = "adios";
}

console.log(mensaje);*/


/* uso de let
let mensaje = "hola";


if (true) {
    let mensaje = "adios";
}

console.log(mensaje);

*/

/* uso de constantes
const OPCIONES = "todas";
*/


/* ejemplo examen
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

const PERSONAJE = {
  nombre: nombre,
  edad: edad
};
 
console.log(PERSONAJE);
*/

let nombre:string="Yanet"
let apellido:string="Buendia"
let edad:number=24;


let texto = `Hola,

${ nombre}   ${ apellido}
(${edad})`;

let texto2:string=`${ 1 + 2 }`;

function getNombre(){
  return "Yanet";
}

let texto3:string = `${getNombre()}`;
console.log(texto);
console.log(texto2);
console.log(texto3);

