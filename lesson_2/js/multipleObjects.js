
function Ski(name, brand, type, length, width, price, discount){
    this.name = name;
    this.brand = brand;
    this.type = type;
    this.length = length;
    this.width = width;
    this.price = price;
    this.discount = discount;
    this.cost = function(){
        var totalCost = parseInt(this.price) - parseInt(this.discount);
        return "$" + totalCost;
    }
    this.discountMessage = function(){
        var discountReceived = "That is a " + Math.round(parseInt(this.discount)/parseInt(this.price)*100) + "% discount!";
        return discountReceived;
    }
}

var firstSki = new Ski('Kore 93', 'HEAD', 'All-mountain', '180cm', '93mm', '650', '80');
var secondSki = new Ski('Soul 7', 'Rossignol', 'All-mountain', '180cm', '106mm', '850', '150');

console.log(firstSki.discountMessage() + " " + firstSki.name + " " + firstSki.brand + " " +  firstSki.length + " " + firstSki.type + " " + firstSki.width);
console.log("this is the second ski cost " + secondSki.discountMessage());
