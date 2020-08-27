//Variables

class Registro {
    constructor(marca, anio, seguro) {
        this.marca = marca;
        this.anio = anio;
        this.seguro = seguro;
    }
    cotizar = function () {
        let cantidad;
        const base = 2000;
        switch (this.marca) {
            case 'Americano':
                cantidad = base * 1.15; break;
            case 'Asiatico':
                cantidad = base * 1.05; break;
            case 'Europeo':
                cantidad = base * 1.35; break;
        }
        let porcentaje = new Date().getFullYear() - this.anio;
        cantidad = cantidad * (100 - porcentaje * 3) / 100;
        if (this.seguro === 'basico') {
            cantidad = cantidad * 1.3;
        } else {
            cantidad = cantidad * 1.5;
        }
        return cantidad;
    }
}

class Interfaz {
    mostrarEstado = function (info, tipo) {
        const div = document.createElement('div');
        if (tipo === 'error') {
            div.classList.add('error');
        } else {
            div.classList.add('correcto');
        }
        div.textContent = info;
        document.getElementById('cotizar-seguro').insertBefore(div, document.querySelector('.form-group'));
        setTimeout(() => {
            div.remove();
        }, 2500);
    }
    mostrarResultado = function (dato, info) {
        const cotizado = document.querySelector('#resultado div');
        if (cotizado != null) {
            cotizado.remove();
        }
        const resultado = document.querySelector('#resultado');
        const div = document.createElement('div');
        div.innerHTML =
            `<p class='header'>Resultado de la cotizacion</p>
        Modelo: ${info.marca}   <br>
        Año:    ${info.anio}    <br>
        Tipo:   ${info.seguro}  <br>
        Total:  ${dato} dolares`;
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';

        setTimeout(() => {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 2500);
    }
}

const marca = document.getElementById('marca');
const anio = document.getElementById('anio');
const anioActual = new Date().getFullYear();
for (let i = anioActual; i > (anioActual - 20); i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerText = i;
    anio.append(option);
}

//Accion Listeners
document.getElementById('cotizar-seguro').addEventListener('submit', (e) => {
    e.preventDefault();
    const marca = document.getElementById('marca');
    const opcion = marca.options[marca.selectedIndex].innerText;
    const anios = document.getElementById('anio');
    const anio = anios.options[anios.selectedIndex].innerText;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const int = new Interfaz();
    if (opcion !== '- Seleccionar -' && anio !== '') {
        const info = new Registro(opcion, anio, tipo);
        const mensaje = info.cotizar();
        int.mostrarResultado(mensaje, info);
        int.mostrarEstado('Cotizando...', 'Correcto');
    } else {
        int.mostrarEstado('Campo incompleto, por favor revisar y volver a intentar.', 'error');
    }
});

//Funciones

