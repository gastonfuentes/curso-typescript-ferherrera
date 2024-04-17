"use strict";
(() => {
    const fullName = (firstName, ...argsRest) => {
        return `${firstName} ${argsRest.join(' ')}`;
    };
    const superman = fullName('gaston', 'fuentes', 'misho');
    console.log(superman);
})();
//# sourceMappingURL=args-rest.js.map