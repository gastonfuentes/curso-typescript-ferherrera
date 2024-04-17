"use strict";
(() => {
    const lateralIzq = {
        name: 'casco',
        titular: false
    };
    const lateralDer = {
        name: 'Herrera',
        titular: true
    };
    const cinco = {
        name: 'Villagra',
        titular: true
    };
    const jugadoresRiver = [lateralDer, lateralIzq, cinco];
    for (const jugador of jugadoresRiver) {
        console.log(jugador.name);
    }
})();
//# sourceMappingURL=for-of.js.map