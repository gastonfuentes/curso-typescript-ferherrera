(() => {

    type River = {
        name: string,
        titular: boolean
    }

    const lateralIzq: River = {
        name: 'casco',
        titular: false
    }
    const lateralDer: River = {
        name: 'Herrera',
        titular: true
    }
    const cinco: River = {
        name: 'Villagra',
        titular: true
    }

    const jugadoresRiver: River[] = [lateralDer, lateralIzq, cinco]


    for (const jugador of jugadoresRiver) {
        console.log(jugador.name);

    }


})()


