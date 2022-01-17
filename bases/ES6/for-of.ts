( ()=> {

    type Avenger = {
        name: string,
        weapon:string
    }

    const iroman: Avenger = {
        name: 'Iroman',
        weapon: 'ArmorSuit'

    }
    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo'

    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'

    }

    const avengers: Avenger[] = [iroman, thor, captainAmerica];


    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
        
    }


})()