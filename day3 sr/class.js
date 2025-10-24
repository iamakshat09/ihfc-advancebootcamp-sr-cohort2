class Car{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    start(){
        console.log("car is started")
    }

    showdata(){
        console.log("the car name is "+this.name+" with color "+this.color)
    }
}

let car1=new Car("brezza","white")
car1.start()
car1.showdata()

let car2=new Car("Honda city","black")
car2.start()
car2.showdata()