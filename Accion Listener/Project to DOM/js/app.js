// var i=0;
// let name = document.querySelector('#encabezado').textContent;
// document.querySelector('#encabezado').addEventListener('click', (e) => {
//     console.log(e.target);
//     if(i%2==0){
//         e.target.style.color = 'orange';
//         e.target.textContent = 'Gaaaaaaaa';
//     }else {
//         e.target.style.color = '#333';
//         e.target.textContent = name;
//     }
//     i++;
//     alert('GAAAAAAAAAAAA')});

//     // let element1 = document.querySelector('#encabezado');

//     // element1.addEventListener('mousemove', (e) => console.log(`Mouse event: ${e.type}`));

let element2 = document.querySelector('#buscador');

element2.addEventListener('keyup', (e) => {
    document.querySelector('#encabezado').textContent = element2.value;
    console.log(e.type);
})


document.body.addEventListener('click',(e) => {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
});

localStorage.setItem('GA','gaaaaaaaaa');

console.log('GA');