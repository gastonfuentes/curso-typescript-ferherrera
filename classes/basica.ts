(() => {

    class Jugador {
        //public nombre: string;
        //public apellido: string;
        //private titular: boolean
        static edad: number = 30
        static getEdad() {
            return this.name
        }

        constructor(
            public nombre: string,
            public apellido: string,
            private titular?: boolean
        ) { }

        bio() {
            return `${this.nombre} - ${this.apellido}`
        }
    }


    const lateralIzq: Jugador = new Jugador('paulo', 'diaz');

    //console.log(lateralIzq);

    //console.log(lateralIzq.bio());

    //console.log(Jugador.getEdad());


})()