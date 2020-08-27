// // Eliminar de Local Storage
// localStorage.clear();

let element = document;

element.getElementById('encabezado').innerHTML = 'GAAAAAAAAAAAAAAAAAA';

let element2 = document.querySelector('body');

element2.style.background = '#333';

let element3 = document.querySelectorAll('.four .card')[1];
element3.style.background = 'lightgreen';
element3.style.border = '3px solid lightgreen';
element3.style.borderRadius = '20%';
element3.style.paddingTop = '100px';


let element4 = document.querySelectorAll('.card');
console.log(element4[0].parentElement.parentElement.parentElement.children[0].textContent = 'Ola q fue?');

let element5 = document.createElement('a');

element5.className = 'enlace';
element5.textContent = 'Gaaa';
element5.id = 'GAAAAA';
element5.setAttribute('href','#');

document.querySelector('#principal').appendChild(element5);

console.log(element5);


let element6 = document.createElement('h3');
element6.className = 'encabezado';
element6.textContent = 'New title';
element6.style.textAlign = 'center';
element6.style.color = 'white';

let father = document.querySelector('#lista-cursos');
let previous = document.querySelector('#encabezado');

father.replaceChild(element6, previous);

console.log(element6);


let element7 = document.querySelectorAll('.enlace');
element7[1].remove();
console.log(element7[1].textContent);

