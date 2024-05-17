"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
conducirBatimovil(batimovil);
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
reir(guason);
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
        console.log(`hola mi nombre es ${this.nombre}`);
    }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class JugadorRiver {
        darPase(id) {
            return 'da el pase con la izquiera';
        }
    }
    const defensor = new JugadorRiver();
})();
(() => {
    const client = {
        name: 'Gaston',
        age: 40,
        address: {
            id: 125,
            zip: '5111',
            city: 'Rio Ceballos'
        },
        getFullAddress(id) {
            return 'Hola';
        }
    };
    const client2 = {
        name: 'Melisa',
        age: 30,
        address: {
            id: 23,
            zip: '5300',
            city: 'La Rioja'
        },
        getFullAddress(id) {
            return 'Hola';
        }
    };
})();
//# sourceMappingURL=main.js.map