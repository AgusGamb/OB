// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

var nombre = 'Agustina';
var edad = '28';
var sosDev = false;
var fechaNacimiento = new Date(1993, 7, 29);
var libroFav = {
    titulo: 'Ficciones',
    autor: 'Juan Luis Borges',
    fecha: new Date(1994, 01, 1),
    pag: new URL('http://www.google.com'),
};


console.log(nombre);
console.log(edad);
console.log(sosDev);
console.log(fechaNacimiento);
console.log(libroFav);
console.log(libroFav.titulo);
console.log(libroFav.autor); 
console.log(libroFav.fecha);
console.log(libroFav.pag);


