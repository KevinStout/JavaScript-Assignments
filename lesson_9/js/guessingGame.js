	var computer = new Number;
	var tries=new Number(0);
    
    document.getElementById("getNumber").addEventListener("click", function(){
		getFocus();
    	tries=0;
    	document.getElementById("guess").value="";
    	document.getElementById("tries").value=tries;
        computer= Math.floor((Math.random() *100) + 1);
        document.getElementById("comments").value="I have a number and I am waiting for you to guess it";
    });

    document.getElementById("checkGuess").addEventListener("click", function() {
			var guess = new Number(document.getElementById("guess").value);
			console.log(guess);
			
			try{
				if (guess==""){				   
					throw "You need to enter a valid number for your guess, try again!";
					tries++;
				}else if (isNaN(guess)){				
					throw "You need to enter a valid number for your guess, try again!";
					tries++;
				}else if (guess<1||guess>100){					
					throw new RangeError("Your guess needs to be a number between 1 and 100, please try again!");
					tries++;
				}else {   
					if (computer==guess){
						document.getElementById("comments").value="You guessed correctly - congratulations! It only took " + tries + " tries!";
					}else if (computer<guess) {
					  document.getElementById("comments").value="Your guess is too high, try again!";
					  tries++;
					  document.getElementById("tries").value=tries;
				  	}else {
					  document.getElementById("comments").value="Your guess is too low, try again!";
					  tries++;
						 document.getElementById("tries").value=tries;
					}
				}
			}	
			catch(errMsg){
				document.getElementById("comments").value = errMsg;
			}
			console.count();
	});
		
	document.onload=getFocus();	
	function getFocus(){
		document.getElementById("guess").focus();
		document.getElementById("comments").value = " ";
	}
     


