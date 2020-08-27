const api = new API();
const ui = new Interfaz();

const buscar = document.getElementById('buscarBtn');
const eventoF = document.getElementById('evento');
const categoriaF = document.getElementById('listado-categorias');


buscar.addEventListener('click', ()=>{
    console.log(eventoF);
    const evento = eventoF.value;
    const categoria = categoriaF.options[categoriaF.selectedIndex].innerText;
    if(evento !== '' && categoria !== ''){
        console.log('Correcto');
        api.getResult(evento, categoria);
    } else {
        alert('Lleno todos los campos por favor.');
    }
});