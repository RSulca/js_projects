let estado = true;
let presupuesto;
while (estado == true) {
    presupuesto = Number.parseInt(prompt('Con cuanto presupuesto cuenta?'));
    if (!isNaN(presupuesto)) {
        estado = false;
    }
}

const total = document.getElementById('total');
const restante = document.getElementById('restante');
total.textContent = presupuesto;
restante.textContent = presupuesto;
const rest50 = restante.textContent * 0.5;
const rest75 = restante.textContent * 0.25;
const origen = document.getElementById('gasto');
const cantidad = document.getElementById('cantidad');
const agregar = document.getElementById('agregar-gasto');

class Gasto {
    constructor(origen, cantidad) {
        this.origen = origen;
        this.cantidad = cantidad;
    }
}

class Interface {
    agregarGasto = function (gasto) {
        const list = document.querySelector('.list-group');
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `${gasto.origen}
        <span class="badge badge-primary badge-pill">$${gasto.cantidad}</span>
        `;
        list.appendChild(li);
        this.descontar(gasto.cantidad);
    }

    descontar = function (cantidad) {
        restante.textContent -= cantidad;
        if (restante.textContent <= rest50 && restante.textContent >= rest75) {
            restante.parentElement.parentElement.classList.add('bg-warning');
        }
        if (restante.textContent <= rest75) {
            restante.parentElement.parentElement.classList.add('bg-danger');
        }
    }
}

agregar.addEventListener('submit', registrar);

function registrar(e) {
    e.preventDefault();
    const div = document.createElement('div');
    if (origen.value !== '' && cantidad.value !== '' && !isNaN(Number.parseInt(cantidad.value))) {
        const gasto = new Gasto(origen.value, cantidad.value);
        const int = new Interface();
        int.agregarGasto(gasto);
        div.textContent = 'Agregado';
        div.classList.add('bg-success', 'text-center', 'text-white', 'p-2', 'rounded');
        agregar.insertBefore(div, document.querySelector('.form-group'));
        setTimeout(() => {
            div.remove();
            agregar.reset();
        }, 1000);
    } else {
        div.textContent = 'Por favor ingrese datos válidos.';
        div.classList.add('bg-danger', 'text-center', 'text-white', 'p-2', 'rounded');
        agregar.insertBefore(div, document.querySelector('.form-group'));
        setTimeout(() => {
            div.remove();
            agregar.reset();
        }, 1000);
    }

}
