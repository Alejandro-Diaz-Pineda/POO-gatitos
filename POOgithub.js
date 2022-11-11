/*
Programacion orientada a Objetos (POO)

paradigma= Manera en la que se puede hacer algo especifico.
Paradigma de Programacion: Forma o manera en la que puedo programar algo.

POO en JAVA, en JS, Python, C#

otras formas de programar:
Programacion funcional
Programacion imperativa
programacion declarativa

Pilares fundamentales de la programacion POO
-Polimorfismo
-herencia
-Encapsulamiento
-Abstraccion

-Clases
-Objetos
    -Atributos(lo que tengo-ojitos pispiretos)
    -Metodos (Lo que puedo hacer con lo que tengo- mirar lo bello del al vida)

*/

//Ejemplo del gatito

//Propiedades = variables o constantes
const color = "Gris";
var tamanio = "Chiquito";
var edad = 5;
var cicatrices = true;
const raza = "Angora";
var caracter = "Agresivo"

//Metodos o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}

//Precursor de los objetos Array
/*var gato = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
console.log(typeof(gato));*/


//Evolucion de los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}

var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

var Limon= {
    nombre: "Limon",
    edad: 2,
    caracter : "Agrio",
    raza : "Egipcio",
}


console.log(typeof(Cilantro));
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Cilantro es",Cilantro.caracter);

/*
Clases para agilizar este proceso (plantillas)

*/
//1.- defino mi clase con la palabra reservada
class gato {
    //2.- Definir mis propiedades o atributos como variables, para despues ponerle valores
    nombre= "";
    edad= 0;
    raza="";
    caracter= "";

    //4.- Agregar constructores
constructor(nombre, edad,raza,caracter){
    this.nombre= nombre;
    this.edad= edad;
    this.raza= raza;
    this.caracter= caracter;
}

//3.- Definir los metodos que seran definidos como funciones o acciroones

maullar(){
    console.log("miau");
}
dormir(){
    console.log("Zzzzzzzz");
}
ronronear(){
    console.log("Prrrrrrrrrr");
}


}
//para empazar a crear o instanciar objetos(gatos) vamos a utilizar la palabra reservada new

var Gardfield= new gato("Gardfield",9,"Naranja","Dormilon");

var Felix =new gato("felix",4,"caricaturas","amistoso");
 
var kitty = new gato("kitty",1,"kawaii","tranquilo");

var Dgato = new gato("don gato",5,"amarillo","trovador y bohemio");

var cheshire= new gato("chesire",100,"Morado","morado&mischievous");

console.log(Gardfield);
Gardfield.ronronear();
Dgato.maullar();
cheshire.dormir();
