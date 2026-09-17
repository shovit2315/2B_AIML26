class Student {
    static count = 0;

    constructor(rollnumber, name, marks) {
        this.rollnumber = rollnumber;
        this.name = name;
        this.marks = marks;

        Student.count++;
    }

    display() {
        console.log("Roll Number: " + this.rollnumber);
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);

        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
    }
}

let s1 = new Student(101, "Shovit", 85);
let s2 = new Student(102, "Shubham", 35);
let s3 = new Student(103, "Nischal", 75);

s1.display();
s2.display();
s3.display();

console.log("Total Students: " + Student.count);
