//Max Rivera Mid-Term Assignment 10/13/2024
var users_answer = ""
var users_string = ""
var robo_string = ""

while (true) {
    users_answer = prompt("Enter 1 to input a string, 2 to convert the string into robot langauge, 3 to display the robot language input, or type 'exit' to quit.")
    switch (users_answer) {
        case "1":
            users_string = prompt("Please enter a string.")
            if (users_string == "") {
                console.log("You need to type something in.")
            }
            else {
                console.log("Your response has been saved.")
            }
            break;

        case "2":
            if (users_string == "") {
                console.log("You have to enter a string.")
            }
            else {
                robo_string = convertedintorobotlanguage(users_string);
                console.log("Your string has been converted!Yay!");
            }
            break;

        case "3":
            if (users_string == "") {
                console.log("You first need to convert your string! DUH!");
            }
            else {
                console.log("Here is the ROBOT version of your string:");
                console.log(robo_string);
                users_string = "";
                robo_string = "";
            }
            break;

        case "exit":
            console.log("Thanks for using the Robot Language Converter!");
            break;

        default:
            console.log("Invalid response. Please enter 1, 2, 3, or 'exit'.");
            break;
    }
}
if (users_answer = "exit")
    console.log("Thanks for using the ROBOT Language Converter!")

function convertedintorobotlanguage(string) {
    var arrSplitWords = string.split(" ");

    for (var i = 0; i < arrSplitWords.length; i++) {
        if (arrSplitWords[i].length > 5) {
            arrSplitWords[i] = arrSplitWords[i] + "-clink";
        } else {
            arrSplitWords[i] = arrSplitWords[i] + "-clank";
        }
    }
    var strSplitWords = arrSplitWords.join(" ");
    return strSplitWords;
}