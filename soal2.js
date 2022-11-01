// sololearn

// 31.2 partice
var cuboid = {
    length: 25,
    width: 50,
    height: 200
};
console.log(cuboid.length * cuboid.width * 
cuboid.height)


// 32.2 partice
function main() {
    
    var flightNumber = readLine();
    var flightStatus = readLine();
    var flight1 = new Flight(flightNumber,
    flightStatus);
    console.log('The flight ' + flight1.number 
    + ' is ' + flight1.status);
}
function Flight(flightNumber, status) {
    //fix the constructor
    this.number = flightNumber;
    this.status = status;
};



// 34.2
function main() {
    var prodID = readLine();
    var price = parseInt(readLine(),10);
    var discount = parseInt(readLine(),10);
    var prod1= new Product(prodID, price);
console.log(prod1.prodID + " price: " + prod1.price);
    prod1.changePrice(discount);
console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;
    this.changePrice = function(discount) {
        //your code goes here
        this.price = price - ((discount/100)*price);
    }
}



// 36
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = print; 
    } 
    function print() { 
console.log(this.name + ": " + this.number);
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

// 01-11-2022