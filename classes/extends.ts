(() => {


    class JugadorRiver {

        constructor(
            public nombre: string,
            public apellido: string,
        ) {
            /*  console.log('desde el constructor de jugador river'); */

        }

        protected nombreCompleto() {
            return `${this.nombre} - ${this.apellido}`
        }
    }

    class Defensor extends JugadorRiver {

        constructor(
            nom: string,
            ape: string,
            public titular: boolean
        ) {
            super(nom, ape)
            /*  console.log('desde el constructor de Defensor'); */

        }

        public mostrarMetodoSuper() {
            /*  console.log(super.nombreCompleto()); */

        }


        public get apellidoYNombre(): string {
            return `${this.apellido} - ${this.nombre}`
        }




    }

    const lateralIzq = new Defensor('enzo', 'diaz', true)

    lateralIzq.mostrarMetodoSuper();
    /* 
        console.log(lateralIzq.apellidoYNombre); */



})()