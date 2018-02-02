
function calcBMI() {
	var weight = eval(parseFloat(document.getElementById("weight").value));
	var height = eval(parseFloat(document.getElementById("height").value));
	if (weight=="" || height==""){
	    document.getElementById("msg").innerHTML="You need to enter a valid number for weight and height, try again!";
	}else if (isNaN(weight) || isNaN(height)){
		document.getElementById("msg").innerHTML="You need to enter a valid number for weight and height, try again!";
// I did not add in any other weight and height constrants because,
// I thought it would be fun for user to beable to put in really crazy numbers	
	}else if (weight < 0 || height < 0){ 
		document.getElementById("msg").innerHTML="You need to enter a valid positive number for weight and height, try again!";
	}
	else {   
	var currentBMI = Math.floor((weight * 703) / (height * height));
	document.getElementById("msg").innerHTML="Your current BMI is: " + currentBMI;
	}
}
function getFocus(){
	document.getElementById("weight").focus();
	document.getElementById("msg").innerHTML=" ";
}