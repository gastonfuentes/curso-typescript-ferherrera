"use strict";
(() => {
    class Jugador {
        static getEdad() {
            return this.name;
        }
        constructor(nombre, apellido, titular) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.titular = titular;
        }
        bio() {
            return `${this.nombre} - ${this.apellido}`;
        }
    }
    Jugador.edad = 30;
    const lateralIzq = new Jugador('paulo', 'diaz');
})();
(() => {
    class JugadorRiver {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido;
            console.log('desde el constructor de jugador river');
        }
        nombreCompleto() {
            return `${this.nombre} - ${this.apellido}`;
        }
    }
    class Defensor extends JugadorRiver {
        constructor(nom, ape, titular) {
            super(nom, ape);
            this.titular = titular;
            console.log('desde el constructor de Defensor');
        }
        mostrarMetodoSuper() {
            console.log(super.nombreCompleto());
        }
    }
    const lateralIzq = new Defensor('enzo', 'diaz', true);
    lateralIzq.mostrarMetodoSuper();
})();
//# sourceMappingURL=main.js.map