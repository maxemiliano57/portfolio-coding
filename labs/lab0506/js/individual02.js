//Max Rivera 9/25/2024
//Individual Practice
//Reverse Word Practice

function displayLowerReverse() {
    var message = prompt("Enter a word, please");

    var endresult = message.toLowerCase().split('').reverse().join('');

    console.log(endresult);

}
displayLowerReverse();