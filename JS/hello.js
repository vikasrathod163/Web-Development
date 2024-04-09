class Student{
    name;
    id;
    sayHello = function(){
        console.log("hello ");
    }
    setValues = (n,id)=>{
        console.log("Initialization values........");
        this.name = n;
        this.id = id;
    }
    getName = ()=>{
        return this.name;
    }
    getId = ()=>{
        return this.id;
    }
}

// let s = new Student();
// console.log(s.name);
// s.sayHello();

// console.log(s.getName());

let s2 = new Student();
s2.setValues("vikas",12);
console.log(s2.getName());
console.log(s2.getId());

// Constructor & Destructor




// Inheritance"

// Simple Inheritance

class Animal{
    name;
    legs;
    color;

    Animal = (n,l,c)=>{
        this.name = n;
        this.legs = l;
        this.color = c;
    }
}


let tiger = new Animal();
tiger.Animal("Tiger",4,"Yellow + Black");
console.log("name of the animal : ",tiger.name);

// Hirarchical inheritance

class Vehicle{
    companyName;
    carName;
    chessisNo;
    color = "black";
    noOfTyres;
    fuel = 0;

    start = ()=>{
        console.log(this.carName," Started.......");
    }
    run = ()=>{
        console.log("Car is Running..........");
    }
    stop = ()=>{
        console.log("Car Stopped.........");
    }
}

class BMW extends Vehicle{
    companyName = "BMW";
    carName = "Demo";
    chessisNo = 2333;
    noOfTyres = 4;

    checkFuel(){
        console.log("Current Fuel : ",this.fuel);
    }

    refill(fuel){
        this.fuel += fuel;
    }

}
class Maruti extends Vehicle{
    companyName = "Maruti-suzuki";
    carName = "Echo";
    chessisNo = 2332;
    noOfTyres = 4;
}

let demo = new BMW();
demo.checkFuel();
demo.refill(10);
demo.refill(1);
demo.checkFuel();


let car = new Maruti();
car.start();
car.fuel = 10;  
console.log("Color of the car : ",car.color);
