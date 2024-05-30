// funcion por declaracion
function saludar() {
    console.log('¡Hola!');
    }
    saludar(); 

/*Parametros y argumentos*/
function saludar1(tuNombre) 
    {
    console.log('¡Hola! ' + tuNombre);
    }
    saludar1("JuanPerez");

/*return*/
function sumar(a, b) 
{
    const resultado = a + b;
    return resultado;
}
    const resultado1 = sumar(2, 5);
    console.log(resultado1)

    const resultado2 = sumar(14, 5);
    console.log(resultado2);

/*uso de templates o plantillas literales*/
function sumar1(a, b) 
{
    const suma = a + b
    const resultado3 = `El resultado de la suma es ${suma}`; /*no confundir con comillas simples */
    return resultado3;
}
    const resultado3 = sumar1(5, 9);
    console.log(resultado3);

//Asignar función a una variable
function sumar3(a,b){
    const suma3 = a + b;
    return suma3;
}
const sumando = sumar3;
console.log(sumando(5,3)); 

// parametros por defecto
function multiplicar(a, b = 1) {
    const resultado4 = a * b;
    return resultado4;
    }
    console.log(multiplicar(5)); 
    console.log(multiplicar(5, 3));

// funciones anonimas
const multiplicar2 = function(a, b) {
    return a * b;
    };
    const resultado5 = multiplicar2(6, 3);
    console.log(resultado5);

// funciones constructor
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar3 = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    };
    }
    const persona1 = new Persona("Juan", 25);
    const persona2 = new Persona("María", 30);
    persona1.saludar3(); 
    persona2.saludar3();

//Funciones flechas o arrow functions
//funcion tradicional
const func = function () 
{
    return "Función tradicional.";
};
    console.log(func());

//arrow function
const func2 = () => 
{
    return "Función flecha.";
};
    console.log(func2());

//Ejemplo arrow function sin parámetros
//const func4 = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
//Ejemplo arrow function con 1 parámetro
//const func5 = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
//Ejemplo arrow function con 2 parámetro
//const func6 = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b
// variables locales
function ejemplo() 
{
    const variableLocal = 10; // Variable local
    console.log(variableLocal); // Salida: 10
}
    ejemplo();
    //console.log(variableLocal); // Error: variableLocal is not defined

// variables globales
let variableGlobal = 5; // Variable global
function ejemplo2() 
{
    console.log(variableGlobal); // Salida: 5
    variableGlobal = 10;
}
    ejemplo2();
    console.log(variableGlobal); // Salida: 10

// ejemplo con var
function ejemplo() {
    if (true) {
    var x = 10;
    console.log(x); 
    }
    console.log(x); 
    }
    ejemplo();
    //console.log(x); // Error: x is not defined