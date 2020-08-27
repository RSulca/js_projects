let countries = ['Peru', 'Boivia', 'Argentina', 'Chile', 'Brazil'];
const promise = new Promise((resolve, reject) => {
    const valor = true;
    if (valor) {
        resolve(countries);
    } else {
        reject('Error');
    }
});

promise.then((resultado) => {
    for(country of resultado){
        console.log(country);
    }
}).catch((error) => {
    console.log(error);
})
