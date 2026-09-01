let productid="64";
let Product_name="termi";
let price="20";
let quantity="40";

function total() {
    let total_price = price * quantity;
    return total_price;
}

function update_product_quantity(z) {
    quantity = z;
}

function display() {
    console.log("Product id:", productid);
    console.log("Product name:", Product_name);
    console.log("Price:", price);
    console.log("Quantity:", quantity);
    console.log("Total price:", total());
}

display();
update_product_quantity(10);
display();
