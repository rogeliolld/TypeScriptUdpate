(()=>{

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: ()=> string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers:['Super Velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero={
        name: 'Clark Kent',
        age: 60,
        powers:['Super Fuerza'],
        getName(){
            return this.name;
        }
    }


    console.log( flash.getName!() );
    

})()