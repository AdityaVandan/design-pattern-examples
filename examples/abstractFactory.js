class Vehicle {
  constructor(name, wheels) {
    this.name = name || "Vehicle";
    this.wheels = wheels || 0;
    // more properties...
  }
  goInReverse() {
    console.log("going in reverse");
  }
  // other more methods ...
}

class Car extends Vehicle {
  constructor() {
    super();
    this.name = "Car";
    this.wheels = 4;
    // more properties...
  }

  // @overridden
  goInReverse() {
    console.log("going in reverse by switching gear");
  }
  // other more methods ...
}

class Bike extends Vehicle {
  constructor() {
    super();
    this.name = "Bike";
    this.wheels = 4;
    // more properties...
  }

  // @overridden
  goInReverse() {
    console.error("cannot go in reverse");
  }
  // other more methods ...
}

class Truck extends Vehicle {
  constructor() {
    super();
    this.name = "Truck";
    this.wheels = 6;
    // more properties...
  }

  // @overridden
  goInReverse() {
    console.log("going in reverse by changing gear");
  }
  // other more methods ...
}


const vehicleFactory = {
  createVehicle: function (type) {
    switch (type.toLowerCase()) {
      case "car":
        return new Car();
      case "truck":
        return new Truck();
      case "bike":
        return new Bike();
      default:
        return null;
    }
  }
};

const car = vehicleFactory.createVehicle("Car"); // Car { name: "Car", wheels: 4 }  
const truck = vehicleFactory.createVehicle("Truck"); // Truck { name: "Truck", wheels: 6 }  
const bike = vehicleFactory.createVehicle("Bike"); // Bike { name: "Bike", wheels: 2 }  
const unknown = vehicleFactory.createVehicle("Plane"); // null ( Vehicle not known )
console.log(car, truck, bike, unknown);
