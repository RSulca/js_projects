var nombre = 'Raúl', apellidos = 'Sulca Palacios';
var lema = `Tu nombre es ${nombre} y tu apellido ${apellidos}.`;
console.log(lema);

let name;
name = 'cuky';
console.log(name);

let frase = 'Lorem ipsum dolor.';


console.log(frase);
console.log('Tiene ' + frase.length + ' caracteres.');

let test = '450';
console.log(test.toUpperCase());

console.log(lema.indexOf('ido'));

var cadena = lema.split(' ');
console.log(cadena);
console.log(cadena[0]);

let valor = Math.random();
console.log(valor);

let n1 = 34;
let n2 = '34';

console.log(n1 !== n2);

const numer = new Array(1, 2, 3, 4, 5);
numer[5] = 6;
numer.push(7);
numer.push(8);
numer.push(9);
numer.push(10);
numer.unshift(0);
console.log(numer);
console.log(numer.length);
corre(numer);
numer.pop();
numer.pop();
numer.pop();
console.log(numer);
console.log(numer.length);
corre(numer);
numer.shift();
console.log(numer);
console.log(numer.length);
corre(numer);
numer.splice(0, 2);
console.log(numer);
console.log(numer.length);
corre(numer);

function corre(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let mix = [34, 56, 2, 6, 76, 234, 568];
console.log(mix.sort((a, b) => a - b));

try {
    riendo();
} catch ( error ) {
    console.log(error);
}

// function sayGa() {
//     console.log('Beba Army vota tu Ga.')
//     setTimeout(() => { console.log('GAAAAAAAAAAAAAAAAAAAAAAAAAAA') }, 200);
// }

// sayGa();

console.log('Con for: ');
for (let i = 0; i < mix.length; i++) {
    console.log(mix[i]);
}

console.log('Con while: ');
let a=0;
while(mix[a]!=null){
    console.log(mix[a]);
    a++;
}

console.log('Con do-while: ');
let b=0;
do{
    console.log(mix[b]);
    b++;
}while(mix[b]!=null);

console.log('Con forEach: ');
mix.forEach( (mix, index) => {console.log(`${index} : ${mix}`)} );

console.log('Con entries: ');
for( entrada of mix.entries()){
    console.log(entrada);
}

console.log('Con of simple: ');
for( paso of mix){
    console.log(paso);
}

let cara = 'Bestia';
console.log(cara[3]);

for( letra of cara){
    console.log(letra);
}