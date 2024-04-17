(() => {

    const fullName = (firstName: string, ...argsRest: string[]): string => {
        return `${firstName} ${argsRest.join(' ')}`
    }

    const superman = fullName('gaston', 'fuentes', 'misho');

    console.log(superman);


})()