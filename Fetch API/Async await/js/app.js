async function obtenerDatos(){
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    const datos = await respuesta.json();

    return datos;
} 

obtenerDatos().then( info => console.log(info));
 
fetch('https://jsonplaceholder.typicode.com/todos').then( res => res.json() ).then( datos => console.log(datos));




// const container = document.querySelector('.container');
// container.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.id === 'txtBtn') {
//         fetch('datos.txt').then((res) => {
//             return res.text();
//         }).then((data) => {
//             document.getElementById('resultado').innerHTML = data;
//         }).catch((error) => {
//             console.log(error);
//         })
//     }
//     if (e.target.id === 'jsonBtn') {
//         fetch('empleados.json').then((res) => {
//             return res.json();
//         }).then((data) => {
//             let info = '';
//             for (dat of data) {
//                 info += `<ul>
//                 <li>Nombre: ${dat.nombre}</li>
//                 <li>Puesto: ${dat.puesto}</li>
//                 </ul>`
//                     ;
//             }
//         document.getElementById('resultado').innerHTML = info;
//         }).catch((error) => {
//             console.log(error);
//         })
//     }
//     if (e.target.id === 'apiBTN') {
//         fetch('https://picsum.photos/v2/list').then((res) => {
//             return res.json();
//         }).then((data) => {
//             console.log(data);
//             let info = '';
//             for (dat of data) {
//                 info += `<ul>
//                 <li>Nombre: ${dat.author}</li>
//                 <img src="${dat.download_url}" alt="" width="300px">
//                 </ul>`
//                     ;
//             }
//         document.getElementById('resultado').innerHTML = info;
//         document.getElementById('resultado').style.textAlign = 'center';
//         }).catch((error) => {
//             console.log(error);
//         })
//     }
// })