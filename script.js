 //set initial balance.
 let balance = 1000;

 function get_balance() {
     alert('Your current balance is: '+balance);
     atm();
 }
 
 function make_deposit() {
     var deposit = parseFloat(prompt('How much would you like to deposit?'));
     if (isNaN(deposit) || deposit === '') {
         alert('Error: please enter a number!');
         make_deposit();
     } else {
         balance += deposit;
         get_balance();
         }
 }

 function make_withdrawal() {
	var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
	if (isNaN(withdrawal) || withdrawal === '') {
		alert('Error: please enter a number!');
		make_withdrawal();
	} else {
		balance -= withdrawal;
		get_balance();
	}
}

function error() {
	alert('Please make a valid selection');
	atm();
}



