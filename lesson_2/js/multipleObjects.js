
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
}

var firstSki = new Ski('Kore93', 'HEAD', 'All-mountain', '180cm', '93mm', '650', '10');

console.log(firstSki.brand + " " +  firstSki.length + " " + firstSki.type + " " + firstSki.name);

