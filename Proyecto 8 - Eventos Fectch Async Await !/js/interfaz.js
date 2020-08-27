class Interfaz {
    constructor() {
        this.init();
        this.resultado = document.getElementById('resultado-eventos');
    }

    init() {
        this.readCategories();
    }

    readCategories(){
        const data = api.getCategories();
        const lista = document.getElementById('listado-categorias');
        data.then( (categories)=> {
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.innerText = category.name;
                lista.appendChild(option);
            });
        } )
    }
}