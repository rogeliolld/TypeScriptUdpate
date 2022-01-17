( ()=>{

    const hero: string = 'Flash';

    function returName(): string{
        return hero;
    }

    const activateBatisignal = (): string => {
        return 'Batiseñal Activada!';
    }

    console.log(typeof activateBatisignal);
    
    const heroName = returName();



})()