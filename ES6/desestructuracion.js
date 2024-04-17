"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'samuel',
        ironman: 'juancito',
        flash: 'pulgarcito',
        activos: true,
        poder: 1500
    };
    const { flash, poder } = avengers;
    console.log(flash, poder);
    const mostrarAvenger = (_a) => {
        var { ironman } = _a, restoDeParametros = __rest(_a, ["ironman"]);
        console.log(ironman, restoDeParametros);
    };
    mostrarAvenger(avengers);
    const avengersArray = ['flash', 'capitan america', true];
    const [primer, ...otros] = avengersArray;
    console.log(otros);
})();
//# sourceMappingURL=desestructuracion.js.map