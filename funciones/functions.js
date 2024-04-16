"use strict";
(() => {
    const hero = 'flash';
    function returName() {
        return hero;
    }
    const activeBatiSignal = () => {
        return 'batiseñal activada!';
    };
    console.log(typeof (activeBatiSignal));
})();
