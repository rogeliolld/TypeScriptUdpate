(()=>{

    
    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress(id:string):string,
        
    }
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address:{
            id: 125,
            zip: 'KY2 DUS',
            city: 'Ottawa'
        },
        getFullAddress(id:string){
            return this.address.city
        }
    }

    const client2: Client = {
        name: 'Maria',
        age: 25,
        address:{
            id: 125,
            zip: 'KY2 DUS',
            city: 'Ottawa'
        },
        getFullAddress(id:string){
            return this.address.city
        }
    }

    


})()