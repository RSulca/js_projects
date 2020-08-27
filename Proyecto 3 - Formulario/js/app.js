//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formEnviar = document.getElementById('enviar-mail');
const btnReset = document.getElementById('resetBtn');

eventListeners();

//Event Listeners
function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    formEnviar.addEventListener('submit', enviarEmail);
    btnReset.addEventListener('click', reset);
}



//Funciones

function inicioApp() {
    btnEnviar.disabled = true;
}

function validarCampo() {
    let errores = document.querySelectorAll('.error').length;
    validarLongitud(this);

    if (this.type === 'email') {
        validarEmail(this);
    }

    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        errores = 0;
        if (errores === 0) {
            btnEnviar.disabled = false;
        }
    } else {
        btnEnviar.disabled = true;
    }
}

function validarLongitud(text) {
    if (text.value.length > 0) {
        text.style.borderBottomColor = 'green';
        text.classList.remove('error');
    } else {
        text.style.borderBottomColor = 'red';
        text.classList.add('error');
    }
}

function validarEmail(campo) {
    let info = campo.value;
    if (info.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function enviarEmail(e) {
    e.preventDefault();
    const spinnerGif = document.getElementById('spinner');
    spinnerGif.style.display = 'block';

    const send = document.createElement('img');
    send.src = 'img/mail.gif';
    send.style.display = 'block';
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(send);
        setTimeout(() => {
            send.remove();
            formEnviar.reset();
            btnEnviar.disabled = true;
        }, 5000);
    }, 3000);
}

function reset(e){
    e.preventDefault();
    formEnviar.reset();
    btnEnviar.disabled = true;
}