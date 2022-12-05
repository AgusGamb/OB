//OBJETOS
//Crea un archivo llamado objetos.js que contenga las siguientes líneas
//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

var persona = {
    nombre: 'Agustina',
    apellido: 'Gambarte',
    edad: 28,
    altura: 1.68,
    eresDesarrollador: true,
}

//- Una variable que obtenga tu edad a partir del objeto anterior

var cual_edad = persona.edad;

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

var lista = [
    {
        ...persona
    },{
        nombre: 'Sofia',
        apellido: 'Lopez',
        edad: 30,
        altura: 1.57,
        eresDesarrollador: false,
    }, {
        nombre: 'Veronica',
        apellido: 'Veliz',
        edad: 29,
        altura: 1.67,
        eresDesarrollador: false,
    }
]

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

var listaOrdenada = lista.sort((a, b) => a.edad - b.edad);