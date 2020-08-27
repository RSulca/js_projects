class Interfaz {
    constructor() {
        this.init();
    }
    init() {
        this.llenarMonedas();
    }

    llenarMonedas() {
        dataCoins.obtenerMonedasAPI().then(dato => {
            let i = 0;
            const select = document.getElementById('criptomoneda');
            for (const [key, value] of Object.entries(dato.Data)) {
                const option = document.createElement('option');
                option.value = value.Symbol;
                option.innerText = value.CoinName;
                select.append(option);
            }
        }).catch((error) => console.log(error));
    }

    mostrarEstado(mensaje, estado) {
        const formulario = document.querySelector('#formulario');
        const div = document.createElement('div');
        if (estado === 'correcto') {
            div.innerText = mensaje;
            div.classList.add('bg-success', 'text-center', 'w-100', 'mx-3', 'p-3', 'rounded', 'text-white', 'd-block');
            document.querySelector('.formulario-cotizar').appendChild(div);
            setTimeout(() => {
                div.remove();
            }, 1000)
        } else {
            div.innerText = mensaje;
            div.classList.add('bg-danger', 'text-center', 'w-100', 'mx-3', 'p-3', 'rounded', 'text-white', 'd-block');
            document.querySelector('.formulario-cotizar').appendChild(div);
            setTimeout(() => {
                div.remove();
            }, 2000)
        }
    }

    mostrarResultado(tasa, criptomoneda, moneda) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        setTimeout(()=>{
        document.querySelector('.contenido-spinner').style.display = 'none';
            tasa.then((data) => {
                const dato = data.RAW[criptomoneda][moneda];
                const fecha = new Date(dato.LASTUPDATE * 1000).toLocaleDateString('es-PE');
                const p = `<div class="card bg-info">
                <div class="card-header">
                  <h1>Resultado</h1>
                </div>
                <div class="card-body text-white">
                <h4>Moneda: ${moneda}</h4>
                <h4>Criptomoneda: ${criptomoneda}</h4>
                <h4>Valor: ${dato.PRICE.toFixed(3)}</h4>
                <h4>Cambio en el ultimo dia: ${dato.CHANGEPCTDAY.toFixed(4)}%</h4>
                <h4>Ultima actualización: ${fecha}</h4>
                </div>
              </div>`;
                resultado.innerHTML = p;
            }).catch(() => {
                ui.mostrarEstado('Valor no encontrado', 'error');
                resultado.innerHTML = '';
            });
        },2500);
    }
}