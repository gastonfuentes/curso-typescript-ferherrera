"use strict";
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