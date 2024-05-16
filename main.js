"use strict";
(() => {
    class Jugador {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Defensor extends Jugador {
        rechazarLargo() {
            return 'despeje largo con la derecha';
        }
    }
    class Lateral extends Jugador {
        darPase() {
            return 'da pase con pierna izq';
        }
    }
    const central = new Defensor('Paulo', 'Diaz');
    const lateralIzq = new Lateral('Milton', 'Casco');
    const imprimeJugador = (jugador) => {
    };
    imprimeJugador(central);
})();
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
        }
        nombreCompleto() {
            return `${this.nombre} - ${this.apellido}`;
        }
    }
    class Defensor extends JugadorRiver {
        constructor(nom, ape, titular) {
            super(nom, ape);
            this.titular = titular;
        }
        mostrarMetodoSuper() {
        }
        get apellidoYNombre() {
            return `${this.apellido} - ${this.nombre}`;
        }
    }
    const lateralIzq = new Defensor('enzo', 'diaz', true);
    lateralIzq.mostrarMetodoSuper();
})();
(() => {
})();
//# sourceMappingURL=main.js.map