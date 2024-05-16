(() => {


    abstract class Jugador {
        constructor(
            public name: string,
            public realName: string
        ) { }
    }

    class Defensor extends Jugador {
        rechazarLargo() {
            return 'despeje largo con la derecha'
        }
    }

    class Lateral extends Jugador {
        darPase() {
            return 'da pase con pierna izq'
        }
    }



    const central = new Defensor('Paulo', 'Diaz')

    /*     console.log(central.rechazarLargo());
     */
    const lateralIzq = new Lateral('Milton', 'Casco')

    /*     console.log(lateralIzq.darPase());
     */
    const imprimeJugador = (jugador: Jugador) => {
        /*         console.log(jugador.realName);
         */
    }

    imprimeJugador(central)







})()