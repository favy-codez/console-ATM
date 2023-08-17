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

function exit() {
	var confirm_leave = confirm('You have selected exit.');
	if (confirm_leave) {
		window.close();
	} else {
		atm();
	}
}

function atm() {
    var name = prompt("Enter your name") ; 
    var capitalized = name.toUpperCase();
    var bank = prompt("Enter Bank Name");
    // var bankName = Number(prompt("What is your bank name?\n 1. GTB\n2.Access\n3.Stanbic-IBTC\n4.Fidelity\n5.Sterling\n6.Skye\n7.Firstbank\n8.Others"));
    //prompt user for choice.
	
    var selectAccount = Number(prompt("Which type of account do you have?\n 1. Savings\n 2. Current\n 3. Credit"));
    // input pin
    // check pin
    // send option
    if (selectAccount < 4){
        var choice = parseInt(prompt(`Welcome!!! ${capitalized} to ${bank}\n What would you like to do?\n 1.) Check Balance\n 2.) Deposit\n 3.) Withdrawal\n 4.) Exit`)); 
    }if (choice === 1) {
		get_balance();
	} else if (choice === 2) {
		make_deposit();
	} else if (choice === 3) {
		make_withdrawal();
	} else if (choice === 4) {
		exit();
	} else {
		error();
	}
}

atm();