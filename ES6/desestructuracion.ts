(() => {

    type Avenger = {

        nick: string;
        ironman: string;
        flash: string;
        activos: boolean;
        poder: number;
    }

    const avengers: Avenger = {
        nick: 'samuel',
        ironman: 'juancito',
        flash: 'pulgarcito',
        activos: true,
        poder: 1500
    }


    const { flash, poder } = avengers

    console.log(flash, poder);

    const mostrarAvenger = ({ ironman, ...restoDeParametros }: Avenger) => {

        console.log(ironman, restoDeParametros);

    }

    mostrarAvenger(avengers)

    //DES DE ARREGLOS

    const avengersArray: [string, string, boolean] = ['flash', 'capitan america', true]

    const [primer, ...otros] = avengersArray

    console.log(otros);




})()