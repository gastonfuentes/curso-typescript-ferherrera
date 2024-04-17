(() => {

    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'flash',
        age: 40,
        powers: ['velicidad', 'fuerza']
    }

    let batman: Hero = {
        name: 'batman',
        age: 50,
        powers: ['velicidad'],
        getName() { return this.name }
    }

})()