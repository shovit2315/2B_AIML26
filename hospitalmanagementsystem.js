class Person {

    static count = 0;

    static displayCount() {
        console.log("Total Persons:", Person.count);
    }

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        Person.count++;
    }

    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

class Doctor extends Person {

    constructor(id, name, age, specialization, fee) {
        super(id, name, age);
        this.specialization = specialization;
        this.fee = fee;
    }

    displayDetails() {
        super.displayDetails();
        console.log("Specialization:", this.specialization);
        console.log("Fee:", this.fee);
    }
}

class Patient extends Person {

    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }

    displayDetails() {
        super.displayDetails();
        console.log("Disease:", this.disease);
        console.log("Room No:", this.roomNo);
    }
}

let d1 = new Doctor(101, "Nischal", 30, "Cardiologist", 500);
let d2 = new Doctor(102, "Rohit", 35, "Dentist", 400);



d1.displayDetails();
d2.displayDetails();



Person.displayCount();
