class API {
    constructor(apikey) {
        this.apikey = apikey;
    }

    async obtenerMonedasAPI(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        const resURL = await fetch(url);
        const data = await resURL.json();
        return data;
    }

    async obtenerTasa(criptomoneda, moneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;
        const resURL = await fetch(url);
        const data = await resURL.json();
        return data;
    }


}