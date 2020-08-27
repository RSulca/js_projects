class API {
    constructor(){
        this.token_auth = 'FIDEE637HIOF3AZCKOMJ';
        this.sort = 'date';
        this.getCategories();
    }

    async getCategories(){
        const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`;
        const res = await fetch(url);
        const categories = await res.json();
        return categories.categories;
    }

    async getResult(evento, categoria){
        const url = `https://www.eventbriteapi.com/v3/events/search/?token=${this.token_auth}`;
        const res = await fetch(url);
        const categories = await res.json();
        console.log(categories)
        return categories.categories;
    }

}