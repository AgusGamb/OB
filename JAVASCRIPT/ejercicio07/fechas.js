//FECHAS
//Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy

var hoy = new Date()

//- La fecha de tu nacimiento

var nacimiento = new Date(1993, 07, 29)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

var comparacion = hoy > nacimiento

//- Una variable que contenga el día de tu nacimiento

var diaNacimiento = nacimiento.getDate()

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

var mesNacimiento = nacimiento.getMonth() + 1

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)

var anyoNacimiento = nacimiento.getFullYear()
