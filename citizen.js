class Citizen{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }

    addAddress(add){
        this.add=add;
    }

    getDetails(){
        console.log(`Name of this resident is ${this.name}, residing at ${this.add}`)
    }
}
    
    module.exports={Citizen};