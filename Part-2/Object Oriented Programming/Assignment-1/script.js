class Car{
    constructor (name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    };
    run(){
        console.log("Car Is Running Now");
    };
    stop(){
        console.log("Car Is Stopped");
    }
}

let car1 = new Car("MG",2022,420000);
console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
car1.run();

//output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"


