//Daniel Krupczak and Max Rivera Group Practice
var favFruit = prompt("What is your favorite fruit?");
console.log(favFruit);

var age = prompt("How old are you?");
console.log(age);

var rgb = prompt("Between the three primary colors of Red, Blue, and Green, which do you resonate most with?");


switch (rgb) {
    case "Red": {
        console.log("You entered Red!");
        break
    }
    case "Blue": {
        console.log("You entered Blue!")
        break
    }
    case "Green": {
        console.log("You entered a Green!")
        break
    }
    default:
        console.log("Wrong color, try again!")
        break
}


