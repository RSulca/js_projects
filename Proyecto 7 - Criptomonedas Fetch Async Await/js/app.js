
const dataCoins = new API('4d3d02141462d6668d338df7fb5f6fae079946193b959f8bd7b8a6ddf8e470d4');
const ui = new Interfaz();

const monedaF = document.getElementById('moneda');
const criptomonedaF = document.getElementById('criptomoneda');
const registrar = document.querySelector('.btn');

registrar.addEventListener('click', e => {
    e.preventDefault();
    const moneda = monedaF.options[monedaF.selectedIndex].value;
    const criptomoneda = criptomonedaF.options[criptomonedaF.selectedIndex].value;
    if (moneda !== '' && criptomoneda !== '') {
        document.querySelector('.contenido-spinner').style.display = 'block';
        const tasa = dataCoins.obtenerTasa(criptomoneda, moneda);
        ui.mostrarResultado(tasa, criptomoneda, moneda);
    } else {
        document.querySelector('.contenido-spinner').style.display = 'none';
    
    ui.mostrarEstado('Elija una opcion en todos los campos.', 'error');
}

});