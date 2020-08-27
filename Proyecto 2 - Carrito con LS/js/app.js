//Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const lista = document.querySelector('#lista-carrito tbody');

//Event Listeners

eventListeners();

function eventListeners() {
    listaCursos.addEventListener('click', comprarCurso);
    carrito.addEventListener('click', eliminarCurso);
    document.addEventListener('DOMContentLoaded', readLS);
}


//Funciones

function comprarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        leerDatos(e.target.parentElement.parentElement);
    }
}

function leerDatos(dato) {
    const infoCurso = {
        imagen: dato.querySelector('img').src,
        titulo: dato.querySelector('h4').innerText,
        precio: dato.querySelector('.precio span').innerText,
        id: dato.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoCurso);
}

function insertarCarrito(curso) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
            <td>
                <img width='100px' src='${curso.imagen}'>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href='#' class='borrar-curso' data-id='${curso.id}'>X</a>
            </td>
    `;
    lista.appendChild(fila);
    insertarLS(curso);
}

function eliminarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        removeLS(e.target.parentElement.parentElement.children[1].innerText);
    }
    if (e.target.id === 'vaciar-carrito') {
        lista.innerHTML = '';
        // localStorage.setItem('cursos','[]');
        localStorage.clear();
    }
    // if (e.target.id === 'vaciar-carrito') {
    //     while (lista.firstChild) {
    //         lista.removeChild(lista.firstChild);
    //     }
    // }
}

function insertarLS(curso) {
    let cursos;
    cursos = getLS();
    cursos.push(curso);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function getLS() {
    let cursos;
    if (localStorage.getItem('cursos') == null) {
        cursos = [];
    } else {
        cursos = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursos;
}

function readLS() {
    const cursos = JSON.parse(localStorage.getItem('cursos'));
    for (curso of cursos) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>
                <img width='100px' src='${curso.imagen}'>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href='#' class='borrar-curso' data-id='${curso.id}'>X</a>
            </td>
    `;
        lista.appendChild(fila);
    }
}

function removeLS(info){
    let cursos = getLS();
    cursos.forEach((curso, index) => {
        if(curso.titulo == info){
            cursos.splice(index, 1);
        }
    });
    localStorage.setItem('cursos', JSON.stringify(cursos));
}