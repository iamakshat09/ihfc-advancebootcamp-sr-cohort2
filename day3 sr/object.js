const Car={
    name:"Brezza",
    color:"red",
    start(){
        console.log("Car is started");
    },
    stop(){
        console.log("Car is Stoped")
    },
    showdata(){
        console.log("the name of my car is "+this.name+" with color "+this.color);
    }
}

Car.start()
Car.showdata()
Car.stop()