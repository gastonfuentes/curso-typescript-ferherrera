"use strict";
(() => {
    let flash = {
        name: 'flash',
        age: 40,
        powers: ['velicidad', 'fuerza']
    };
    flash = {
        name: 'pedro',
        powers: ['molestar'],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash.name);
})();
//# sourceMappingURL=objects.js.map