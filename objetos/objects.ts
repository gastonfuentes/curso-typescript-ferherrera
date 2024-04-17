(() => {

    let flash: { name: string, age?: number, powers: string[], getNombre?: () => string } = {
        name: 'flash',
        age: 40,
        powers: ['velicidad', 'fuerza']
    }


    flash = {
        name: 'pedro',
        //age: 70,
        powers: ['molestar'],
        getNombre() {
            return this.name
        }
    }


    console.log(flash.name);


})()