let countries = ['Peru', 'Boivia', 'Argentina', 'Chile', 'Brazil'];

function addCountry(name, operation){
    setTimeout(()=>{
        countries.push(name);
        operation();
    },2000);
}

function getCountries() {
    setTimeout(() => {
        for (country of countries) {
            console.log(country);
        }
    }, 1000);
}

addCountry('Venezuela',getCountries);
getCountries();