function Developer(aniosExp, area) {
    this.aniosExp = aniosExp;
    this.area = area;
}

Developer.prototype.read = function() {
    return `Posee ${this.aniosExp} de experiencia y pertenece al area de ${this.area} .`;
}

function Worker(aniosExp, area, nombre) {
    Developer.call(this, aniosExp, area);
    this.nombre = nombre;
}

Worker.prototype = Object.create(Developer.prototype);

Worker.prototype.read2 = function(){
    return `Se llama ${this.nombre} y posee ${this.aniosExp} de experiencia y pertenece al area de ${this.area} .`;
}   







let dev1 = new Developer(5, 'Frontend');
let dev2 = new Worker(6, 'Full Stack', 'Raúl');
console.log(dev1.read());
console.log(dev2.read2());
console.log(dev2.read());