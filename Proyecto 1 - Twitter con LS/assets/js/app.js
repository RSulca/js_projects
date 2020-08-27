//Variables
const lista = document.querySelector('#lista-tweets');

//Event Listeners

eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    lista.addEventListener('click', borrarTweet);
    document.addEventListener('DOMContentLoaded',readLS);
}

//Funciones

function agregarTweet(e) {
    const info = document.querySelector('#tweet').value;
    e.preventDefault();
    if (info !== '') {
        //Crea 'li'
        createElement(info);
        document.querySelector('#anuncio').classList.remove("d-block");
        agregarLS(info);
    } else {
        document.querySelector('#anuncio').classList.add("d-block");
    }
    document.querySelector('#formulario').reset();
}

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar') {
        e.target.parentElement.remove();
        deleteLS(e.target.parentElement.textContent);
    }
}

function agregarLS(info) {
    let tweets;
    tweets = getLS();
    tweets.push(info);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getLS() {
    let array;
    if (localStorage.getItem('tweets') === null) {
        array = [];
    } else {
        array = JSON.parse(localStorage.getItem('tweets'));
    }
    return array;
}

function readLS(){
    let tweets = getLS();
    for( twet of tweets){
        createElement(twet);
    }
}

function deleteLS(text){
    let lista = getLS();
    let text2 = text.substring(0, text.length-1);
    lista.forEach((tweet, index) => {
        if(tweet === text2){
            lista.splice(index, 1);
        }
    });
    localStorage.setItem('tweets',JSON.stringify(lista));
}

function createElement(description){
    const tweet = document.createElement('li');
        tweet.className = 't';
        tweet.innerText = description;
        const borrar = document.createElement('a');
        borrar.className = 'borrar';
        borrar.innerText = 'X';
        borrar.style.float = 'right';
        borrar.style.color = 'red';
        borrar.style.textDecoration = 'none';
        borrar.setAttribute('href', '#');
        lista.appendChild(tweet);
        tweet.appendChild(borrar);
}