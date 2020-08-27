const btnCargar = document.getElementById('cargar');
const listado = document.getElementById('listado');

btnCargar.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let array = JSON.parse(this.responseText);
            let info = '<ul>';
            for (res of array) {
                const prev = `
                <li>
                    <div>${res.id}</div>
                    <h1>${res.title}</h1>
                    <p>${res.body}</p>
                </li>
            `;
                info += prev;
            }
            info += '</ul>'
            document.getElementById('listado').innerHTML = info;
        }
    }
    xhr.send();
});