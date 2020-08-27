class Persona {
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }

    readPerson() {
        return `Hola ${this.nombre}, tienes ${this.edad} y tiene ${this.dinero} soles.`;
    }

    static welcome() {
        return `Hola causita.`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, dinero, codigo) {
        super(nombre, edad, dinero);
        this.codigo = codigo;
    }

    static welcome() {
        return `Hola cachimbo.`;
    }

}

let e1 = new Estudiante('Raul', 22, 1000, 16200239);

console.log(Estudiante.welcome());