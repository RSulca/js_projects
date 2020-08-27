const empleado = document.getElementById('boton1');
const empleados = document.getElementById('boton2');

empleado.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleado.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const emp = JSON.parse(this.responseText);
            const info = `
                <ul>
                <li>ID: ${emp.id}</li>
                <li>NOMBRE: ${emp.nombre}</li>
                <li>EMPRESA: ${emp.empresa}</li>
                <li>TRABAJO: ${emp.trabajo}</li>
                </ul>
            `;
            document.getElementById('empleado').innerHTML = info;
        }
    }
    xhr.send();
});

empleados.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleados.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const emp = JSON.parse(this.responseText);
            let info = '';
            for (emps of emp) {
                const prev = `
                <ul>
                <li>ID: ${emps.id}</li>
                <li>NOMBRE: ${emps.nombre}</li>
                <li>EMPRESA: ${emps.empresa}</li>
                <li>TRABAJO: ${emps.trabajo}</li>
                </ul>
            `;
                info = info + prev;
            }

            document.getElementById('empleados').innerHTML = info;
        }
    }
    xhr.send();
});

