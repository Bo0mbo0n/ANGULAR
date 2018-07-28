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

/*
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

*/

/*
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"

function getAvenger( nombre:string, poder?:string, arma:string="arco"){
let mensaje:string;
if(poder){
  mensaje = `${nombre} tiene el poder de:  ${poder}  y un arma:  ${arma}`;
}else{
  mensaje = `${nombre} tiene un ${arma}`; 
}
console.log(mensaje);
}

getAvenger("Hulk");
*/

/*
// Convertir esta funcion a una funcion de flecha

let resultadoDoble = (a:number, b:number) => (a + b) * 2 ;

console.log(resultadoDoble(3,5));
*/

// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman {
  nombre:string;
  artesMarciales:string[];
}

let batman:Batman ={
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman);

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo {
  base:number=13;
  altura:number=5;
  

  area( ){
    
    console.log("El área del rectangulo es: " + this.base * this.altura );
  };

}


let figura:rectangulo = new rectangulo();
figura.area();

