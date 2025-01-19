//Max Rivera 9/18/2024
//Individual Practice

//Orginal Conditional
var strInput = prompt("Please enter 1, 2 or 3");
var intInput = parseInt(strInput);

if (intInput == 1) {
    console.log("You entered 1!");
} else if (intInput == 2) {
    console.log("You entered a 2!");
} else if (intInput == 3) {
    console.log("You entered a 3!");
} else {
    console.log("I said a number between 1 and 3!!");
}

//switch
switch (intInput) {
    case 1:
        console.log("You entered 1!");
        break;
    case 2:
        console.log("You entered a 2!");
        break;
    case 3:
        console.log("You entered a 3!");
        break;
    default:
        console.log("I said a number between 1 and 3!!");
}