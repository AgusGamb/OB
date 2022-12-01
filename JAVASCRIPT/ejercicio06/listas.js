// Crea un archivo JS que contenga las siguientes línea
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

var lista_compras = ['te', 'leche', 'avena', 'huevos', 'yerba'];


// - Modifica la lista de la compra y añádele "Aceite de Girasol"

lista_compras.push('Aceite de Girasol');


// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

console.log(lista_compras)

lista_compras.pop();

console.log(lista_compras);


// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

var peliculasFav = [
    { titulo: 'titulo1', director: 'director1', año: 2000},
    { titulo: 'titulo2', director: 'director2', año: 2010},
    { titulo: 'titulo3', director: 'director3', año: 2020},
];


// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

var peliculas2010 = peliculasFav.filter(pelis => pelis.año <= 2010);


// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

var directores = peliculasFav.map(dir => dir.director);


// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

var titulos = peliculasFav.map(title => title.titulo)


// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

var directores_titulos = directores.concat(titulos);


// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

var dir_title_prop = [...directores, ...titulos];
console.log(dir_title_prop);