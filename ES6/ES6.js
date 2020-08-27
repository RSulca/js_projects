/***********ASIGNACION DE OBJETOS POR DESTRUCTURING***********/

// const persona = {
//     nombre: 'Raúl',
//     edad: 22,
//     soltero: true,
//     dato: {
//         codigo: 16200239,
//         facultad: 'FISI'
//     }
// }

// let { nombre, dato: { codigo, facultad } } = persona;

// console.log(facultad);

/***********ASIGNACION DE ARREGLOS POR DESTRUCTURING***********/

// let countries = ['Peru','Chile','Brasil','Ecuador', ['Colombia', 'Venezuela'], {idioma: 'Castellano'}];
// const [ , , , fourth,[ , that] ] = countries;
// console.log(that);
// console.log(countries[4][1]);

// /************DESTRUCTURING DE FUNCIONES*************/

// function frase(nombre, edad, codigo){
//     console.log(`Te llamas ${nombre}, tienes ${edad} y tu código es ${codigo}`);
// }

// frase('Raúl', 22, 16200239);

// function fraseBest(dato){
//     let {nombre,edad,codigo} = dato;
//     // let {nombre,edad = 10,codigo} = dato;
//     // console.log(`Te llamas ${dato.nombre}, tienes ${dato.edad} y tu código es ${dato.codigo}`);
//     console.log(`Te llamas ${nombre}, tienes ${edad} y tu código es ${codigo}`);

// }

// fraseBest({
//     nombre: 'Raul',
//     edad: 22,
//     codigo: 16200239
// });


/*******************SYMBOLS**********************/

// // let nombre2 = Symbol();
// // let apellido2 = Symbol();

// // let person = {};
// // person.name = 'Raul';
// // person[nombre2] = 'GAAAAA';
// // person[apellido2] = 'Sulca';

// // console.log(person);
// // console.log(person.name);
// console.log(person[nombre2]);


/******************SET************************/





