
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

var today = new Date();
var weekFromToday = new Date(today.getTime() + 7*24*60*60*1000);

var firstSki = new Ski('Kore 93', 'HEAD', 'All-mountain', '180cm', '93mm', '650', '80');
var secondSki = new Ski('Soul 7', 'Rossignol', 'All-mountain', '180cm', '106mm', '850', '150');

document.getElementById("skiName1").innerHTML = firstSki.name;
document.getElementById("skiBrand1").innerHTML = firstSki.brand;
document.getElementById("skiType1").innerHTML = firstSki.type;
document.getElementById("skiLength1").innerHTML = firstSki.length;
document.getElementById("skiWidth1").innerHTML = firstSki.width;
document.getElementById("skiPrice1").innerHTML = firstSki.price;
document.getElementById("skiDiscount1").innerHTML = firstSki.discount;
document.getElementById("skiCost1").innerHTML = firstSki.cost();
document.getElementById("discountReceived1").innerHTML = firstSki.discountMessage();

document.getElementById("skiName2").innerHTML = secondSki.name;
document.getElementById("skiBrand2").innerHTML = secondSki.brand;
document.getElementById("skiType2").innerHTML = secondSki.type;
document.getElementById("skiLength2").innerHTML = secondSki.length;
document.getElementById("skiWidth2").innerHTML = secondSki.width;
document.getElementById("skiPrice2").innerHTML = secondSki.price;
document.getElementById("skiDiscount2").innerHTML = secondSki.discount;
document.getElementById("skiCost2").innerHTML = secondSki.cost();
document.getElementById("discountReceived2").innerHTML = secondSki.discountMessage();

document.getElementById("date").innerHTML = weekFromToday;
