(() => {


    interface Jugador {
        name: string;
        apellido: string;
        age: number
    }

    interface Posicion {
        posicion: string;
        darPase(id: number): string
    }

    class JugadorRiver implements Jugador, Posicion {

        public name: string;
        public apellido: string;
        public age: number;
        public posicion: string;

        darPase(id: number): string {
            return 'da el pase con la izquiera'
        }

    }

    const defensor = new JugadorRiver()

    /*     console.log(defensor.darPase(3));
     */


})()