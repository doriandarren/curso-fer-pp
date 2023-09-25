

export class Car {

    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;


    constructor(){
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelTank = 100;
        this.isRunning = false;
        this.type = 'No type';
        this.createdAt = 1234567;
    }

    turnOn(){
        if(this.isRunning){
            console.log("el carro estaba encendido... se daño el motor");
            return;
        }

        if(this.fuelTank <= 0 ){
            console.log('El carro no tiene gasolina');
            return;
        }
        
        this.isRunning = true;
        console.log("El carro esta encendio");
        
    }


    fillTank(gas: number){

        if(gas <= 0){
            console.log('El gas tiene que ser positivo');
            return;
        }

        let newFuleTank = this.fuelTank + gas;
        if(newFuleTank >= 100){
            this.fuelTank = 100;
        }else{
            this.fuelTank = newFuleTank;
        }


    }


}




let myMazda = new Car();
console.log(myMazda);
myMazda.turnOn();


