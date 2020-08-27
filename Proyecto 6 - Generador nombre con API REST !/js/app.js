//Variables
const generar = document.getElementById('generar-nombre');
const origenF = document.getElementById('origen');
const generoF = document.getElementById('genero');
const cantidadF = document.getElementById('numero');


class Datos {
    constructor(origen, genero, cantidad) {
        this.origen = origen;
        this.genero = genero;
        this.cantidad = cantidad;
    }
}


//Action Listeners
generar.addEventListener('submit', (e) => {
    e.preventDefault();
    let dato;
    const origen = origenF.options[origenF.selectedIndex].value;
    const genero = generoF.options[generoF.selectedIndex].value;
    const cantidad = cantidadF.value;
    dato = new Datos(origen, genero, cantidad);
    let url = 'https://uinames.com/api/?';
    if (origen !== '') {
        url += `region=${origen}&`;
    }
    if (genero !== '') {
        url += `gender=${genero}&`;
    }
    if (cantidad !== '') {
        url += `amount=${cantidad}&`
    }
    const xrh = new XMLHttpRequest();
    xrh.open('GET', url, true);
    xrh.reload = function () {
        if (this.status === 200) {
            const nombres = JSON.parse(this.responseText);
            // Generar el HTML
            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';
            // Imprimir cada nombre
            nombres.forEach(function (nombre) {
                htmlNombres += `
                           <li>${nombre.name}
                 `;
            })
            htmlNombres += '</ul>';
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }
    xrh.send();
})


//Funciones