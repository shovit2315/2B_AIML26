class Product {
    static count = 0;

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        Product.count++;
    }

    discount(d) {
        return this.price - (this.price * d / 100);
    }

    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Price:", this.price);
    }

    static compare(p1, p2) {
        if (p1.price > p2.price) {
            console.log(p1.name, "has higher price");
        } else {
            console.log(p2.name, "has higher price");
        }
    }
}

class Electronics extends Product {
    constructor(id, name, price, warranty) {
        super(id, name, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty);
    }
}

let p1 = new Product(101, "Pen", 20);
let p2 = new Electronics(102, "Mobile", 10000, 1);

p1.display();
console.log("Final Price:", p1.discount(10));

p2.display();
console.log("Final Price:", p2.discount(10));

Product.compare(p1, p2);

console.log("Total Products:", Product.count);
