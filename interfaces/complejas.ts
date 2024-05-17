(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string
    }

    const client: Client = {
        name: 'Gaston',
        age: 40,
        address: {
            id: 125,
            zip: '5111',
            city: 'Rio Ceballos'
        },
        getFullAddress(id: string) {
            return 'Hola'
        }
    }

    const client2: Client = {
        name: 'Melisa',
        age: 30,
        address: {
            id: 23,
            zip: '5300',
            city: 'La Rioja'
        },
        getFullAddress(id: string) {
            return 'Hola'
        }

    }



})()