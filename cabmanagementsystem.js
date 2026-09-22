class Vehicle {

    static booking() {
        console.log("Booking Platform: Ola");
    }

    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }

    calculateFare() {
        console.log("Fare:", this.distance * 10);
    }
}

class Car extends Vehicle {

    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        console.log("Car Fare:", this.distance * 15);
    }
}

class Bike extends Vehicle {

    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);
    }

    calculateFare() {
        console.log("Bike Fare:", this.distance * 8);
    }
}

let c1 = new Car(101, "Nischal", 10);
let b1 = new Bike(102, "Rohit", 10);

Vehicle.booking();

c1.calculateFare();
b1.calculateFare();
