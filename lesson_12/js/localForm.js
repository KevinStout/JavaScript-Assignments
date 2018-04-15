document.getElementById("sub").addEventListener("click",function(e){
	e.preventDefault();
	document.getElementById("lastError").innerHTML="";
	document.getElementById("firstError").innerHTML="";
	document.getElementById("emailError").innerHTML="";
	document.getElementById("phError").innerHTML="";
	var fName = document.getElementById("firstName").value;
	var lName =document.getElementById("lastName").value;
	var email =document.getElementById("email").value;
	var areaCode=document.getElementById("areaCode").value;
	var phone =  document.getElementById("phone").value;
	var errorFlag='n';
	if(fName==""){
		document.getElementById("firstError").innerHTML = "You must fill in the first name";
		errorFlag='y';
	} else if (lName=="") {
		document.getElementById("lastError").innerHTML = "You must fill in the last name";
		errorFlag='y';		
	} else if (areaCode==""){
		document.getElementById("phError").innerHTML="You must fill in the area code and phone number";
		errorFlag='y';
	}else if(phone==""||phone.length<8)	{	
		document.getElementById("phError").innerHTML="You must fill in the 7 digit phone number (555-7894), you must also add the - to the number";
		errorFlag='y';
	} else if (email==""){
		document.getElementById("emailError").innerHTML="You must fill in the email address";
		errorFlag='y';
	} else if(email) {
		var atposition=email.indexOf("@");  
		var dotposition=email.lastIndexOf(".");  
		if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
	 	  document.getElementById("emailError").innerHTML="The email address you entered is invalid.";
	      errorFlag='y';		  
		}
  	} 
	if(errorFlag=='n'){
		localStorage.firstname = fName;
		localStorage.lastname = lName;
		localStorage.email = email;
		localStorage.areaCode=areaCode;
		localStorage.phone = phone;
		window.location.assign("localConfirm.html");
	}	
});