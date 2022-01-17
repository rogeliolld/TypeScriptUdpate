(()=>{

    abstract class Mutante{

        constructor(
            public name:string,
            public realName: string
        ){}
    }

    class Xmen extends Mutante{

        salvarMundo(){
            return 'Mundo a Salvo'
        }

    }

    class Villian extends Mutante{

        consquitarMundo(){
            return 'Mundo Conquistado'
        }

    };

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.consquitarMundo());
    

    const printName = (character: Mutante)=>{
        // console.log(character.realName);
        
    }

    printName(wolverine)


})()