const boton = document.getElementById('cargar');
boton.addEventListener('click', cargarDatos);

function cargarDatos() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'datos.txt', true);
    // xhr.onload = function() {
    //     if (this.status === 200) {
    //         document.querySelector('#listado').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    // }

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.querySelector('#listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // readyState
    // 0.- No inicializado
    // 1.- Conexion establecido
    // 2.- Recibido
    // 3.- Procesando
    // 4.- Respuesta lista

    xhr.send();
};